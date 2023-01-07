import React from 'react';
import {BsFillCaretLeftFill,BsFillCaretRightFill,} from 'react-icons/bs';
import styles from './Pagination.module.scss';

type Props={
  page:number;
  firstNum:number;
  lastNum:number;
  lastEndNum:number;
  show:number;
  movePage:(page:number)=>void;
}
export default function Pagination({page,firstNum,lastNum,lastEndNum,show,movePage}:Props){

  const pages= Array(show).fill(firstNum).map((v,i)=>v+i);

  const onClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,pageNum:number)=>{
    e.preventDefault();
    console.log(`pagenum is : ${pageNum}`);
    if(pageNum<1){return;}
    if(pageNum>lastEndNum){return;}
    movePage(pageNum);
  }

  return (
    <div className={styles.move_page}>
      <button className={styles.btn_move} onClick={(e)=>onClick(e,page-1)}><BsFillCaretLeftFill size={30} color={'#9e6aa4'} /></button>
      <div className={styles.page_buttons}>
        {pages.map((v)=>(
          <button className={`${styles.page_button} ${v===page&&styles.page_selected}`} onClick={(e)=>onClick(e,v)}>{v}</button>
        ))}
      </div>
      <button className={styles.btn_move} onClick={(e)=>onClick(e,page+1)}><BsFillCaretRightFill size={30} color={'#9e6aa4'}/></button>
    </div>
  )
}