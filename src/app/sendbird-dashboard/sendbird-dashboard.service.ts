import { Injectable } from '@angular/core';

@Injectable()
export class SendbirdDashboardService {
 public userData: {user_id: string, nickname: string} = null;

 channelList: any[];
 selectedUserIds: string[] = [];

  constructor() { }

  setUserData(data) {
    this.userData = data;
  }
  getUserData() {
    return this.userData;
  }
}
