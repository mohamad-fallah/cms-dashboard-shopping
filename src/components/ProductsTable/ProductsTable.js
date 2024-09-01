import React from 'react'
import './ProductsTable.css'

export default function ProductsTable() {
  return (
    <table className='products-table'>
        <tr className='products-table__header'>
            <th className='products-table__header-title'>عکس</th>
            <th className='products-table__header-title'>اسم</th>
            <th className='products-table__header-title'>قیمت</th>
            <th className='products-table__header-title'>موجودی</th>
        </tr>
        <tr className='products-table__main'>
            <td>
                <img className='products-table__img' src="img/products/oil.jpeg" alt="oil" />
            </td>
            <td className='products-table__main-title'>روغن سرخ کردنی</td>
            <td className='products-table__main-title'>92000 تومان</td>
            <td className='products-table__main-title'>83</td>
            <td className='products-table__main-title'>
                <button className="products-table__btn">جزئیات</button>
                <button className="products-table__btn">حذف</button>
                <button className="products-table__btn">ویرایش</button>
            </td>
        </tr>
    </table>
  )
}
