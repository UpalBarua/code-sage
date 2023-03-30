import React from 'react';
import utilities from '../../assets/index.css';
import { useAuth } from '../../contexts/AuthContext';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  const { logOut } = useAuth();

  return (
    <section className={utilities.container}>
      <button className={utilities.btn} onClick={logOut}>
        Log Out
      </button>
    </section>
  );
};

export default UserDashboard;
