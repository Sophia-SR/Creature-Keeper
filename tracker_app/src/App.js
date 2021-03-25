import React from 'react'
import './App.css';
import ViewSightings from './components/viewSightings';
import AddSightings from './components/addSightings';

function App() {
  return (
    <>
    <div className="App">
    <ViewSightings/>
    <AddSightings/>
    </div>
    </>
  );
}

export default App;
