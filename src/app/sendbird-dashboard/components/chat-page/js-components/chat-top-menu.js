export const _chatTitle= (channel)=>{
  if(channel && channel.members){
    return channel.members
      .map(member => {
        return member.nickname;
      })
      .join(', ');
    }
  }