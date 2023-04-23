import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Red Bus';
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
    
  }
  confirmLogout(){
    var status= confirm("Are you surely want to logout?");
    if(status==true){
      this.router.navigate(['logout']);
    }
  }
}
