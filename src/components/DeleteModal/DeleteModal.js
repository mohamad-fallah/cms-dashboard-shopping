import React from "react";
import ReactDOM from "react-dom";

export default function DeleteModal({ submit, cancel }) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal__btns">
          <button
            className="delete-modal__btn delete-modal__btn--accept"
            onClick={() => submit()}
          >
            بله
          </button>
          <button
            className="delete-modal__btn delete-modal__btn--reject"
            onClick={() => cancel()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
