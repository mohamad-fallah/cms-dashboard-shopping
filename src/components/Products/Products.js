import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <ErrorBox msg={"هیچ محصولی یافت نشد"} />
      <ProductsTable/>
      <DeleteModal/>
    </>
  );
}
