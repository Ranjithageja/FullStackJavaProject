import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit{
  firstName='';
  lastName='';
  email='';
  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }

  ngOnInit(): void {
    
  }
  submit(){
    if(this.firstName ===''|| this. lastName ===''||this.email===''){
      var status = confirm("please fill mandatory fields");
    }
    else{
    var status =confirm ("Registration successfully");
    if(status==true){
    this.router.navigate(['login']);
    }
  }
}
}