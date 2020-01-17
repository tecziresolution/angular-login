import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  udata : any;
  constructor() { }
  
  public login(user){
    localStorage.setItem('USER_TOKEN', user.email);
    localStorage.setItem('user-data',JSON.stringify(user));
  }

  public isLoggedIn(){
    return localStorage.getItem('USER_TOKEN') !== null;

  }
  public isLoginVal(){
    if(localStorage.getItem('USER_TOKEN')){
      return true;
    }else{
      return false;
    }
  }
  public logout(){
    localStorage.removeItem('USER_TOKEN');
    localStorage.removeItem('user-data');
  }
}
