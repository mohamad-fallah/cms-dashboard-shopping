import React from "react";
import "./DetailModal.css";
import { useEffect } from "react";

export default function DetailModal({ onHide }) {
  useEffect(() => {
    const checkKey = (event) => {
        console.log(event);
        
      if (event.keyCode === 27) {
        onHide();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal">
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لپ تاپ</td>
              <td>12,000,000</td>
              <td>91%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
