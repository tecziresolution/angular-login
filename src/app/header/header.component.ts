import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  mySubscription:any;
  constructor(public router : Router, public authService : AuthService) { 
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn =  this.authService.isLoginVal();
        this.router.navigated = false;
      }
    });
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  ngOnInit() {
   this.isLoggedIn =  this.authService.isLoginVal();
  }
  logout(){
    console.log('click');
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
