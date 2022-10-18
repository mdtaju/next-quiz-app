import Image from 'next/image';
import React from 'react';
import Banner from '../public/3.jpg';

const Video = ({styles}) => {
      return (
            <a href="quiz.html">
                  <div className={styles.video}>
                        <Image src={Banner} alt="banner" />
                        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                        <div className={styles.qmeta}>
                              <p>10 Questions</p>
                              <p>Score : Not taken yet</p>
                        </div>
                  </div>
            </a>
      );
};

export default Video;