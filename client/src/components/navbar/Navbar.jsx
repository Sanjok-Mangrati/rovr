import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p><Link to='/' >Home</Link></p>
      <p><Link to='/blog' >Blog</Link></p>
      <p><a href="#reviews">Reviews</a></p>
      <p><a href="#contact">Contact</a></p>
      <p><Link to='/about' >About</Link></p>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rovr__navbar">
      <div className="rovr__navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="rovr__navbar-links">
        <Menu />
      </div>
      <div className="rovr__navbar-book">
        <a href="#book">Book ROVR</a>
      </div>
      <div className="rovr__navbar-menu">
        {
          toggleMenu ?
            <RiCloseLine color='#fff' size={24} onClick={() => setToggleMenu(false)} />
            :
            <RiMenu3Line color='#fff' size={24} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu
          &&
          (
            <div className="rovr__navbar-menu_container scale-up-center">
              <div className="rovr__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="rovr__navbar-menu_container-book">
                <a href="#book">Book ROVR</a>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar