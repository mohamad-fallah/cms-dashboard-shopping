import React from "react";
import "./ProductsTable.css";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailModal from "../DetailModal/DetailModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollar } from "react-icons/ai";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const deleteModalCancelActions = () => {
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitActions = () => {
    setIsShowDeleteModal(false);
  };
  const closeDetailsModal = () => {
    setIsShowDetailModal(false);
  };
  const updateProductInfos = (event) => {
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table__header">
            <th className="products-table__header-title">عکس</th>
            <th className="products-table__header-title">اسم</th>
            <th className="products-table__header-title">قیمت</th>
            <th className="products-table__header-title">موجودی</th>
            <th className="products-table__header-title mr-custom">
              ویرایش محصول
            </th>
          </tr>
        </thead>
        <tbody>
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
              <button
                className="products-table__btn"
                onClick={() => setIsShowDetailModal(true)}
              >
                جزئیات
              </button>
              <button
                className="products-table__btn"
                onClick={() => setIsShowDeleteModal(true)}
              >
                حذف
              </button>
              <button
                className="products-table__btn"
                onClick={() => setIsShowEditModal(true)}
              >
                ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          submit={deleteModalSubmitActions}
          cancel={deleteModalCancelActions}
        />
      )}
      {isShowDetailModal && <DetailModal onHide={closeDetailsModal} />}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
