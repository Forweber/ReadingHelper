import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./reportDetail.module.css";
// import html2canvas from "html2canvas";
import RoundButton from "../../../common/buttons/roundButton";
const ReportDetail = () => {
  /*
  const history = useHistory();
  const { report } = history.location;
  const {
    title,
    author,
    content,
    book_title,
    book_thumbnail,
    book_isbn,
    start_date,
    end_date,
    rate,
    tags,
  } = report;

  useEffect(() => {
    const endcoded = async () => {
      try {
        const img = document.getElementById("thumbnail");
        console.log("thumbnail 인코딩");
        const response = await search.getEncodedUri(book_thumbnail);
        console.log(response.data);
        img.src = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    endcoded();
  }, []);

  const onCapture = () => {
    console.log("onCapture");

    html2canvas(document.getElementById("report"), {
      logging: true,
      letterRendering: 1,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };
  const onSaveAs = (uri, filename) => {
    console.log("onSaveAs");
    console.log(uri);
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };
  */
  return (
    <section className={styles.container}>
      <div className={styles.report} id="report">
        <div className={styles.report_background}>
          <section className={styles.top}>
            <div className={styles.thumbnail_container}>
              <div className={styles.thumbnail}>
                <img src={"book_thumbnail"} alt="thumbnail" id="thumbnail" />
              </div>
              <h4>{"book_title"}</h4>
            </div>
            <section className={styles.report_info}>
              <h2 className={styles.title}>{"title"}</h2>
              <div className={styles.info}>
                <table>
                  <tr>
                    <th>작가</th>
                    <td>{"author"}</td>
                  </tr>
                  <tr>
                    <th>읽은기간</th>
                    <td>
                      {"start_date"}~{"end_date"}
                    </td>
                  </tr>
                  <tr>
                    <th>별점</th>
                    <td>{"rate"}</td>
                  </tr>
                  <tr>
                    <th>태그</th>
                    <td>{"tags"}</td>
                  </tr>
                </table>
              </div>
            </section>
          </section>
          <section className={styles.report_content}>
            <h3>내용</h3>
            <p className={styles.content}>{"content"}</p>
          </section>
        </div>
      </div>
      <RoundButton text="독후감 저장하기" />
    </section>
  );
};

export default ReportDetail;
