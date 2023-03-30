import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { useSidebar } from '../../contexts/SidebarContext';
import styles from './SidebarBtn.module.css';

const SidebarBtn = () => {
  const { isSidebarVisible, handleSidebarToggle } = useSidebar();

  return (
    <button className={styles.sidebarBtn} onClick={handleSidebarToggle}>
      {isSidebarVisible ? (
        <MdClose className={styles.icon} />
      ) : (
        <MdMenu className={styles.icon} />
      )}
    </button>
  );
};

export default SidebarBtn;
