import { Component, OnInit } from '@angular/core';
import { BusManagement } from '../busManagement';
import { BusManagementService } from '../bus-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busseats',
  templateUrl: './busseats.component.html',
  styleUrls: ['./busseats.component.css']
})
export class BusseatsComponent implements OnInit {
  busId: number = 0;

  busManagement: BusManagement = new BusManagement();
  bookedSeats: number = 0;
  totalPrice: number = 0;
  constructor(private busManagementService: BusManagementService,
    private route: ActivatedRoute,

    private router: Router) { }

  ngOnInit(): void {
    this.busId = this.route.snapshot.params['busId'];
    this.busManagementService.getBusManagementById(this.busId).subscribe(data => {
    this.busManagement = data;
    
    
    }, error => console.log(error));
  }

  onSubmit() {
    var status=confirm("ThankYou for booking!");
    if(status==true){
    
    this.busManagementService.updateBusSeatsDetails(this.busId, this.busManagement)
      .subscribe(data => {
        this.router.navigate(['/busManagements']);
      }
      , error => console.log(error));
    }
    else{
      this.router.navigate(['busseats']);
    }
  }
    myFunction(){
      this.busManagement.noOfSeats -= this.busManagement.bookedSeats;
      this.busManagement.totalPrice = this.busManagement.bookedSeats * (this.busManagement.costPerSeats);
    }
}
  






