import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsStar, BsCurrencyDollar } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import DetailsPdf from './DetailsPdf';
import utilities from '../../assets/utilities.module.css';
import styles from './Details.module.css';
import jsPDF from 'jspdf';
// import {pd} from 'react-to-pdf'
import Pdf from 'react-to-pdf';
import { useSpinner } from '../../contexts/SpinnerContext';

const Details = () => {
  const courseId = useParams().courseId;
  const [courseDetails, setCourseDetails] = useState({});
  const pdfRef = useRef(null);
  const { setIsSpinnerVisible } = useSpinner();

  useEffect(() => {
    setIsSpinnerVisible(true);

    (async () => {
      const response = await fetch(
        `https://codesage-eight.vercel.app/details/${courseId}`
      );
      const data = await response.json();
      setCourseDetails(data);
      setIsSpinnerVisible(false);
    })();
  }, []);

  const { id, img, name, instructor, ratings, description, lastUpdated } =
    courseDetails;

  return (
    <section className={styles.container} ref={pdfRef}>
      <div className={styles.header}>
        <img className={styles.detailsImg} src={img} alt="" />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.instructor}>
            Created by <span>{instructor}</span>
          </p>
          <p>Last updated {lastUpdated} months ago</p>

          <Pdf targetRef={pdfRef} filename="course-details.pdf" op>
            {({ toPdf }) => (
              <button
                className={`${utilities.btn} ${styles.pdfBtn}`}
                onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>

          {/* <button
            className={`${utilities.btn} ${styles.pdfBtn}`}
            onClick={generatePDF}
            type="button">
            Save as pdf
          </button> */}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.stats}>
          <div className={styles.statsWrapper}>
            <BsStar className={styles.icon} />
            <p>{ratings}</p>
          </div>

          <div className={styles.statsWrapper}>
            <BsCurrencyDollar className={styles.icon} />
            <p>{ratings}</p>
          </div>

          <div className={styles.statsWrapper}>
            <IoLanguageOutline className={styles.icon} />
            <p>{ratings}</p>
          </div>
        </div>

        <p ref={pdfRef} className={styles.description}>
          {description}
        </p>
      </div>

      <Link
        className={`${utilities.btn} ${styles.accessBtn}`}
        to={`/checkout/${id}`}>
        Get premium access
      </Link>
    </section>
  );
};

export default Details;
