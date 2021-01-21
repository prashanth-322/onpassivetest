import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonserviceService } from '../../commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = {
    username : '',
    password : '',
  }
  isWrong : boolean;
  errormessage : any;

  constructor(private route:Router, private cms :CommonserviceService) { }

  ngOnInit() {
  }
  
  login(){
    console.log("login");
    // console.log(this.userForm);
    this.cms.login(this.userForm).subscribe((res:any)=>{
      console.log(res);
      if(res.msg == 'wrong'){
        this.isWrong = true;
        this.errormessage = "Please enter correct details";
        var that = this;
        setTimeout(function(){
          that.isWrong = false;
        },3000)
      }
      else{
        if(res.length>0){
          console.log(res);
          if(res[0].role=="audit_user"){
            this.route.navigate(['/audit'])
            console.log("res[0].username", res[0].username)
            localStorage.setItem("username", res[0].username);
          }

        }
        // this.route.navigate(['/'])
      }
    })
  }

  back(){
    this.route.navigate(['/register'])
  }



}
