import React from "react";
import styles from "./day.module.css";

const Day = () => {
  // const { day, week, state, book } = dayInfo;
  return (
    <li className={styles.container}>

      <div className={styles.thumbnailContainer}>
          <img
            className={styles.thumbnail}
            src={"book_thumbnail"}
            alt="thumbnail"
          />
      </div>
    </li>
  );
};


export default Day;
