import React from 'react';
import { useToastContext, delToast } from './ToastContext';
import Toast from './Toast';
import './assets/styles/index.scss';

function ToastPortal() {
  const [state, dispatch] = useToastContext();

  return (
    <div className="toasts-portal">
      {Object.keys(state).map(position => (
        <ul key={position} className={`toast-manager toast-manager--${position}`}>
          {state[position].map(toast => (
            <Toast
              key={`${position}-${toast.id}`}
              close={() => delToast(dispatch, { position, id: toast.id })}
              {...toast} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default ToastPortal;
