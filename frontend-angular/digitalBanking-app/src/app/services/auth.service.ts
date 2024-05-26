import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users: any={
    admin :{password:'1234',roles:['STUDENT','ADMIN']},
    user1 :{password:'1234',roles:['STUDENT']},
  }

  isAuthenticated : boolean=false;
  roles :any;
  username : any;
  accessToken! : any;
  constructor(private http : HttpClient) {

  }

  public login(username:string , password:string){
    if(this.users[username] && this.users[username]['password']==password){
      this.username=username;
      this.roles=this.users[username]['roles'];
      this.isAuthenticated=true;
      return true;
    }
    return false;
  }
  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    let decodeJwt:any = jwtDecode(this.accessToken);
    this.username = decodeJwt.sub;
    this.roles = decodeJwt.scope;
    window.localStorage.setItem("jwt-token",this.accessToken)
  }

  logout() {
    this.isAuthenticated =false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
