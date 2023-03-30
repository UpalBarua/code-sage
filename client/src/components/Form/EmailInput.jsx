import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const EmailInput = ({ emailInputVal, setEmailInputVal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmailInputChange = event => {
    setEmailInputVal(event.target.value.trim());
  };

  const handleInputTouch = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (!emailRegex.test(emailInputVal) && isInputTouched) {
      return setErrorMessage('Not a valid email');
    }

    setErrorMessage('');
  }, [emailInputVal, isInputTouched]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Email</label>
      <input
        className={styles.input}
        type="text"
        data-has-error={!!errorMessage}
        onChange={handleEmailInputChange}
        onBlur={handleInputTouch}
        required
      />
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </div>
  );
};

export default EmailInput;
