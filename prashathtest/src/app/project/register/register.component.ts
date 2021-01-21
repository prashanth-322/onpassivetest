import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonserviceService } from '../../commonservice.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userForm = {
    username : '',
    password : '',
    role : '',
  }
  isWrong : boolean;
  messagee : any;
  

  constructor(private formBuilder: FormBuilder,  private route:Router, private cms :CommonserviceService,private http :HttpClientModule ) { 
    this.registerForm = this.formBuilder.group({
      'email' : ['',[Validators.required]],
      // 'email': new FormControl('',[Validators.email]),
      'password': ['',[Validators.required]],
      'userrole': ['',[Validators.required]]
    });
  }

  ngOnInit() {

  }

  submit(){
    console.log("submit");
    console.log(this.userForm);
    // this.cms.register()
    this.cms.register(this.userForm).subscribe((res:any)=>{
      console.log(res)
      if(res.msg == 'success'){
        this.isWrong = true;
        this.messagee = res.code;
        var that = this;
        setTimeout(function(){
          that.isWrong = false;
        },3000)
      }
    })
  }

}
