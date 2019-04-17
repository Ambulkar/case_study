import { Injectable } from '@angular/core';
import {Product} from 'src/app/model/product';
import { DataAccessService } from '../services/data-access.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private dataaccessservice:DataAccessService) { }

getProduct()
{
return this.dataaccessservice.getProductValue()
}

deletetoJson(id){
  return this.dataaccessservice.deletetoJsonValue(id)
}

addtoJson(product:Product){
   return this.dataaccessservice.addtoJsonValue(product)
 
}
edittojson(product:Product){
  console.log(product.id)
  return this.dataaccessservice.edittojsonValue(product)
}

getUserById(id:number){
  return this.dataaccessservice.getUserByIdValue(id)
}
}




