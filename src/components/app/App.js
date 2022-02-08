import React from 'react';
import { useToast } from 'components/toasts';
import logo from 'assets/icons/logo.svg';

function App() {
  const toast = useToast();
  const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
