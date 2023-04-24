import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';
import { BusManagement } from '../busManagement';

@Component({
  selector: 'app-update-bus-management',
  templateUrl: './update-bus-management.component.html',
  styleUrls: ['./update-bus-management.component.css']
})
export class UpdateBusManagementComponent implements OnInit {
  busId: number = 0;
  busManagement: BusManagement = new BusManagement();
  constructor(private busManagementService: BusManagementService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.busId = this.route.snapshot.params['busId'];

    this.busManagementService.getBusManagementById(this.busId).subscribe((data: any) => {
      this.busManagement = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.busManagementService.updateBusManagement(this.busId, this.busManagement).subscribe( (data: any) =>{
      this.goToBusManagementList();
    }
    , (error: any) => console.log(error));
  }

  goToBusManagementList(){
    alert("Updated sucessfully");
    this.router.navigate(['/busManagements']);
  }
}


