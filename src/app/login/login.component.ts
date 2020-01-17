import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router, NavigationEnd } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  isFound = false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { 
    
  }
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  
  get formControls() { return this.loginForm.controls; }
  login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    if(this.loginForm.value.email === 'abc@media.com' && this.loginForm.value.password === 'abc123'){
      this.authService.login(this.loginForm.value);
      this.router.navigateByUrl('/gallery');
    } else if(this.loginForm.value.email === 'def@media.com' && this.loginForm.value.password === 'def123') {
      this.authService.login(this.loginForm.value);
      this.router.navigateByUrl('/gallery');
    }else{
      this.isFound = true;
    }
    
     
  }
}
