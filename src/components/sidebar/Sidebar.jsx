import React, { useEffect, useRef, useState } from 'react';
import './sidebar.css';
// import Logo from '../../assets/logo.svg';
// import flowers from '../../assets/flowers.svg';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        showMenu(false);
      }
    };

    if (toggle) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [toggle]);

  const handleMenuToggle = () => {
    showMenu((prevState) => !prevState);
  };
  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <a href="#home" className="nav__logo">
          {/* <img src={Logo} alt="" /> */}
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="fa-solid fa-house"></i>
                  {/* <i className="icon-home"></i> */}
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="fa-solid fa-user"></i>
                  {/* <i className="icon-user-following"></i> */}
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="fa-solid fa-graduation-cap"></i>
                  {/* <i className="icon-graduation"></i> */}
                </a>
              </li>

              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="fa-solid fa-layer-group"></i>
                  {/* <i className="icon-layers"></i> */}
                </a>
              </li>

              {/* <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li> */}

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="fa-solid fa-briefcase"></i>
                  {/* <i className="icon-briefcase"></i> */}
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="fa-solid fa-comment"></i>
                  {/* <i className="icon-bubble"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">{/* <span className="copyright">&copy; 2022 - 2023.</span> */}</div>
      </aside>

      <div ref={menuRef} className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={handleMenuToggle}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
