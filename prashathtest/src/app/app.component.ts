import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prashathtest';

  constructor(private route:Router){
    let user = localStorage.getItem('username');
    console.log("user", user);
  }

  onActivate(e){
    console.log("localStorage.getItem('username')", localStorage.getItem('username'))
    var path = window.location.pathname
    if(localStorage.getItem('username') !== null){
      if(path == '/login'){
        this.route.navigate(['/audit'])
      }      
    }
    else{
      if(path == '/login'){
        this.route.navigate(['/login'])
      } 
      if(path == '/register'){
        this.route.navigate(['/register'])
      } 
    }
    
  }
}
