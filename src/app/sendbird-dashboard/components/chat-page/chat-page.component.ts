import { Component, OnInit } from '@angular/core';
import { SendbirdDashboardService } from '../../sendbird-dashboard.service';
import {timestampToTime} from './js-components/utils';
import {SendBirdAction} from './js-components/SendBirdAction';
import { SendBirdChatEvent } from './js-components/SendBirdChatEvent';
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
  sendbirdAction: any;
   handler: any;
  //  channelList: any ;
   channelIndex: any ;
   ChannelHandler: any;
   userConfig: any;
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
   this.sendbirdAction = SendBirdAction.getInstance();
   this.sendbirdAction.connect(this.userConfig.user_id, this.userConfig.nickname).then(() => {
    this.getChannelList();
    const channelEvent = new SendBirdChatEvent();
    channelEvent.onMessageReceived = (channel, message) => {
      if (this.sendbirdDashboardService.channelList.indexOf(channel) > 0) {
        // find the current index of 'role':
        const index = this.sendbirdDashboardService.channelList.indexOf(channel);
        // using splice to remove elements from the array, starting at
        // the identified index, and affecting 1 element(s):
        this.sendbirdDashboardService.channelList.splice(index, 1);
        // putting the 'role' string back in the array:
        this.sendbirdDashboardService.channelList.unshift(channel);
    } else {
      this.sendbirdDashboardService.channelList.unshift(channel);
    }
      this.chatTopMenuActivity(this.channelIndex);
    };
   }).catch((err) => {
     console.log(err);
   });
  }

  getChannelList() {
    const channelListQuery = this.sendbirdAction.sb.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = true;
    channelListQuery.limit = 100;

    if (channelListQuery.hasNext) {
    channelListQuery.next((channelList, error) => {
        if (error) {
            return;
        }
        if ( !this.sendbirdDashboardService.channelList ) {
        this.sendbirdDashboardService.channelList = channelList;
        this.chatTopMenuActivity(0);
        }
    });
}
  }

  chatTopMenuActivity(i) {
    this.channelIndex = i;
    this.chartTitle = _chatTitle(this.sendbirdDashboardService.channelList[i]);
    const messageListQuery = this.sendbirdDashboardService.channelList[i].createPreviousMessageListQuery();
    messageListQuery.limit = 100;
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
    this.sendbirdDashboardService.channelList[this.channelIndex].sendUserMessage(message, () => {
      this.chatTopMenuActivity(this.channelIndex);
    });
  }



}
