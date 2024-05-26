import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class authorizationGuard{
  constructor(private router : Router,
              private authService : AuthService) {

  }

  canActivate( route : ActivatedRouteSnapshot,  state: RouterStateSnapshot) {
    if(this.authService.roles.includes("ADMIN")){
      return true;
    }else {
      this.router.navigateByUrl("/admin/notAuthorized");
      return false;
    }
  }

}
