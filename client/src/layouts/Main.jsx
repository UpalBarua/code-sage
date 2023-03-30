import React from 'react';
import * as ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import { useSpinner } from '../contexts/SpinnerContext';
import Navbar from '../components/Navbar/Navbar';
import Spinner from '../components/spinner/Spinner';
import SidebarBtn from '../components/SidebarBtn/SidebarBtn';
import Footer from '../components/Footer/Footer';

const Main = () => {
  const { isSpinnerVisible } = useSpinner();
  const styles = {
    display: 'grid',
    minHeight: '100vh',
    gridTemplateRows: '1fr auto',
  };

  return (
    <>
      <div style={styles}>
        <div>
          <Navbar />
          <Outlet />
        </div>

        <Footer />
      </div>

      {isSpinnerVisible &&
        ReactDOM.createPortal(
          <Spinner />,
          document.getElementById('spinner-root')
        )}
      {/* <Spinner /> */}
    </>
  );
};

export default Main;
