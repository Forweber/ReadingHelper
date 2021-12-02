import React, { useState } from "react";
import styles from "./app.module.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendar from "./pages/calendar/calendar";
import Home from "./pages/home/home";
import Library from "./pages/library/library";
import Report from "./pages/report/report";
import Header from "./components/header/header";
import SearchResult from "./pages/search_result/search_result";
import BookDetail from "./pages/book_detail/book_detail";

const App = ({ kakaoSearch }) => {
  const history = useHistory();
  const [word, setWord] = useState("default");
  const [books, setBooks] = useState([]);

  const onSearch = async (query) => {
    console.log(kakaoSearch);
    setWord(query);
    await kakaoSearch
      .search(query) //
      .then((books) => {
        setBooks(books.data.documents);
      });
  };
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header onSearch={onSearch} />
        <div className={styles.pages}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/library">
              <Library />
            </Route>
            <Route exact path="/report">
              <Report />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/search">
              <SearchResult query={word} books={books} />
            </Route>
            <Route exact path="/detail">
              <BookDetail />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;