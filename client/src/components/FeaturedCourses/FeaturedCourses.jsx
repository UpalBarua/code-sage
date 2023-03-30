import React, { useEffect, useState } from 'react';
import CourseCard from '../Courses/CourseCard';
import styles from './FeaturedCourse.module.css';

const FeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [bestsellerCourses, setBestSellerCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://codesage-eight.vercel.app/featured'
      );
      const data = await response.json();
      setFeaturedCourses(data);
    })();
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://codesage-eight.vercel.app/bestseller'
      );
      const data = await response.json();
      setBestSellerCourses(data);
    })();
  });

  return (
    <section>
      <h2 className={styles.title}>Featured Courses</h2>
      <div className={styles.container}>
        {featuredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <h2 className={styles.title}>Best Sellers</h2>
      <div className={styles.container}>
        {bestsellerCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
