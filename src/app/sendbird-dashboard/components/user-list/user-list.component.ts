import { Component, OnInit } from '@angular/core';
import {SendBirdAction} from '../chat-page/js-components/SendBirdAction';
import { Router } from '@angular/router';
import {timestampToTime} from '../chat-page/js-components/utils';
import {SendbirdDashboardService} from '../../sendbird-dashboard.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  sendbirdAction: any;
  userList: any;
  timestampToTime: any;

  constructor( private router: Router, private sendbirdDashboardService: SendbirdDashboardService) {
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

  getUserId(userId) {
    const index = this.sendbirdDashboardService.selectedUserIds.indexOf(userId);
    if (index > -1) {
      this.sendbirdDashboardService.selectedUserIds.splice(index, 1);
      return false;
    } else {
      this.sendbirdDashboardService.selectedUserIds.push(userId);
      return true;
    }
  }

  goBack() {
    this.router.navigate(['/chat']);
  }

  createChanel() {
    SendBirdAction.getInstance()
      .createGroupChannel(this.sendbirdDashboardService.selectedUserIds)
      .then(channel => {
        this.sendbirdDashboardService.channelList.unshift(channel);
      })
      .catch(error => {
        console.log(error.message);
      });
    this.sendbirdDashboardService.selectedUserIds = [];
    this.goBack();
  }

}
