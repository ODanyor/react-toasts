const ToastActions = {
  SET: 'SET',
  DEL: 'DEL',
  DEL_ALL: 'DEL_ALL',
};

const ToastStatuses = [
  'default',
  'info',
  'success',
  'warning',
  'error',
];

const ToastPositions = [
  'top-left',
  'top-middle',
  'top-right',
  'bottom-left',
  'bottom-middle',
  'bottom-right',
];

export {
  ToastActions,
  ToastStatuses,
  ToastPositions,
};