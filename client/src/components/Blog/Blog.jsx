import React, { useEffect, useState } from 'react';
import { BsQuestion } from 'react-icons/bs';
import utilities from '../../assets/utilities.module.css';
import styles from './Blog.module.css';
import { useSpinner } from '../../contexts/SpinnerContext';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const { setIsSpinnerVisible } = useSpinner();

  useEffect(() => {
    setIsSpinnerVisible(true);
    (async () => {
      const response = await fetch('https://codesage-eight.vercel.app/blog');
      const data = await response.json();
      setBlogData(data);
      setIsSpinnerVisible(false);
    })();
  }, []);

  return (
    <section className={utilities.container}>
      <div className={styles.blogContainer}>
        <h3 className={styles.title}>Blog</h3>
        {blogData.map(data => (
          <div className={styles.wrapper} key={data.id}>
            <div className={styles.question}>
              <p className={styles.text}>{data.question}</p>
            </div>
            <div className={styles.answer}>
              <p className={styles.text}>{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
