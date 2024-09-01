import React from "react";
import { Link } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar__links">
        <li>
          <Link to="/products">
            <IoHomeOutline className="sidebar__icon" />
            صفحه اصلی
          </Link>
        </li>
        <li className="sidebar__link--active">
          <Link to="/products">
            <MdProductionQuantityLimits className="sidebar__icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <BiCommentDetail className="sidebar__icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FiUsers className="sidebar__icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <IoBagCheckOutline className="sidebar__icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <CiDollar className="sidebar__icon" />
            تخفیفات
          </Link>
        </li>
      </ul>
    </div>
  );
}
