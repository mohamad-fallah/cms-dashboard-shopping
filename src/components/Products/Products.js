import React from "react";
import "./Products.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <ProductsTable/>
    </>
  );
}
