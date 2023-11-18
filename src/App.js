import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/header';
import Weather from './components/weather';
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
   

  return (
    <div className="App container">
      <Header></Header>
      <div className="cityName">
        <div className="content">
            <div class="item">
              <div class="subItems">
                <img src='/location.jpg'  alt="City Name" className='location'/> 
                <span>City Name</span>
              </div>
                <span>27°10'36'' N & 78°0'29'' E</span>
            </div>
            <div class="item">
              <div class="subItems">
                <input type="type" name="" placeholder='Search your city here....' class="search" />
                <img src="/search.png" className='searchIcon' alt='search' />
              </div>
            </div>
        </div>
      </div>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      
    </div>
  );
}