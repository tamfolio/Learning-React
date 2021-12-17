import './App.css';
import React from 'react';

function App() {

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17){
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }

  const styles = {
    color: '#ff4565',
    backgroundColor:'#333',
    fontSize: 24
  }
    return (
      <>
      <h1>It is currently about {date.getHours() % 12} o'clock</h1>
      <h1 style={styles}>Good {timeOfDay}</h1>
      </>
    );
}

export default App;