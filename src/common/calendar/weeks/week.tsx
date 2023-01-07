import React from "react";
import styles from "./week.module.css";

import Day from "./day";

const Week = () => {
  return (
    <ul className={styles.container}>
      {/* {days.map((dayInfo, i) => (
        <Day weekNum={i} dayInfo={dayInfo} openDetail={openDetail} />
      ))} */}
    </ul>
  );
};

export default Week;
