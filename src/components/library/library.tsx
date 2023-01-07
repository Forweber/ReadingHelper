import React, { useEffect, useState } from "react";
import styles from "./library.module.css";
import LibraryList from "../../common/library/libraryList/libraryList";
import AlertForm from "../../common/library/alertForm/alertForm";


const Library = () => {
  // const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [book, setBook] = useState([]);

  // useEffect(() => {
  //   loadBooks();
  // }, []);
  /*

  const loadBooks = async () => {
    const response = await library.loadLibrary();
    const result = response.data;
    setBooks(result);
  };
  const deleteBook = async (id) => {
    console.log(typeof id);
    await library.deleteBook(id);
    loadBooks();
  };

  const openAlert = (bk) => {
    if (bk.id === book.id) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setBook(bk);
  };
  */
  const closeAlert = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>내서재</h1>
      <section className={styles.book_list}>
        <div className={styles.books} style={isOpen ? {} : { width: "100%" }}>
            <h1 className={styles.empty}>내 서재 비어있음</h1>
        </div>
        <div
          className={styles.alert}
          style={isOpen ? { right: "0" } : { right: "-300px", width: "0%" }}
        >
          {isOpen && (
            <AlertForm />
          )}
        </div>
      </section>
    </div>
  );
};

export default Library;
