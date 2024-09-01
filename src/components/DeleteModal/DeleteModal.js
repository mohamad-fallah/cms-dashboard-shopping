import React from 'react'
import './DeleteModal.css'
import ReactDOM from 'react-dom'

export default function DeleteModal() {
  return ReactDOM.createPortal(
        <div className="delete-modal">
            <h1>آیا از حذف اطمینان دارید؟</h1>
            <div className="delete-modal__btns">
                <button className='delete-modal__btn delete-modal__btn--accept'>بله</button>
                <button className='delete-modal__btn delete-modal__btn--reject'>خیر</button>
            </div>
        </div>, document.getElementById('modals-parent')
  )
}
