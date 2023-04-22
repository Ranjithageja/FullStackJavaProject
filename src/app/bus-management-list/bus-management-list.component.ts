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


  bookTickets(busManagement : BusManagement){
  console.log(busManagement);
  this.router.navigate(['busseats', busManagement.busId]);
  }
  private getBusManagements(){
    this.busManagementService.getBusManagementList().subscribe(data => {
      this.busManagements = data;
    });
  }

  busManagementDetails(busId: number){
    this.router.navigate(['busManagement-details', busId]);
  }

  updateBusManagement(busId: number){
    this.router.navigate(['update-busManagement', busId]);
  }

  deleteBusManagement(busId: number){
    this.busManagementService.deleteBusManagement(busId).subscribe( data => {
      console.log(data);
      this.getBusManagements();
      })
       }
       removeAllBusManagement() : void{
        this.busManagementService.deleteAll().subscribe( data => {
                  
            console.log(data);
            this.getBusManagements();
          },
                    error =>{
            console.log(error);
          });
        
       }
       confirmDelete(busManagement:BusManagement){
        var status=confirm("you want to delete this record?"); 
        if(status==true) {
           this.deleteBusManagement(busManagement.busId);
        } 
        else{
        this.getBusManagements();
        }
       }
       confirmDeleteAll(){
        var status=confirm("If you remove all they we cannot get back all details?"); 
        if(status==true) {
           this.removeAllBusManagement();
        } 
        else{
        this.getBusManagements();
        }
       }
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
   


