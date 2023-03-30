import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const photoUrlInput = ({ photoUrlInputVal, setPhotoUrlInputVal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const handlePhotoUrlInputChange = event => {
    setPhotoUrlInputVal(event.target.value.trim());
  };

  const handleInputTouch = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (photoUrlInputVal === 0 && isInputTouched) {
      return setErrorMessage('Not a valid photo url');
    }

    setErrorMessage('');
  }, [photoUrlInputVal, isInputTouched]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>photoUrl</label>
      <input
        className={styles.input}
        type="text"
        data-has-error={!!errorMessage}
        onChange={handlePhotoUrlInputChange}
        onBlur={handleInputTouch}
      />
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </div>
  );
};

export default photoUrlInput;
