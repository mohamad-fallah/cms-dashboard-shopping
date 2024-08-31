import React from "react";

import { CiBellOn } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img
          src="img/Mohamad-fallah.jpg"
          alt="admin-picture"
          className="admin-profile__picture"
        />
        <div className="header-about">
          <h2 className="header-about__name">محمدرضا فلاح فعال</h2>
          <h3 className="header-about__job">برنامه نویس فرانت اند</h3>
        </div>
      </div>
      <div className="header-left">
        <div className="header-left__search-box">
          <input
            type="text"
            placeholder="جست و جو کنید..."
            className="header-left__input"
          />
          <button className="header-left__btn">جست و جو</button>
        </div>
        <button className="header-left__icon">
          <CiBellOn className="header-left__icon-size"/>
        </button>
        <button className="header-left__icon">
          <CiBrightnessUp className="header-left__icon-size"/>
        </button>
      </div>
    </div>
  );
}
