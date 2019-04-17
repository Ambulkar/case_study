import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from 'src/app/model/product';
import { ProductService} from '../../service/product.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private serviceproduct: ProductService, private router: Router) { }
  product: Product[] = []
  page: number = 1;
  ngOnInit() {
      this.serviceproduct.getProduct().subscribe(data => this.product = data)
  }

  delete(product: Product) {
    this.serviceproduct.deletetoJson(product.id).subscribe(data => {
      this.product = this.product.filter(u => u !== product);
    })
  }
 
  deleteAllProduct(product: Product[]): void {
    let result =confirm('Are you sure you want to delete all products?')
    if(result){
      for(let prod of product){
        this.serviceproduct.deletetoJson(prod.id).subscribe(data => {
          this.product = this.product.filter(u => u !== prod);
      });
    }
  }
}
  addProd() {
    this.router.navigate(['/addproduct'])
  }

  editprod(prod: Product) {
    localStorage.removeItem("id")
     localStorage.setItem("id", prod.id.toString())
    this.router.navigate(['/editproduct'])

  }

}
