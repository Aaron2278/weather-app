import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=b1c5b89a28a49878d7596078785708fb`


  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Delaware</p>
          </div>
          <div className="temp">
            <h1>68°</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
        </div>
        <div className="wind">
          <p className='bold'>12 MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
