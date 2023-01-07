import React, { memo, forwardRef } from "react";
import styles from "./chat.module.css";
import Chatbot from "../../common/images/dogIcon.png";

const BubbleChat = ()=> {
  return (
    <div className={styles.bubbleSection}>
      <img className={styles.bubbleImg} src={Chatbot} width="60" height="60" alt="chatbot" />
      <li className={styles.bubbleList}>
        <span className={styles.msg}>{"message"}</span>
       
      </li>
    </div>
  );
};

export default memo(BubbleChat);
