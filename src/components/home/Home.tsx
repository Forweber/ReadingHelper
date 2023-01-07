import React from "react";
import styles from "./Home.module.scss";
import SearchBar from "../../common/searchBar/SearchBar";
import tokki from '../../public/images/tokki.png';
import { useAppSelector } from "../../hooks";

const Home = () => {
  // const { user: currentUser } = useSelector((state) => state.auth);
  // console.log("current user is: ", currentUser);

  const [searchValue,setSearchValue] = React.useState<string>('');

  const {loading} = useAppSelector(state=>state.searchReducer); 

  return (
    <div className={styles.container}>
      <div className={styles.search_bar}><SearchBar getText={(text)=>setSearchValue(text)} /></div>
      <div className={styles.tokki}>
        <div className={styles.tokki_says}>
          <img src={tokki} alt='tokki'/>
          {
            loading?<>loading...</>:  
            <p>{searchValue===''?'책을 검색해보세요':`'${searchValue}' 을(를) 검색하시겠어요?`}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
