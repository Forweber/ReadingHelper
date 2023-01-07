import React, { useState } from "react";
import styles from "./profileEdit.module.css";
import RoundButton from "../../common/buttons/roundButton";

const ProfileEdit = () => {
  // const { user: currentUser } = useSelector((state) => state.auth);
  // const [name, setName] = useState(currentUser.name);
  const [password, setPassword] = useState("");

  // const history = useHistory();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hi");
  //   history.push("/profile");
  // };
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>회원정보 수정</h2>
      <form className={styles.form}>
        <div className={styles.item}>
          <span className={styles.inputTitle}>이름</span>
          <input
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.item}>
          <span className={styles.inputTitle}>이메일</span>
          <span className={styles.email}>{"currentUser.email"}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.inputTitle}>비밀번호</span>
          <input
            className={styles.input}
            type="password"
          />
        </div>
      </form>
      <div
        className={styles.buttons}>
        <RoundButton text="수정" />
      </div>
    </div>
  );
};

export default ProfileEdit;
