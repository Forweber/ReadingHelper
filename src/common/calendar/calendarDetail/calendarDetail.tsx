import React, { useState, useRef, useEffect } from "react";
import styles from "./calendarDetail.module.css";

const CalendarDetail = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // const { id, book_title, book_thumbnail, book_isbn, memo } = book;
  const [isWrite, setIsWrite] = useState(false);
  const [calendarMemo, setCalendarMemo] = useState("");

  /*
  useEffect(() => {
    setCalendarMemo(memo);
  }, [memo]);

  const writeMemo = async () => {
    setIsWrite(true);
  };
  const addMemo = async (event) => {
    event.preventDefault();
    setIsWrite(false);
    await calendar.saveMemo(book_isbn, calendarMemo);
  };
  const deleteMemo = async () => {
    await library.saveCalendar(book_isbn, null);
  };
  const onChange = (event) => {
    setCalendarMemo(event.target.value);
  };
  */
  return (
    <section className={styles.container}>
      <img className={styles.thumbnail} src={""} alt="thumbnail" />
      <h5>{"book_title"}</h5>

        <form className={styles.form}>
          <textarea
            className={styles.review}
            ref={inputRef}
            placeholder="메모를 입력해주세요!"
            value={calendarMemo}
          />
          <input
            className={styles.submit}
            type="submit"
            value={"작성하기"}
          />
        </form>
    </section>
  );
};

export default CalendarDetail;
