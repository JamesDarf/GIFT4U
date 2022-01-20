import React from "react";

export default function NewLineText(props) {
  const res = props.text.split("\n").map((line) => {
    return <p style={{ whiteSpace: "normal", lineHeight: "160%" }}>{line}</p>;
  });
  return res;
}
