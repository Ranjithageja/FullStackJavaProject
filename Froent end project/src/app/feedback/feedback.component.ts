import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  name='';
  email='';
  feedback='';
  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }
  ngOnInit(): void {
  }
  /*altert given for the feedback submission*/

  submit(){
    
    if(this.name ===''|| this.feedback ===''||this.email===''){
      var status = confirm("please fill mandatory fields");
    }
    else{
    var status =confirm ("Thank you for your feedback");
    if(status==true){
    this.router.navigate(['homepage']);
    }
  }
}

  
  }


