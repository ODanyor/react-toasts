import { useToastContext, setToast, delAllToasts } from './ToastContext';

function useToast() {
  const [, dispatch] = useToastContext();

  function show(params) {
    if (params.duration && params.duration >= 1000)
      params.duration = Math.round(params.duration / 1000) * 1000;
    setToast(dispatch, params);
  }

  function deleteAll() {
    delAllToasts(dispatch);
  }

  return {
    show,
    deleteAll,
  };
}

export default useToast;
