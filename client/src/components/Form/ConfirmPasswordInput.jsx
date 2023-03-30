import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const confirmPasswordInput = ({
  passwordInputVal,
  confirmPasswordInputVal,
  setConfirmPasswordInputVal,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const handleConfirmPasswordInputChange = event => {
    setConfirmPasswordInputVal(event.target.value.trim());
  };

  const handleInputTouch = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (passwordInputVal !== confirmPasswordInputVal && isInputTouched) {
      return setErrorMessage("password don't match");
    }

    setErrorMessage('');
  }, [confirmPasswordInputVal, isInputTouched]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Confirm password</label>
      <input
        className={styles.input}
        type="password"
        data-has-error={!!errorMessage}
        onChange={handleConfirmPasswordInputChange}
        onBlur={handleInputTouch}
        required
      />
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </div>
  );
};

export default confirmPasswordInput;
