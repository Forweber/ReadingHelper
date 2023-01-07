import React from "react";

type Props = {
  text:string;
  backColor?:string;
  textColor?:string;
  onClick?:()=>void;
}
export const RoundButton = ({ backColor, textColor, text, onClick }:Props) => {
  const styles = {
    borderRadius: 5,
    padding: "0.5em",
    margin: "0.5em",
    cursor: "pointer",
    backgroundColor: backColor ? `${backColor}` : "#FDBF00",
    color: textColor ? `${textColor}` : "#ffffff",
  };
  return (
    <button style={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default RoundButton;
