import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const NameInput = ({ nameInputVal, setNameInputVal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const nameRegex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/;

  const handleNameInputChange = event => {
    setNameInputVal(event.target.value.trim());
  };

  const handleInputTouch = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (!nameRegex.test(nameInputVal) && isInputTouched) {
      return setErrorMessage('Not a valid name');
    }

    setErrorMessage('');
  }, [nameInputVal, isInputTouched]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        type="text"
        data-has-error={!!errorMessage}
        onChange={handleNameInputChange}
        onBlur={handleInputTouch}
      />
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </div>
  );
};

export default NameInput;
