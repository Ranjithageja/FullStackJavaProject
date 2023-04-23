import { Component,OnInit } from '@angular/core';
import { BusManagement } from '../busManagement'

import { Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-bus-management-list',
  templateUrl: './bus-management-list.component.html',
  styleUrls: ['./bus-management-list.component.css']
})
export class BusManagementListComponent implements OnInit {
 [x: string]: any;
  busManagements: BusManagement[] = [];
  busId: number = 0;
  constructor(private busManagementService: BusManagementService,
    private router: Router) { }
    startingPoint: String ="";
    busDetailsFoundBySearch: BusManagement[] = [];
    
    /*search by using bus startingPoint using findBystartingPoint) in busManagementService */
    searchBystartingPoint(){
      this.busManagementService.findBystartingPoint(this.startingPoint)
      .subscribe( data => {
        this.busManagements = data;
        console.log(data);
        },
        error => {
          console.log(error);
        }); 
      }

  ngOnInit(): void {
    this.getBusManagements();
  }

/*view the particular ticket booked cost in  busManagement details using busId */

  bookTickets(busManagement : BusManagement){
  console.log(busManagement);
  this.router.navigate(['busseats', busManagement.busId]);
  }
  private getBusManagements(){
    this.busManagementService.getBusManagementList().subscribe(data => {
      this.busManagements = data;
    });
  }
/*view the particular busManagement details using busId */

  busManagementDetails(busId: number){
    this.router.navigate(['busManagement-details', busId]);
  }
/*update the particular busManagement details using busId */

  updateBusManagement(busId: number){
    this.router.navigate(['update-busManagement', busId]);
  }
/*delete the particular busManagement details using busId */

  deleteBusManagement(busId: number){
    this.busManagementService.deleteBusManagement(busId).subscribe( data => {
      console.log(data);
      this.getBusManagements();
      })
       }
       /*delete the particular busManagement details using deleteall */

       removeAllBusManagement() : void{
        this.busManagementService.deleteAll().subscribe( data => {
                  
            console.log(data);
            this.getBusManagements();
          },
                    error =>{
            console.log(error);
          });
        
       }
     
       /*confirmation status for delete the busManagement details */
      confirmDelete(busManagement:BusManagement){
        var status=confirm("you want to delete this record?"); 
        if(status==true) {
           this.deleteBusManagement(busManagement.busId);
        } 
        else{
        this.getBusManagements();
        }
       }
      /*confirmation status to remove all the records */
        confirmDeleteAll(){
        var status=confirm("If you remove all they we cannot get back all details?"); 
        if(status==true) {
           this.removeAllBusManagement();
        } 
        else{
        this.getBusManagements();
        }
       }
       /*filter ac BusManagement list using findByAcBus() in busManagementService */

       fetchAcBus(){
        this.busManagementService.findByAcBus().subscribe(
          data => {
            this.busManagements = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
        /*filter  non ac BusManagement list using findByNonAcBus() in busManagementService */

      fetchNonAcBus(){
        this.busManagementService.findByNonAcBus().subscribe(
          data => {
            this.busManagements = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
    
}
   


