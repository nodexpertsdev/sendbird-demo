export const _chatTitle= (channel)=>{
    return channel.members
      .map(member => {
        return member.nickname;
      })
      .join(', ');
  }