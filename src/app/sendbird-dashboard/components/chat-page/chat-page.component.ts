import { Component, OnInit } from '@angular/core';
import { SendbirdDashboardService } from '../../sendbird-dashboard.service';
import * as SendBird from 'sendbird';
import {timestampToTime} from './js-components/utils';
import {
  _getTitle,
  _lastMessageTimeText,
  _lastMessageText
} from './js-components/left-list-items';
import {
  _chatTitle
} from './js-components/chat-top-menu';
import { config } from '../../containers/sendbird-dashboard/config';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
   sb: any;
   channelList: any ;
   channelIndex: any ;
   userConfig:any;
   massagesList = [];
   chartTitle: any;
   getTitle: any = _getTitle;
   lastMessageTimeText: any = _lastMessageTimeText;
   lastMessageText: any = _lastMessageText;
   timestampToTime: any = timestampToTime;

   constructor(private sendbirdDashboardService: SendbirdDashboardService) {

   }

  ngOnInit() {
     this.userConfig =  this.sendbirdDashboardService.getUserData();
    this.sb = new SendBird({appId: config.APP_ID});
    this.sb.connect(
      this.userConfig.user_id,
    (user, error) => {
      if (error) {
        console.log(error);
      } else {
        this.sb.updateCurrentUserInfo(this.userConfig.nickname, null, () => {
          console.log(user);
          this.getChannelList();
        });
      }
    }
  );
  }

  getChannelList() {
    const channelListQuery = this.sb.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = true;
    channelListQuery.limit = 100;

    if (channelListQuery.hasNext) {
    channelListQuery.next((channelList, error) => {
        if (error) {
            return;
        }
        this.channelList = channelList;
    });
}
  }

  chatTopMenuActivity(i) {
    this.channelIndex = i;
    this.chartTitle = _chatTitle(this.channelList[i]);
    const messageListQuery = this.channelList[i].createPreviousMessageListQuery();
    messageListQuery.limit = 30;
    messageListQuery.reverse = true;

    messageListQuery.load((messageList, error) => {
    if (error) {
        return;
    }
    this.massagesList = messageList.reverse();
});
  }

  eventHandler(e) {
    const message = e.value;
    e.value = '';
    this.channelList[this.channelIndex].sendUserMessage(message, () => {
      this.chatTopMenuActivity(this.channelIndex);
    });
  }

}
