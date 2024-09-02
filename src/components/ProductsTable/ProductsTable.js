import React from "react";
import "./ProductsTable.css";
import { useState, useEffect } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailModal from "../DetailModal/DetailModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollar } from "react-icons/ai";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [mainProductIfno, setMainProductIfno] = useState({});

  // edit product details
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColor, setProductNewColor] = useState("");

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  const deleteModalCancelActions = () => {
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitActions = () => {
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowDeleteModal(false);
        getAllProduct();
      });
  };
  const closeDetailsModal = () => {
    setIsShowDetailModal(false);
  };
  const updateProductInfos = () => {};

  return (
    <>
      {allProducts.length ? (
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
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table__main">
                <td>
                  <img
                    className="products-table__img"
                    src={product.img}
                    alt="oil"
                  />
                </td>
                <td className="products-table__main-title">{product.title}</td>
                <td className="products-table__main-title">{product.price}</td>
                <td className="products-table__main-title">{product.count}</td>
                <td className="products-table__main-title">
                  <button
                    className="products-table__btn"
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainProductIfno(product);
                    }}
                  >
                    جزئیات
                  </button>

                  <button
                    className="products-table__btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductId(product.id);
                    }}
                  >
                    حذف
                  </button>

                  <button
                    className="products-table__btn"
                    onClick={() => {
                      setIsShowEditModal(true)
                      setProductNewTitle(product.title)
                      setProductNewPrice(product.price)
                      setProductNewCount(product.count)
                      setProductNewImg(product.img)
                      setProductNewPopularity(product.popularity)
                      setProductNewSale(product.sale)
                      setProductNewColor(product.colors)
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ محصولی یافت نشد" />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          submit={deleteModalSubmitActions}
          cancel={deleteModalCancelActions}
        />
      )}
      {isShowDetailModal && (
        <DetailModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگبندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductIfno.popularity}</td>
                <td>{mainProductIfno.sale}</td>
                <td>{mainProductIfno.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailModal>
      )}
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
              value={productNewTitle}
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPrice}
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewCount}
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="تصویر جدید را وارد کنید"
              className="edit-product-input"
              value={productNewImg}
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="محبوبیت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="فروش جدید را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
            />
          </div>
          <div className="add-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="رنگ بندی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewColor}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
