import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.username==='snehangshu123'){
      this.router.navigate(['welcome',this.username])
      this.isInvalidCredentials=false
    }else this.isInvalidCredentials=true
  }

}
