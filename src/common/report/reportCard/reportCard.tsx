import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./reportCard.module.css";
import Dots from "../../../common/images/dots.png";
import Close from "../../../common/images/close.png";

const ReportCard = () => {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
/*
  const onClick = () => {
    history.push({
      pathname: "/report/detail",
      report,
    });
  };
  const onMenuClick = (event) => {
    event.stopPropagation();
    setClicked(!clicked);
  };
  const deleteCard = (event) => {
    event.stopPropagation();
    console.log("delete");
    openAlert(report.id);
    //deleteReport(report.id);
  };
  */
  return (
    <li className={styles.container} >
      {/* <div
        className={
          clicked
            ? `${styles.menuContainer} ${styles.show}`
            : styles.menuContainer
        }
      ></div>
      {clicked ? (
        <div>
          <button onClick={onMenuClick}>
            <img className={styles.menu} src={Close} alt="close" />
          </button>
          <button className={styles.btn} onClick={deleteCard}>
            삭제하기
          </button>
        </div>
      ) : (
        <div className={styles.cliked}>
          <button onClick={onMenuClick}>
            <img className={styles.menu} src={Dots} alt="menu" />
          </button>
        </div>
      )}
      <div className={styles.book}>
        <div className={styles.img_container}>
          <img src={report.book_thumbnail} alt="thumbnail" />
        </div>
        <h5>{report.title}</h5>
        <p className={styles.book_title}>{report.book_title}</p>
      </div> */}
    </li>
  );
};

export default ReportCard;
