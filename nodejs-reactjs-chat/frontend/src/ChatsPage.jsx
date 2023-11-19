import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    
    const chatProps = useMultiChatLogic(
        'eee0ce40-cca3-4306-9567-309b8f181907',
         props.user.username,
         props.user.secret
         );
          
  return (
   <div style={{height:'100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
  </div>
  )
};
export default ChatsPage;