import React from 'react';
import "./sidebar.css";
import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className='nav__logo'>
        <img src={logo} alt="" srcset="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li>
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li>
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li>
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>
  )
}

export default Sidebar
