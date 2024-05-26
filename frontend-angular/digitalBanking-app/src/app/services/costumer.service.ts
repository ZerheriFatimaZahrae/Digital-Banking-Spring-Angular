import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/consumer.model";
import {environment} from "../../environements/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CostumerService  {
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers")
  }
  public searchCustomers(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomer(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(environment.backendHost+"/customers",customer);
  }
  public deleteCustomer(id: number){
    return this.http.delete(environment.backendHost+"/customers/"+id);
  }
  public getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8085/customers/${customerId}`);
  }
}
