import React from 'react';
import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import utilities from '../../assets/utilities.module.css';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
  const { id, name, instructor, ratings, description, price, img } = course;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.cardImg} src={img} alt="" />
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.instructor}>
          by <span>{instructor}</span>
        </p>
      </div>

      <p className={styles.description}>{description.slice(0, 100) + '...'}</p>

      <div className={styles.footer}>
        <p className={styles.ratings}>
          {ratings} <BsStar className={styles.icon} />
        </p>
        <p className={styles.price}>{price}</p>
      </div>

      <Link
        className={`${utilities.btn} ${styles.cardBtn}`}
        to={`/details/${id}`}>
        Learn More
      </Link>
    </div>
  );
};

export default CourseCard;
