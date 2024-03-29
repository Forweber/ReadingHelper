import { firebaseDB } from "./firebase";

// 파이어베이스 DB에 채팅 저장, uid/chatId(책 버튼을 누른 시간)으로 저장됨.
// 독후감 작성시 대화 묶음을 구별하기 위함
const sendChat = (chats, chatId) => {
  const chatArr = new Array();
  console.log(chatId);
  chats.map((chat) => {
    console.log(chat.uid);
    firebaseDB.ref(`chats/${chat.uid}/${chatId}`).push(chat);
    chatArr.push(chat);
  });

  return chatArr;
};

// 홈 화면에 들어왔을 때 DB로부터 데이터를 받아서 화면 업데이트
const receiveChat = (uid, onUpdate) => {
  let chatList = [];
  const ref = firebaseDB.ref("chats/" + uid).orderByChild("timestamp");
  ref.once("value", (snapshot) => {
    snapshot.forEach((item) => {
      item.forEach((i) => {
        chatList.push(i.val());
      });
    });
    console.log(chatList);
    chatList && onUpdate(chatList);
  });

  return () => ref.off();
};

// 초기화시 메세지 모두 삭제
const resetChat = (uid) => {
  const ref = firebaseDB.ref("chats/" + uid).remove();
  return () => ref.off();
};
export default { sendChat, receiveChat, resetChat };
