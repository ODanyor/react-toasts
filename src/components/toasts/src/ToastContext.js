import { createContext, useReducer, useContext } from 'react';
import { ToastActions, ToastPositions } from './ToastConstants';
import ToastPortal from './ToastPortal';

const ToastContext = createContext({});

const initialToastsState = {};

ToastPositions.forEach(position => Object.defineProperty(initialToastsState, position, {
  value: [],
  enumerable: true,
}));

function toastsReducer(state, action) {
  switch(action.type) {
    case ToastActions.SET: {
      let { position, ...rest } = action.payload;
      if (!position) position = ToastPositions[ToastPositions.length - 1]; // :'bottom-right'
      return {
        ...state,
        [position]: [...state[position], { ...rest, id: toastsReducer.toastCounter++ }],
      };
    }
    case ToastActions.DEL: {
      const { position, id } = action.payload;
      return {
        ...state,
        [position]: state[position].filter(toast => toast.id !== id),
      };
    }
    case ToastActions.DEL_ALL: {
      return initialToastsState;
    }
    default:
      throw new Error(`Undefined action type: ${action.type}`);
  }
}
/**
 * @desc: counts toasts and used as toast.id
 */
toastsReducer.toastCounter = 0;

function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(toastsReducer, initialToastsState);

  return (
    <ToastContext.Provider value={[state, dispatch]}>
      {children}
      <ToastPortal />
    </ToastContext.Provider>
  );
}

function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('`useToastContext` must be used within ToastProvider.');
  return context;
}

// helper functions:
function setToast(dispatch, toast) {
  dispatch({ type: ToastActions.SET, payload: toast });
}

function delToast(dispatch, toast) {
  dispatch({ type: ToastActions.DEL, payload: toast });
}

function delAllToasts(dispatch) {
  dispatch({ type: ToastActions.DEL_ALL });
}

export {
  ToastContext,
  useToastContext,

  setToast,
  delToast,
  delAllToasts,
};
export default ToastProvider;
