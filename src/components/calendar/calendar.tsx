import React, { useState, useEffect } from "react";
import styles from "./calendar.module.css";
import WeekHeader from "../../common/calendar/weekHeader/weekHeader";
import WeekContainer from "../../common/calendar/weeks/weekContainer";
import moment from "moment";
import CalendarHeader from "../../common/calendar/calendarHeader/calendarHeader";
import CalendarDetail from "../../common/calendar/calendarDetail/calendarDetail";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [book, setBook] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [YM, setYM] = useState(moment());

  const firstDayOfMonth = YM.startOf("month");
  const daysCount = YM.daysInMonth();
  const firstDateOfMonth = firstDayOfMonth.get("d");
  const firstDayOfWeek = firstDayOfMonth.clone().add("d", -firstDateOfMonth);
  const [days, setDays] = useState(null);
/*
  useEffect(() => {
    const firstDay = firstDayOfMonth.toDate();
    const lastDay = YM.clone().endOf("month").add(1, "days").toDate();
    console.log(firstDay);
    console.log(lastDay);
    
    const getBooks = async () => {
      const response = await calendar.loadCalendar(firstDay, lastDay);
      console.log(response);
      const result = response.data;
      console.log(result);
      makeCalendarArray(result);
    };
    getBooks();
  }, [YM]);

  const makeCalendarArray = (res) => {
    let firstDay = firstDateOfMonth;
    let prevLastDay = Number(firstDayOfWeek.format("DD"));
    let arr_before = [];
    let arr_now = [];
    let arr_next = [];
    for (let i = 0; i < firstDateOfMonth; i++) {
      arr_before.push({ day: prevLastDay, week: i, state: false, book: null });
      prevLastDay++;
    }
    for (let i = 1; i <= daysCount; i++) {
      arr_now.push({ day: i, week: firstDay % 7, state: true, book: null });
      firstDay++;
    }
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      console.log(res[i]);
      const readDate = res[i].read_date;
      const date = new Date(readDate);
      console.log(date);
      console.log(date.getDate());
      arr_now[date.getDate() - 1].book = res[i];
    }
    console.log(arr_now);
    for (let i = 1; i <= 42 - daysCount - firstDateOfMonth; i++) {
      arr_next.push({ day: i, week: firstDay % 7, state: false, book: null });
      firstDay++;
    }
    const new_arr = arr_before.concat(arr_now, arr_next);
    console.log(new_arr);
    setDays(new_arr);
  };

  const openDetail = (book, id) => {
    if (bookId === id) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setBookId(id);
      setBook(book);
    }
  };
*/
  const moveMonth = (month:number) => {
    setYM(moment(YM).add(month, "M"));
    console.log(moment(YM).format("YYYY년 MM월"));
  };
  return (
    <div className={styles.container}>
      <section className={styles.calendar}>
        <div className={styles.calendar}>
          <WeekHeader />
            <WeekContainer days={days} openDetail={()=>{}} />
        </div>
      </section>
      {isOpen ? (
        <section className={styles.detail}>
          <CalendarDetail  
          />
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Calendar;
