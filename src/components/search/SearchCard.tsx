import { useHistory } from "react-router";
import { Book } from "../../slices/search.d";
import styles from "./Search.module.scss";

type Props={
  book:Book;
}
const SearchCard = ({book}:Props) => {
  const history = useHistory();
  
  const onClick = async () => {
    history.push({
      pathname: "/search/detail",
      state: { book },
    });
  };

  const { title, image } = book;
  const cutTitle = title.length>24?`${title.substring(0,23)}...`:title;
  
  return (
    <li className={styles.book} onClick={onClick}>
      <div className={styles.thumbnail}>
        <img src={image ? image : ''} alt="thumbnail" />
      </div>
      <h5>{cutTitle}</h5>
    </li>
  );
};

export default SearchCard;
