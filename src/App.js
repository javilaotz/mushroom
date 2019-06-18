import React from 'react';
import './App.css';
import UserRegistration from './components/UserRegistration'
import SpaceRegistration from './components/SpaceRegistration'
import ManagerRegistration from './components/ManagerRegistration'

function App() {
  return (
    <div className="App">
      <UserRegistration /> 
      <SpaceRegistration />
      <ManagerRegistration />
    </div>
  );
}

export default App;
