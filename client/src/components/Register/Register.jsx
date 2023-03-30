import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import NameInput from '../Form/NameInput';
import EmailInput from '../Form/EmailInput';
import PasswordInput from '../Form/PasswordInput';
import PhotoUrlInput from '../Form/PhotoUrlInput';
import ConfirmPasswordInput from '../Form/ConfirmPasswordInput';
import { useAuth } from '../../contexts/AuthContext';
import { useSpinner } from '../../contexts/SpinnerContext';
import styles from '../Register/Register.module.css';
import utilities from '../../assets/utilities.module.css';

const Register = () => {
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [photoUrlInputVal, setPhotoUrlInputVal] = useState('');
  const [confirmPasswordInputVal, setConfirmPasswordInputVal] = useState('');
  const [registerError, setRegisterError] = useState('');
  const { createUser, googleRegister, githubRegister, updateUserProfile } =
    useAuth();
  const { setIsSpinnerVisible } = useSpinner();
  const navigate = useNavigate();

  const handleRegister = async event => {
    event.preventDefault();
    setIsSpinnerVisible(true);

    try {
      await createUser(emailInputVal, passwordInputVal);
      updateUserProfile(nameInputVal, photoUrlInputVal);
      navigate(-1);
    } catch (error) {
      setRegisterError(error.message);
    }

    setIsSpinnerVisible(false);
  };

  const handleGoogleRegister = async () => {
    setIsSpinnerVisible(true);

    try {
      await googleRegister();
      navigate(-1);
    } catch (error) {
      setRegisterError(error.message);
    }

    setIsSpinnerVisible(false);
  };

  const handleGithubRegister = async () => {
    setIsSpinnerVisible(true);

    try {
      await githubRegister();
      navigate(-1);
    } catch (error) {
      setRegisterError(error.message);
    }

    setIsSpinnerVisible(false);
  };

  return (
    <div className={`${styles.container} ${utilities.container}`}>
      <div className={styles.grid}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Register</h2>
          <p className={styles.text}>
            Already have an account? <Link to="/login">Log in</Link>{' '}
          </p>
          <p>Or register with...</p>

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

        <form className={styles.form} onSubmit={handleRegister}>
          <div className={styles.formBody}>
            <NameInput
              nameInputVal={nameInputVal}
              setNameInputVal={setNameInputVal}
            />
            <PhotoUrlInput
              photoUrlInput={photoUrlInputVal}
              setPhotoUrlInputVal={setPhotoUrlInputVal}
            />
            <EmailInput
              emailInputVal={emailInputVal}
              setEmailInputVal={setEmailInputVal}
            />
            <PasswordInput
              passwordInputVal={passwordInputVal}
              setPasswordInputVal={setPasswordInputVal}
            />
            <ConfirmPasswordInput
              passwordInputVal={passwordInputVal}
              confirmPasswordInputVal={confirmPasswordInputVal}
              setConfirmPasswordInputVal={setConfirmPasswordInputVal}
            />
          </div>

          <div className={styles.formFooter}>
            {registerError && (
              <p className={styles.errorMessage}>{registerError}</p>
            )}
            <button className={`${utilities.btn} ${styles.registerBtn}`}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
