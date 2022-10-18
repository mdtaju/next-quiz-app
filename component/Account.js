import React from 'react';

const Account = ({styles}) => {
      return (
            <div className={styles.account}>
                  <span className='material-icons-outlined' title='Account'>account_circle</span>
                  <a href="#">Signup</a>
            </div>
      );
};

export default Account;