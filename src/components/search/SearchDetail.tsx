import React from "react";
import { useLocation } from "react-router";
import styles from "./Search.module.scss";
import { Book } from "../../slices/search.d";

const SearchDetail = () => {

  const loc = useLocation<{book:Book}>();
  const {book} = loc.state;
  const {author,description,image,pubdate,publisher,title} = book;

  const [isShowMore,setIsShowMore] = React.useState(false);

  const contentRef = React.useRef<HTMLParagraphElement>(null);
  const contentContainerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(()=>{

    const contentContainerHeight = contentContainerRef.current?.clientHeight;
    const contentHeight = contentRef.current?.clientHeight;
    if(!contentHeight || !contentContainerHeight){return;}
    if(contentHeight>contentContainerHeight){
      setIsShowMore(true);
    }

    console.log(`container : ${contentContainerHeight} , content : ${contentHeight}`);
  },[])

  /*
  const saveBook = async () => {
    const isbn = book["isbn"].split(" ")[1];
    const newBook = {
      book_title: title,
      book_author: author,
      book_thumbnail: thumbnail,
      book_isbn: isbn,
      read_date: null,
      memo: "",
      user_id: 1,
    };

    const res = await library.saveBook(newBook);
    console.log(res);
    if (res) {
      alert(" 저장했습니다!");
    } else {
      alert("이미 서재에 담겼습니다!");
    }
  };
  */

  const showMoreContent = ()=>{
    setIsShowMore(false);
  }
  return (
    <section className={styles.search_detail}>
      <h3>{title}</h3>
      <div className={styles.info}>
        <div className={styles.thumbnail}><img src={image} alt="thumbnail" /></div>
        <div className={styles.maker_list}>
          <span className={styles.book_info}><span>저자</span> {author}</span>
          <span className={styles.book_info}><span>출판사</span> {publisher}</span>
        </div>
      </div>
      <div className={styles.book_content}>
        <span className={styles.content_title}>책 내용</span>
        <div ref={contentContainerRef} className={`${styles.content} ${!isShowMore && styles.show}`}>
          <p ref={contentRef}>{description}</p>
          {isShowMore&&<div className={styles.more_gradient}></div>}
        </div>
        {isShowMore && <button className={styles.btn_more} onClick={showMoreContent}>...더보기</button>}
      </div>
      <div className={styles.controls}>
        <div>다 읽었어요</div>
        <div>읽을거에요</div>
        <div>기록할래요</div>
      </div>
      
    </section>
  );
};

export default SearchDetail;
