import {
    addClass,
    createDivEl,
    getDataInElement,
    protectFromXSS,
    removeClass,
    setDataInElement,
    timestampFromNow
  } from './utils';

export const _getTitle = (channel) => {
    return channel.isOpenChannel()
      ? `# ${channel.name}`
      : channel.members
          .map(member => {
            return (member.nickname);
          })
          .join(', ');
  }
  export const _lastMessageTimeText = (channel)=> {
    if (channel.isOpenChannel() || !channel.lastMessage) {
      return 0;
    } else {
      return timestampFromNow(channel.lastMessage.createdAt);
    }
  }

  export const  _lastMessageText = (channel)=> {
    if (channel.isOpenChannel() || !channel.lastMessage) {
      return '';
    } else {
      return channel.lastMessage.isFileMessage()
        ? (channel.lastMessage.name)
        : (channel.lastMessage.message);
    }
  }