import React from "react";
import styles from "./report.module.css";

const Repeat = () => {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(<div>{`report ${i}`}</div>);
  }
  return arr;
};

const Report = (props) => {
  return (
    <div>
      <Repeat />
    </div>
  );
};

export default Report;
