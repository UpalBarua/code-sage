import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import utilities from '../../assets/utilities.module.css';
import styles from './Checkout.module.css';

const Checkout = () => {
  const courseId = useParams().courseId;
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://codesage-eight.vercel.app/details/${courseId}`
      );
      const data = await response.json();
      setCourseDetails(data);
    })();
  }, []);

  const { name, img, instructor, price } = courseDetails;

  return (
    <section className={utilities.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={img} alt="" />
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.instructor}>{instructor}</p>
        <p className={styles.price}>{price}</p>
        <button className={`${utilities.btn} ${styles.checkoutBtn}`}>
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Checkout;
