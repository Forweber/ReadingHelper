import React from "react";
import styles from "./weekContainer.module.css";
import Week from "./week";
type Props = {
  days:[]|null;
  openDetail:()=>void;
}
const WeekContainer = ({ days, openDetail }:Props) => {
  const _Weeks = [];
  console.log(days);

  for (let i = 0; i < 6; i++) {
    _Weeks.push(
      // <Week days={days.slice(i * 7, i * 7 + 7)} openDetail={openDetail} />
    );
  }

  return <div className={styles.container}>{}</div>;
};

export default WeekContainer;
