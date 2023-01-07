import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../public/images/search.png";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { searchBook } from "../../slices/search";


type Props = {
  fromSearch?:boolean;
  getText?:(text:string)=>void;
}

export default function SearchBar ({getText,fromSearch}:Props){
  const inputRef = useRef();
  const history = useHistory();
  const [text, setText] = useState("");
  const dispatch = useDispatch<Dispatch<any>>();
  /*
  const onKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  
  */

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(getText) getText(e.target.value);
    setText(e.target.value)
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(`search ${text}`);
    if(text===''){
      alert('검색어를 입력하세요');
      return;
    }
    dispatch(searchBook({query:text}));
    history.push({
      pathname: "/search",
      state:{query:text,fromSearch},
    });
  };

  return (
    <header className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} placeholder="책을 검색하세요." onChange={onChange} />
        <button className={styles.button} onClick={onClick}><img src={searchIcon} alt="search" /></button>
      </form>
    </header>
  );
};