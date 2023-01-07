import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useHistory } from 'react-router-dom';

import search from '../../public/images/search.png'
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
  //const { user: currentUser } = useSelector((state) => state.auth);
  //const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  //const [text, setText] = useState("");

  // const openSearch = () => {
  //   setIsSearch(!isSearch);
  // };

  const goToSearch = () => {
    history.push({
      pathname: '/search',
    });
  };

  /*
  const handleSearch = async () => {
    const keyword = inputRef.current.value;
    if (!keyword) {
      alert("검색어를 입력하세요.");
    } else {
      // history.push({
      //   pathname: "/search",
      // });
      setText("");
      await onSearch(keyword, 1);
    }
  };
  */

  /*
  const onClick = (event) => {
    console.log(inputRef.current.value);
    handleSearch();
  };

  const onKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  */
  const searchWord = () => {
    console.log(inputRef.current!.value);
  };

  return (
    <header className={styles.container}>
      <ul className={styles.header_top}>
        <li><Link to="/profile"><BsPersonCircle color='white' /></Link></li>
        <li><Link to="/login" className={styles.link}><p>로그인</p></Link></li>
        <li><Link to="/join" className={styles.link}><p>회원가입</p></Link></li>
      </ul>
      <header className={styles.header}>
        <div className={styles.header_content}>
          <div>
            <Link to="/" className={styles.link}>
              <h1 className={styles.logo}>Reading Helper 젷 </h1>
            </Link>
            <ul className={styles.menu}>
              <li><Link to="/library" className={styles.item}>내 서재</Link></li>
              <li><Link to="/report" className={styles.item}>독후감</Link></li>
              <li><Link to="/calendar" className={styles.item}>독서 달력</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.header_search}>
          <div className={styles.search_container}>
            <button className={styles.btn_search} onClick={searchWord}>
              <img src={search} alt='search'/>
            </button>
            <input className={styles.input_search} ref={inputRef} type="text" placeholder="책 검색" onClick={goToSearch} />
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
