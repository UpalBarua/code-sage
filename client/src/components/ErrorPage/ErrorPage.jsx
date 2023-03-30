import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import utilities from '../../assets/utilities.module.css';

const ErrorPage = () => {
  return (
    <div className={`${styles.errorContainer} ${utilities.container}`}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <p className={styles.status}>404!</p>
        </div>

        <div className={styles.col}>
          <h2 className={styles.title}>Oops! Page Not Found.</h2>
          <p className={styles.message}>
            Sorry, the page you're looking for was moved, removed, renamed or
            might never existed.
          </p>
          <Link className="btn btnPrimary" to="/">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
