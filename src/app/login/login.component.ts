import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='snehangshu'
  password='snehangshu'
  errorMessage='Invalid Credentials'
  isInvalidCredentials=false

  constructor(private router: Router,
    private hardcodedAuthencticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.hardcodedAuthencticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.isInvalidCredentials=false
    }else this.isInvalidCredentials=true
  }

}
