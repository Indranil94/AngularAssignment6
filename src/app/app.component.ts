import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f',{static: false}) subForm: NgForm;
  defaultChoice: string;
  userData: {
    email: string,
    password: string,
    sub: string
  }
  submitted: boolean;

  ngOnInit(){
    this.defaultChoice = "advanced";
    this.userData = {
      email: "",
      password: "",
      sub: ""
    }
    this.submitted=false;
  }

  onSubmit(){
    this.userData.email= this.subForm.value.email;
    this.userData.password= this.subForm.value.password;
    this.userData.sub= this.subForm.value.subscription;
    this.submitted=true;
    this.subForm.reset();
  }

}
