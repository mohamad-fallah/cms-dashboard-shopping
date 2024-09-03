import React from "react";
import "./AddNewProduct.css";
import { useState } from "react";

export default function AddNewProduct() {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const newProductInfos = {
    title: newProductName,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  };

  const addNewProduct = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => console.log(res))
  };

  return (
    <div className="add-product-main">
      <h1 className="add-product-main__title">افزودن محصول جدید</h1>
      <form action="#" className="add-products__form">
        <div className="add-product__form-wrap">
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-product__input"
              value={newProductName}
              onChange={(event) => setNewProductName(event.target.value)}
            />
          </div>
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product__input"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product__input"
              value={newProductCount}
              onChange={(event) => setNewProductCount(event.target.value)}
            />
          </div>
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-product__input"
              value={newProductImg}
              onChange={(event) => setNewProductImg(event.target.value)}
            />
          </div>
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product__input"
              value={newProductPopularity}
              onChange={(event) => setNewProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product__input"
              value={newProductSale}
              onChange={(event) => setNewProductSale(event.target.value)}
            />
          </div>
          <div className="add-product__form-group">
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-product__input"
              value={newProductColors}
              onChange={(event) => setNewProductColors(event.target.value)}
            />
          </div>
        </div>
        <button className="add-product__form-btn" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
