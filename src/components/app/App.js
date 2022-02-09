import React, { useEffect } from 'react';
import { ToastContainer, toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from 'components/toasts';
import logo from 'assets/icons/logo.svg';

function App() {
  const notify = () => toastify('react-toastify');
  const toast = useToast();
  const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  useEffect(() => {
    setTimeout(() => toast.show({ title: 'Hello wor'}), 3000);
  }, [toast]);

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>
            <button type='button' onClick={() => toast.show({ title: 'toast-', description: dummyDescription, position: 'top-left', status: 'error' })}>top-left</button>
            <button type='button' onClick={() => toast.show({ title: 'toast-', description: dummyDescription, position: 'top-middle', status: 'warning' })}>top-middle</button>
            <button type='button' onClick={() => toast.show({ title: 'toast-', description: dummyDescription, position: 'top-right', status: 'success' })}>top-right</button>
          </div>
          <div>
            <button type='button' onClick={() => toast.show({ title: 'toast-', description: dummyDescription, position: 'bottom-left' })}>bottom-left</button>
            <button type='button' onClick={() => toast.show({ title: 'toast-', description: dummyDescription, position: 'bottom-middle' })}>bottom-middle</button>
            <button type='button' onClick={() => toast.show({ title: 'toast-', description: dummyDescription, position: 'bottom-right' })}>bottom-right</button>
          </div>
          <button type='button' onClick={toast.deleteAll}>Clean</button>
        </div>
        <div>
          <button type='button' onClick={notify}>react-toastify</button>
        </div>
      </header>
    </div>
  );
}

export default App;
