import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-parent">
          <img src="/images/logo.webp" width={104} height={68} alt="" />
        </div>
        <div className="header-menu-list">
            <ul className="header-menu">
                <li className="header-menu-item">فرانت اند</li>
                <li className="header-menu-item">امنیت</li>
                <li className="header-menu-item">پایتون</li>
                <li className="header-menu-item">مهارت نرم</li>
                <li className="header-menu-item">مقالات</li>
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
