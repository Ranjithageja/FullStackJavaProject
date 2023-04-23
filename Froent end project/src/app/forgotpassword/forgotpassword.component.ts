import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }

  ngOnInit(){

  }
  submit(){
    this.router.navigate(['resetpassword']);
    }

  }


