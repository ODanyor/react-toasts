import { useCallback, useMemo } from 'react';
import { useToastContext, setToast, delAllToasts } from './ToastContext';

function useToast() {
  const [, dispatch] = useToastContext();

  const show = useCallback(function(params) {
    if (params.duration) params.duration = Math.round(params.duration / 1000) * 1000;
    setToast(dispatch, params);
  }, [dispatch]);

  const deleteAll = useCallback(function() {
    delAllToasts(dispatch);
  }, [dispatch]);

  return useMemo(() => ({
    show,
    deleteAll,
  }), [show, deleteAll]);
}

export default useToast;
