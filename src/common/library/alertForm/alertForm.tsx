import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./alertForm.module.css";
import { IoClose } from "react-icons/io5";

const AlertForm = () => {
  const history = useHistory();
  // const saveCalendar = async () => {
  //   const res = await library.saveCalendar(book.book_isbn, new Date());
  //   alert("독서달력에 저장했습니다!");
  // };

  // const goToReport = () => {
  //   history.push({
  //     pathname: "/report/write",
  //     state: { book },
  //   });
  // };

  return (
    <div className={styles.container}>
      {/* <button className={styles.close} onClick={closeAlert}>
        <IoClose size="1.5rem" />
      </button>
      <img src={book.book_thumbnail} alt="" />
      <h4>{book.book_title}</h4>
      <div className={styles.buttons}>
        <button onClick={saveCalendar}>독서달력에 기록하기</button>
        <button onClick={goToReport}>독후감 쓰기</button>
        <button onlick={deleteBook} className={styles.btn_delete}>
          내서재에서 삭제
        </button>
      </div> */}
    </div>
  );
};
export default AlertForm;
