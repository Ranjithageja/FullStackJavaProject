import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit{
  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }

  ngOnInit(){
    
  }
  submit(){
    alert ("Registration successfully");
    this.router.navigate(['busManagements']);
    }
  
}
