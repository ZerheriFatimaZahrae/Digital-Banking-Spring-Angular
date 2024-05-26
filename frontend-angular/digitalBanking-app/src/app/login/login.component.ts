import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{
  formLogin! : FormGroup;

  constructor(private fb : FormBuilder,
              private authService: AuthService ,
              private router : Router ) {
  }
  ngOnInit() {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }
  login() {
    let username=this.formLogin.value.username;
    let password=this.formLogin.value.password;
    if(this.authService.login(username,password)){
      this.router.navigateByUrl("/admin")
    }

  }
}
