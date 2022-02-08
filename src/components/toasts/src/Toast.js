import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastStatuses, ToastPositions } from './ToastConstants';

function Toast({ id, title, description, status, isClosable, duration, close }) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const interval = duration / 100;

  function pause() {
    setIsActive(false);
  }

  function reset() {
    setIsActive(true);
    setCount(0);
  }

  useEffect(() => {
    let intervalId = null;

    if (count === duration) close();

    if (isActive) intervalId = setInterval(() => setCount(count + interval), interval);
    else clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [count, isActive, interval, duration, close]);

  return (
    <li className={`toast toast--${status}`} onMouseOver={pause} onMouseLeave={reset}>
      <div className="toast__content">
        <div className="toast__icon" />
        <div>
          {title && <h1>{title + id}</h1>}
          {description && <p>{description}</p>}
        </div>
      </div>
      {isClosable && <div className="toast__close" onClick={close} />}
    </li>
  );
}

Toast.defaultProps = {
  status: ToastStatuses[0], // :'default'
  isClosable: true,
  duration: 5000,
};

Toast.propTypes = {
  // user given properties:
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(ToastStatuses),
  isClosable: PropTypes.bool,
  duration: PropTypes.number,
  position: PropTypes.oneOf(ToastPositions),

  // toast-manager given properties:
  id: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
};

export default Toast;
