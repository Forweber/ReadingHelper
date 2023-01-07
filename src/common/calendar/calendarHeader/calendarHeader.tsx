import React from "react";
import styles from "./calendarHeader.module.css";
import arrowRight from "../../../common/images/arrow_right.png";
import arrowLeft from "../../../common/images/arrow_left.png";

const CalendarHeader = () => {
  //console.log(YM);
  return (
    <div className={styles.header}>
      <h2 className={`${styles.text} ${styles.year}`}>{"YM.format"}</h2>
      <div className={styles.divider}></div>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <img
            className={styles.btn_img}
            src={arrowLeft}
            alt="left"
          />
        </button>
        <h1 className={`${styles.text} ${styles.month}`}>{"YM.format"}</h1>
        <button className={styles.btn}>
          <img
            className={styles.btn_img}
            src={arrowRight}
            alt="right"
          />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
