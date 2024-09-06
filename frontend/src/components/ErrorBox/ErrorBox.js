import React from "react";
import "./ErrorBox.css";

export default function ErrorBox({ msg }) {
  return (
    <div className="cms-mpty-error">
      <h4>{msg}</h4>
    </div>
  );
}
