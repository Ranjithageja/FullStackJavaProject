import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';
import { BusManagement } from '../busManagement';


@Component({
  selector: 'app-create-bus-management',
  templateUrl: './create-bus-management.component.html',
  styleUrls: ['./create-bus-management.component.css']
})
export class CreateBusManagementComponent implements OnInit {
  busManagement: BusManagement = new BusManagement();
  constructor(private busManagementService: BusManagementService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBusManagement(){
    this.busManagementService.createBusManagement(this.busManagement).subscribe( data =>{

      console.log(data);
      this.goToBusManagementList();
    },
    error => console.log(error));
  }

  goToBusManagementList(){
    alert("Inserted Sucessfully ");

    this.router.navigate(['/busManagements']);
  }
  
  onSubmit(){
    console.log(this.busManagement);
    this.saveBusManagement();
  }

}
 
