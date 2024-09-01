import React from "react";
import "./ProductsTable.css";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function ProductsTable() {

    const [isShowModal, setIsShowModal] = useState(false)

    const deleteModalCancelActions = () => {
        console.log("بسته");
        setIsShowModal(false)
    }
    const deleteModalSubmitActions = () => {
        console.log("باز شد");
        setIsShowModal(false)
    }

  return (
          <> 
      <table className="products-table">
      <tr className="products-table__header">
        <th className="products-table__header-title">عکس</th>
        <th className="products-table__header-title">اسم</th>
        <th className="products-table__header-title">قیمت</th>
        <th className="products-table__header-title">موجودی</th>
        <th className="products-table__header-title mr-custom">ویرایش محصول</th>
      </tr>
      <tr className="products-table__main">
        <td>
          <img
            className="products-table__img"
            src="img/products/oil.jpeg"
            alt="oil"
          />
        </td>
        <td className="products-table__main-title">روغن سرخ کردنی</td>
        <td className="products-table__main-title">92000 تومان</td>
        <td className="products-table__main-title">132</td>
        <td className="products-table__main-title">
          <button className="products-table__btn">جزئیات</button>
          <button className="products-table__btn" onClick={() => setIsShowModal(true)}>حذف</button>
          <button className="products-table__btn">ویرایش</button>
        </td>
      </tr>
    </table>
    {isShowModal && <DeleteModal submit={deleteModalSubmitActions} cancel={deleteModalCancelActions}/>}
    </>
  );
}
