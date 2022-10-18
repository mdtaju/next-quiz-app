import React from 'react';
import styles from '../styles/Videos/Videos.module.css';
import Video from './Video';

const Videos = () => {
      return (
            <div className={styles.videos}>
                  <Video styles={styles}/>
            </div>
      );
};

export default Videos;