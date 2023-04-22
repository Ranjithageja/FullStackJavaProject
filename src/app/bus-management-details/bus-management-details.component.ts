import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';
import { BusManagement } from '../busManagement';

@Component({
  selector: 'app-bus-management-details',
  templateUrl: './bus-management-details.component.html',
  styleUrls: ['./bus-management-details.component.css']
})
export class BusManagementDetailsComponent implements OnInit {
  busId: number = 0;
  busManagement: any = [];
  

  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }

  ngOnInit(): void {
    this.busId = this.route.snapshot.params['busId'];

    this.busManagement = new BusManagement();
    this.busManagementService.getBusManagementById(this.busId).subscribe( data => {
      this.busManagement = data;
    });
  }
 viewclick(){
  this.router.navigate(['busManagements']);
  }
}
