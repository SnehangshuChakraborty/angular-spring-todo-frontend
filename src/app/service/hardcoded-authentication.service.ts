import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username: string,password: string){
    if(username==='snehangshu123' && password === 'snehangshu'){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    if(user===null){
      return false;
    }
    return true;
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
