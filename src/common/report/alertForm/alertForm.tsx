import React from "react";
import styles from "./alertForm.module.css";

const AlertForm = () => {
  return (
    <div className={styles.container}>
      <section className={styles.alert}>
        <h2>정말로 독후감을 삭제하시겠어요?</h2>
        <div className={styles.btns}>
          <button
            className={`${styles.btn} ${styles.yes}`}
          >
            독후감 삭제
          </button>
          <button
            className={`${styles.btn} ${styles.no}`}
          >
            취소
          </button>
        </div>
      </section>
    </div>
  );
};
export default AlertForm;
