import { BsSearch } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

import "./Header.css";
import HeaderDropDown from "./HeaderDropDown";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="container-fluid">
          <div className="row d-none d-lg-flex">
            <div className="col-6">
              <div className="header-right-section">
                <div className="header-logo-parent">
                  <img src="/images/logo.webp" width={104} height={68} alt="" />
                </div>
                <div className="header-menu-list">
                  <ul className="header-menu">
                    <li className="header-menu-item front">
                      فرانت
                      <HeaderDropDown>
                        <a href="">اموزش HTML</a>
                        <a href="">اموزش CSS</a>
                        <a href="">اموزش FlexBox</a>
                        <a href="">اموزش Css Grid</a>
                        <a href="">اموزش Emment</a>
                        <a href="">اموزش اصولی طراحی قالب</a>
                        <a href="">اموزش بوت استرپ</a>
                        <a href="">اموزش جامع React</a>
                        <a href="">اموزش ویو جی اس</a>
                        <a href="">اموزش وی اس کد</a>
                        <a href="">اموزش NPM</a>
                      </HeaderDropDown>
                    </li>
                    <li className="header-menu-item">
                      امنیت
                      <HeaderDropDown>
                        <a href="">نقشه راه ورود</a>
                        <a href="">شبکه با گرایش امنیت</a>
                        <a href="">لینوکس با گرایش امنیت</a>
                        <a href="">اموزش هکر قانونمد</a>
                        <a href="">اموزش پایتون سیاه</a>
                        <a href="">اموزش جاوا اسکریپت سیاه</a>
                      </HeaderDropDown>
                    </li>
                    <li className="header-menu-item">
                      پایتون
                      <HeaderDropDown>
                        <a href="">آموزش پایتون</a>
                        <a href="">پروژه کاربردی با پایتون</a>
                        <a href="">ترفند های کاربردی با پایتون</a>
                        <a href="">متخصص جنگو</a>
                        <a href="">مصور سازی داده پایتون</a>
                      </HeaderDropDown>
                    </li>
                    <li className="header-menu-item">مهارت نرم</li>
                    <li className="header-menu-item">
                      مقالات
                      <HeaderDropDown>
                        <a href="">اچ تی ام ال</a>
                        <a href="">بوت استرپ</a>
                        <a href="">پروژه برنامه نویسی</a>
                        <a href="">تست و نفوذ</a>
                        <a href="">جی کوئری</a>
                        <a href="">ری اکت جی اس</a>
                        <a href="">شروع برنامه نویسی</a>
                        <a href="">طراحی سایت</a>
                        <a href="">ویو جی اس</a>
                      </HeaderDropDown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="header-avatar-menu">
                <div className="header-search-parent">
                  <input
                    className="header-search-input"
                    placeholder="جستجو"
                    type="text"
                    name=""
                    id=""
                  />
                  <span className="header-theme-icon">
                    <BsSearch style={{ fontSize: 28, color: "#888" }} />
                  </span>
                </div>
                <div className="header-switch-theme">
                  <CiDark style={{ fontSize: 36, color: "#888" }} />
                </div>

                <img
                  className="header-avatar"
                  src="/images/user.jpg"
                  width={56}
                  height={56}
                  alt=""
                />
              </div>
            </div>
          </div>
          
          <div className="row d-flex d-lg-none">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <span className="header-img-span-parent">
                  <IoIosMenu className="header-icon-small"/>
                </span>
                <div className="">
                  <img src="/images/logo.webp" width={80} height={52} alt="" />
                </div>
                <img
                  className="header-avatar-small"
                  src="/images/user.jpg"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
