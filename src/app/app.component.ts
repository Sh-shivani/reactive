import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginform = new FormGroup ({
    username:new FormControl('shivuuuuuuuu',[Validators.required ,Validators.minLength(4)]),
    password:new FormControl('1509'),
    
    email:new FormControl('',[Validators.required,Validators.email]),
    phoneno:new FormControl('',[Validators.minLength(4),Validators.maxLength(12)])
    
  })
  submitted:boolean=false;
  
  collectData(): void   
  {
    this.submitted=true;
    console.warn(this.loginform.value);
    
  }
  title = 'Form';
  get username() { return this.loginform.get('username')}
  get email() {return this.loginform.get('email')}
  get phoneno() {return this.loginform.get('phoneno')}
}

