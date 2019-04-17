import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false

  constructor(private formbuilder: FormBuilder, private router: Router, private serviceproduct: ProductService) {

  }

  ngOnInit() {
    this.addForm = this.formbuilder.group({
      id: [],
      pid:['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],

    })
  }

  AddProduct() {
    this.submitted = true
    if (this.addForm.invalid) {
      return
    }

    this.serviceproduct.addtoJson(this.addForm.value)
      .subscribe()
    this.serviceproduct.getProduct().subscribe()
    this.router.navigate(['\home'])
  }

  List() {
    this.router.navigate(['\home'])

  }

}


 
  