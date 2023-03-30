import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const passwordInput = ({ passwordInputVal, setPasswordInputVal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const handlePasswordInputChange = event => {
    setPasswordInputVal(event.target.value.trim());
  };

  const handleInputTouch = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (passwordInputVal.length < 6 && isInputTouched) {
      return setErrorMessage('Must contain at least 6 characters');
    }

    if (!/(?=.*?[A-Z])/.test(passwordInputVal) && isInputTouched) {
      return setErrorMessage('Must contain at least one uppercase letter');
    }

    if (!/(?=.*?[a-z])/.test(passwordInputVal) && isInputTouched) {
      return setErrorMessage('Must contain at least one lowercase letter');
    }

    if (!/(?=.*?[0-9])/.test(passwordInputVal) && isInputTouched) {
      return setErrorMessage('Must contain at least one digit');
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(passwordInputVal) && isInputTouched) {
      return setErrorMessage('Must contain at least one special character');
    }

    setErrorMessage('');
  }, [passwordInputVal, isInputTouched]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>password</label>
      <input
        className={styles.input}
        type="password"
        data-has-error={!!errorMessage}
        onChange={handlePasswordInputChange}
        onBlur={handleInputTouch}
        required
      />
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </div>
  );
};

export default passwordInput;
