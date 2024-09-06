import React, { useEffect, useState } from "react";
import "./Products.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  return (
    <>
      <AddNewProduct  getAllProduct={getAllProduct}/>
      <ProductsTable allProducts={allProducts} getAllProduct={getAllProduct} />
    </>
  );
}
