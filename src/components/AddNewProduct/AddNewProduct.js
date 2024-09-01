import React from 'react'
import './AddNewProduct.css'

export default function AddNewProduct() {
  return (
    <div className='add-product-main'>
        <h1 className='add-product-main__title'>افزودن محصول جدید</h1>
        <form action="#" className='add-products__form'>
            <div className="add-product__form-wrap">
                <div className="add-product__form-group">
                    <input type="text" placeholder='اسم محصول را بنویسید' className='add-product__input'/>
                </div>
                <div className="add-product__form-group">
                    <input type="text" placeholder='قیمت محصول را بنویسید' className='add-product__input'/>
                </div>
                <div className="add-product__form-group">
                    <input type="text" placeholder='موجودی محصول را بنویسید' className='add-product__input'/>
                </div>
                <div className="add-product__form-group">
                    <input type="text" placeholder='آدرس عکس محصول را بنویسید' className='add-product__input'/>
                </div>
                <div className="add-product__form-group">
                    <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className='add-product__input'/>
                </div>
                <div className="add-product__form-group">
                    <input type="text" placeholder='میزان فروش محصول را بنویسید' className='add-product__input'/>
                </div>
                <div className="add-product__form-group">
                    <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-product__input'/>
                </div>
            </div>
            <button className='add-product__form-btn'>ثبت محصول</button>
        </form>
    </div>
  )
}
