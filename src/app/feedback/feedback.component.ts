import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }
  ngOnInit(){
  }
  submit(){
    alert("Thank you for your feedback");
    this.router.navigate(['homepage']);
    }
  
  }


