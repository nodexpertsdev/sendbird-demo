import { Component, OnInit } from '@angular/core';
import {SendBirdAction} from '../chat-page/js-components/SendBirdAction';
import { Router } from '@angular/router';
import {timestampToTime} from '../chat-page//js-components/utils';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  sendbirdAction: any;
  userList: any;
  timestampToTime: any;

  constructor( private router: Router) {
    this.sendbirdAction = SendBirdAction.getInstance();
   }

  ngOnInit() {
    this.timestampToTime = timestampToTime;
    this.sendbirdAction.getUserList(true).then((list) => {
      this.userList = list;
      console.log(list);
    }).catch((err) => {
      console.log(err);
    });
  }

  goBack() {

    this.router.navigate(['/chat']);

  }

}
