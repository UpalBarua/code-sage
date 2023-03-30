import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import EmailInput from '../Form/EmailInput';
import PasswordInput from '../Form/PasswordInput';
import { useAuth } from '../../contexts/AuthContext';
import { useSpinner } from '../../contexts/SpinnerContext';
import styles from '../Register/Register.module.css';
import formStyles from '../../components/Form/Form.module.css';
import utilities from '../../assets/utilities.module.css';

const Login = () => {
  const [emailInputVal, setEmailInputVal] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [loginError, setLoginError] = useState('');
  const { googleRegister, githubRegister, logIn } = useAuth();
  const { setIsSpinnerVisible } = useSpinner();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  const handleEmailInputChange = event => {
    setEmailInputVal(event.target.value.trim());
  };

  const handlePasswordInputChange = event => {
    setPasswordInputVal(event.target.value.trim());
  };

  const handleLogin = async event => {
    event.preventDefault();
    setIsSpinnerVisible(true);

    try {
      await logIn(emailInputVal, passwordInputVal);
      setLoginError('');
      // navigate(from, { replace: true });
      navigate(-1);
    } catch (error) {
      setLoginError(error.message);
    }

    setIsSpinnerVisible(false);
  };

  const handleGoogleRegister = async () => {
    try {
      await googleRegister();
      setLoginError('');
      // navigate(from, { replace: true });
      navigate(-1);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleGithubRegister = async () => {
    try {
      await githubRegister();
      setLoginError('');
      // navigate(from, { replace: true });
      navigate(-1);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div className={`${styles.container} ${utilities.container}`}>
      <div className={styles.grid}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Log In</h2>
          <p className={styles.text}>
            Don't an account? <Link to="/register">Register</Link>{' '}
          </p>
          <p>Or log in with...</p>

          <div className={styles.btnGroup}>
            <button
              className={`${utilities.btn} ${styles.formBtn}`}
              onClick={handleGoogleRegister}>
              <AiOutlineGoogle />
              Google
            </button>
            <button
              className={`${utilities.btn} ${styles.formBtn}`}
              onClick={handleGithubRegister}>
              <AiOutlineGithub />
              Github
            </button>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formBody}>
            <div className={formStyles.wrapper}>
              <label className={formStyles.label}>Email</label>
              <input
                className={formStyles.input}
                type="text"
                onChange={handleEmailInputChange}
                required
              />
            </div>

            <div className={formStyles.wrapper}>
              <label className={formStyles.label}>password</label>
              <input
                className={formStyles.input}
                type="password"
                onChange={handlePasswordInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.formFooter}>
            {loginError && <p className={styles.errorMessage}>{loginError}</p>}
            <button className={`${utilities.btn} ${styles.registerBtn}`}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
