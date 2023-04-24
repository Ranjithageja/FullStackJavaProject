import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusManagementService } from '../bus-management.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  constructor(private route: ActivatedRoute, private busManagementService: BusManagementService,private router: Router) { }

  ngOnInit(){

  }
  submit(){
    this.router.navigate(['login']);
    }

  }
 {

}
