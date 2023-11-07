import React from 'react';
import './App.css';
import SecondsCounter from './SecondsCounter'; // Import the SecondsCounter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Use the SecondsCounter component and pass props as needed */}
        <SecondsCounter initialSeconds={0} alertAt={10} />
        <p>
          This is a simple seconds counter app.
        </p>
      </header>
    </div>
  );
}

export default App;
