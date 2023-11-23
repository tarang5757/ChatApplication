import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={"eee0ce40-cca3-4306-9567-309b8f181907"}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    
    </div>
  );
};
export default ChatsPage;