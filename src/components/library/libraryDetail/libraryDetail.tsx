import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./libraryDetail.module.css";
import thumbnailImg from "../../../common/images/thumbnail.png";
import RoundButton from "../../../common/buttons/roundButton";

const LibraryDetail = () => {
  /*
  const history = useHistory();
  const historyState = history?.location?.state;
  console.log(historyState);

  const bookItem = historyState.book;
  const state = historyState.state;

  const book =
    bookItem === undefined
      ? JSON.parse(localStorage.getItem("book"))
      : bookItem;
  const { title, thumbnail, contents, authors, publisher, translators } = book;

  const thumbnail_img = thumbnail.length > 0 ? thumbnail : thumbnailImg;
  const author = authors.length > 0 ? authors.join(", ") : "";
  const translator = translators.length > 0 ? translators.join(", ") : "";

  useEffect(() => {
    if (book.length) {
      localStorage.setItem("book", JSON.stringify(book));
    }
  }, [book]);

  const saveCalendar = async () => {
    const isbn = book["isbn"].split(" ")[1];

    const res = await library.saveCalendar(isbn, new Date());
    alert("독서달력에 저장했습니다!");
  };

  const goToReport = () => {
    history.push({
      pathname: "/report/write",
      state: { book },
    });
  };
  */
  return (
    <section className={styles.container}>
      <h2>{"title"}</h2>
      <div className={styles.line}></div>
      <div className={styles.detail}>
        <img className={styles.thumbnail} src={"thumbnail_img"} alt="thumbnail" />
        <div className={styles.info}>
          <ul className={styles.maker_list}>
              <li className={styles.author}>
                <h3 className={styles.author_title}>저자</h3>
                <p className={styles.author_name}>{"author"}</p>
              </li>
              <li className={styles.author}>
                <h3 className={styles.author_title}>역자</h3>
                <p className={styles.author_name}>{"translator"}</p>
              </li>
              <li className={styles.author}>
                <h3 className={styles.author_title}>출판사</h3>
                <p className={styles.author_name}>{"publisher"}</p>
              </li>
          </ul>

          <h3 className={styles.content_title}>책 내용</h3>
          <p className={styles.content}>{"contents"}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <RoundButton  text={"다 읽었어요!"} />
        <RoundButton  text={"독후감 작성"} />
      </div>
    </section>
  );
};

export default LibraryDetail;
