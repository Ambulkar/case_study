import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})
export class EditprodComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean = false
  constructor(private formbuilder: FormBuilder, private router: Router, private serviceprod: ProductService) { }

  ngOnInit() {
      let id = localStorage.getItem("id")
      if (!id) {

        alert("invalid action pleaser check Product list")
        this.router.navigate(['\home'])
      }
      else {

        this.editForm = this.formbuilder.group({
          id: [],
          pid: ['', Validators.required],
          name: ['', Validators.required],
          description: ['', Validators.required],
          price: ['', Validators.required],

        })

      }
     
      this.serviceprod.getUserById(+id).subscribe(data => { this.editForm.setValue(data)
       })
    


  }
  edit() {
    this.submitted = true
    if (this.editForm.invalid) {

      return
    }

    this.serviceprod.edittojson(this.editForm.value).subscribe(data => { })
    this.serviceprod.getProduct().subscribe()
    this.router.navigate(['\home'])
    

  }
 

  List() {
    this.router.navigate(['\home'])

  }
}









 
 