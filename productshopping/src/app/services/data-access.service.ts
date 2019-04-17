import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Product} from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  baseUrl=" http://localhost:3000/Product"
  constructor(private http:HttpClient) { }

getProductValue()
{
return this.http.get<Product[]>(this.baseUrl)
}

deletetoJsonValue(id){
  return this.http.delete(this.baseUrl+"/"+id)
}

addtoJsonValue(product:Product){
 
   return this.http.post(this.baseUrl,product)
 
}
edittojsonValue(product:Product){
  console.log(product.id)

  return this.http.put<Product[]>(this.baseUrl+"/"+product.id,product)
}

getUserByIdValue(id:number){
  return this.http.get<Product>(this.baseUrl+"/"+id)
}
}




