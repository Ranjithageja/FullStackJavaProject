import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { BusManagement } from '../busManagement';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  getLogout: any;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router){

    }
    ngOnInit(){
      this.authenticationService.logOut();
      alert ("Thank you Visit again");

      this.router.navigate(['feedback']);
      
    }
    
}
  



