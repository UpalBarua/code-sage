import React from 'react';
import { Link } from 'react-router-dom';
import utilities from '../../assets/utilities.module.css';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={utilities.container}>
      <div className={styles.wrapper}>
        <div className={styles.col}>
          <h2 className={styles.tagline}>
            We make you fall in love with the code!
          </h2>
          <div className={styles.btnGroup}>
            <Link
              to="/courses"
              className={`${utilities.btn} ${styles.heroBtn}`}>
              Start Learning
            </Link>
            <Link to="blog" className={`${utilities.btn} ${styles.heroBtn}`}>
              Read Blog
            </Link>
          </div>
        </div>
        <div className={styles.col}></div>
      </div>
      <FeaturedCourses />
    </section>
  );
};

export default Hero;
