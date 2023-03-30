import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { useSpinner } from '../../contexts/SpinnerContext';
import utilities from '../../assets/utilities.module.css';
import styles from '../Courses/Courses.module.css';
import { useSidebar } from '../../contexts/SidebarContext';
import SidebarBtn from '../SidebarBtn/SidebarBtn';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { setIsSpinnerVisible } = useSpinner();
  const { isSidebarVisible } = useSidebar();

  useEffect(() => {
    setIsSpinnerVisible(true);

    (async () => {
      const response = await fetch('https://codesage-eight.vercel.app/courses');
      const data = await response.json();
      setCourses(data);
      setIsSpinnerVisible(false);
    })();
  }, []);

  return (
    <div className={utilities.container}>
      <h2 className={styles.heading}>Our Courses</h2>
      <div className={styles.courseContainer}>
        <aside className={styles.sidebar} data-is-visible={isSidebarVisible}>
          <ul className={styles.menu}>
            {courses.map(course => (
              <li className={styles.menuItem} key={course.id}>
                <Link to={`/details/${course.id}`}>{course.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles.cardsContainer}>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <SidebarBtn />
    </div>
  );
};

export default Courses;
