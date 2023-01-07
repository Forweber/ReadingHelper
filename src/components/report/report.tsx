import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AlertForm from "../../common/report/alertForm/alertForm";
import ReportCard from "../../common/report/reportCard/reportCard";
import Add from "../../public/images/add.png";
import styles from "./report.module.css";
const Report = () => {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [reportId, setReportId] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //   loadReports();
  // }, []);

  /*
  const loadReports = async () => {
    const response = await report.loadReport();
    const result = response.data;
    setBooks(result);
  };

  const deleteReport = async (id) => {
    await report.deleteReport(id);
    loadReports();
    alert("독후감이 삭제되었습니다!");
  };
  */
  const goToWrite = () => {
    history.push({
      pathname: "/report/write",
    });
  };

  const openAlert = () => {
    setIsOpen(true);
    //setReportId(id);
  };
  // const closeAlert = (isDelete) => {
  //   setIsOpen(false);
  //   if (isDelete) {
  //     deleteReport(reportId);
  //   }
  // };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {/* {books.map((report) => (
          // <ReportCard
          //   report={report}
          //   openAlert={openAlert}
          // />
        )} */}
      </ul>
      {isOpen && <AlertForm />}
      <button onClick={goToWrite}>
        <img className={styles.add} src={Add} alt="" />
      </button>
    </div>
  );
};

export default Report;
