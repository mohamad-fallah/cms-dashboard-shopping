import React from "react";

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
          <a href="#">
            <IoHomeOutline className="sidebar__icon"/>
            صفحه اصلی
          </a>
        </li>
        <li className="sidebar__link--active">
          <a href="#">
            <MdProductionQuantityLimits className="sidebar__icon"/>
            محصولات
          </a>
        </li>
        <li>
          <a href="#">
            <BiCommentDetail className="sidebar__icon"/>
            کامنت ها
          </a>
        </li>
        <li>
          <a href="#">
            <FiUsers className="sidebar__icon"/>
            کاربران
          </a>
        </li>
        <li>
          <a href="#">
            <IoBagCheckOutline className="sidebar__icon"/>
            سفارشات
          </a>
        </li>
        <li>
          <a href="#">
            <CiDollar className="sidebar__icon"/>
            تخفیفات
          </a>
        </li>
      </ul>
    </div>
  );
}
