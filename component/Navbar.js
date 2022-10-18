import React from 'react';
import Styles from '../styles/Home/Home.module.css';
import Account from './Account';
import Brand from './Brand';
const Navbar = () => {
      return (
            <nav className={Styles.nav}>
                  <Brand styles={Styles}/>
                  <Account styles={Styles}/>
            </nav>
      );
};

export default Navbar;