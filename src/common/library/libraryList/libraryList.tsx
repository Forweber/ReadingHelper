import React from "react";
import LibraryCard from "../libraryCard/libraryCard";
import styles from "./libraryList.module.css";

const LibraryList = () => {
  return (
    <ul className={styles.container}>
      {/* {books.map((book, i) => (
        <LibraryCard
          key={i}
          book={book}
          openAlert={openAlert}
          search={search}
          isOpen={isOpen}
        />
      ))} */}
    </ul>
  );
};

export default LibraryList;
