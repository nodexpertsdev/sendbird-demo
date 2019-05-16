import { SendBirdAction } from './SendBirdAction';


let instance = null;

class UserList  {
  constructor() {
    if (instance) {
      return instance;
    }
     this.selectedUserIds = [];
    instance = this;
  }

  _createChannel(selectedUserIds) {
    SendBirdAction.getInstance()
      .createGroupChannel(selectedUserIds)
      .then(channel => {
          console.log('====================>',channel)
      })
      .catch(error => {
        console.log(error.message);
      });
  }


  static getInstance() {
    return new UserList();
  }
}

export { UserList };
