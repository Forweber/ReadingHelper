import React from "react";
import { useHistory } from "react-router";
import styles from "./libraryCard.module.css";
const LibraryCard = () => {
  const history = useHistory();
  // const { page } = history.location;

  /*
  const onClick = async () => {
    console.log(page);
    if (page === "report") {
      history.push({
        pathname: "/report/write",
        state: { book },
      });
    } else {
      openAlert(book);
      /*
      await kakaoSearch
        .search(book.book_isbn, 1) //
        .then((books) => {
          const tmp = books.data.documents[0];
          console.log(tmp);
          history.push({
            pathname: "/library/detail",
            state: { book: tmp },
          });
        });
		
    }
  };
  */

  // const { book_title, book_thumbnail } = book;
  return (
    <li className={styles.container} >
      <div className={styles.book}>
        <img src={"book_thumbnail"} alt="" />
        <h5>{"book_title"}</h5>
      </div>
    </li>
  );
};

export default LibraryCard;
