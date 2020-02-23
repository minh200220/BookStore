import React from "react";
import "../styles/Header.css";

export default function(props) {
  return (
    <div>
      <h1 className="Header text-center">{props.title}</h1>
    </div>
  );
}
