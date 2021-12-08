import React from "react";
import { useHistory } from "react-router";
import styles from "./bookCard.module.css";

const BookCard = ({ book }) => {
  const history = useHistory();
  const goToDetail = () => {
    history.push({
      pathname: "/detail",
      state: book,
    });
  };
  const { title, thumbnail } = book;
  return (
    <li className={styles.book} onClick={goToDetail}>
      <div className={styles.container}>
        <img src={thumbnail} alt="" />
        <h5>{title}</h5>
      </div>
    </li>
  );
};

export default BookCard;
