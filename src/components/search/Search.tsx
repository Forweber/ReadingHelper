import React from "react";
import styles from "./Search.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import tokki from '../../public/images/tokki.png';
import { useLocation } from "react-router-dom";
import SearchCard from "./SearchCard";
import Pagination from "../../common/pagination/Pagination";
import { searchBook } from "../../slices/search";
import SearchBar from "../../common/searchBar/SearchBar";
import {GrPowerReset} from 'react-icons/gr'


const SearchResult = () => {
  const loc = useLocation<{query:string,fromSearch:boolean}>();
  const {query,fromSearch} = loc.state;

  const dispatch = useAppDispatch();
  const {data,loading,total} = useAppSelector(state=>state.searchReducer);
  
  const [isShowSearchBar,setIsShowSearchBar] = React.useState(false);
  const [page,setPage] = React.useState(1);
  const [firstNum,setFirstNum] = React.useState(1);
  const [lastNum,setLastNum] = React.useState(5);
  const [showNum,setShowNum] = React.useState(5);
  const [lastStartNum,setLastStartNum] = React.useState({page:1,rest:0});
  const [lastEndNum,setLastEndNum] = React.useState(0);
  const defualt = 5;


  React.useEffect(()=>{
    if(fromSearch){ 
      setIsShowSearchBar(false);
    }
    setPage(1);
    setFirstNum(1);
    if(total){
      const totalPages = Math.ceil(total/10); //전체 페이지 개수
      setLastEndNum(totalPages);
      const lastnum = Math.floor(totalPages/defualt)*defualt+1; //마지막 페이지 텀의 첫번째 페이지
      if(lastnum===1){ //그게 1이라면 페이지의 개수가 5보다 적음을 나타냄
        console.log('?');
        setShowNum(totalPages%defualt);
        setLastNum(totalPages%defualt);
      }else{
        setShowNum(defualt);
        setLastNum(defualt);
      }
      setLastStartNum({page:(totalPages/defualt)*defualt+1,rest:totalPages%defualt}); //맨 마지막 페이지 정보
    }
  },[fromSearch,total])

  const movePage=(page:number)=>{
    if(page>lastNum){
      if(page===lastStartNum.page){
        setShowNum(lastStartNum.rest);
      }
      setFirstNum(page);
      setLastNum(page+4);
    }
    if(page<firstNum){
      setFirstNum(page-4);
      setLastNum(page);
    }
    setPage(page);
    dispatch(searchBook({query,page}));
  }

  const showSearchBar = ()=>{
    setIsShowSearchBar(true);
  }
  return (
    <section className={styles.container}>
      
      {
        isShowSearchBar ? <SearchBar fromSearch={true}/>:
        <div className={styles.title}>
          <h3>{`\'${query}\' 검색 결과`}</h3>
          <button className={styles.reset} onClick={showSearchBar}>
            <GrPowerReset /><span>재검색</span>
          </button>
      </div>
      }
      
      
      {
        !data.length?
        <div className={styles.tokki_says}>
          <img src={tokki} alt="tokki" />
          <p>검색 결과가 없습니다.</p>
        </div>
        :
        (<div className={styles.search_result}>
          {loading?<div>loading...</div>:
            <ul className={styles.booklist}>
              {data.map((book, i) => (
                <SearchCard key={i} book={book} />
              ))}
            </ul>
          }
          <div className={styles.pagination}>
            <Pagination page={page} firstNum={firstNum} lastNum={lastNum} lastEndNum={lastEndNum} movePage={movePage} show={showNum} />
          </div>
        </div>)
      }
    </section>
  );
};

export default SearchResult;
