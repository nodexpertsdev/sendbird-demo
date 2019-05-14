import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SendbirdDashboardService } from '../../sendbird-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private sendbirdDashboardService: SendbirdDashboardService,  private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
   this.sendbirdDashboardService.setUserData(f.value);
   this.router.navigate(['/chat']);
  }


}
