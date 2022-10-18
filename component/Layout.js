import React from 'react';
import styles from '../styles/Layout/Layout.module.css';
import Navbar from './Navbar';

const Layout = ({children}) => {
      return (
            <>
                  <Navbar />
                  <main className={styles.main}>
                        <div className={styles.container}>
                              {children}
                        </div>
                  </main>
            </>
      );
};

export default Layout;