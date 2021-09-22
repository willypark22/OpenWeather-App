import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const apiKey = "3ae85c1c464adaa4838817f2916dbc89"

  const [weather, setWeather] = useState({});
  const [userData, setUserData] = useState('');
  const [units, setUnits] = useState('imperial');

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const fetchData = async (event) => {
    if(event.key === 'Enter') {
      try {
        const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${userData}&units=${units}&appid=${apiKey}`);
        setWeather(result.data);
        setUserData('');
      }
      catch(error) {
        console.error(error);
      }
      console.log(weather);
    }
  }

  const capitalizeWord = (word) => {
    const words = word.split(" ");

    for(let i in words) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(' ');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather React App</title>
        <meta name="description" content="Weather React Application using the Open Weather API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input
          value={userData}
          type="text"
          placeholder="Search for a city"
          onChange={(e) => setUserData(e.target.value)}
          onKeyPress={fetchData}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div>{weather.name}, {weather.sys.country}</div>
          <div>{Math.round(weather.main.temp)}°</div>
          <div>{capitalizeWord(weather.weather[0].description)}</div>
          <div>H:{Math.round(weather.main.temp_max)}° L:{Math.round(weather.main.temp_min)}°</div>
        </div>
      ) : ('')}
    </div>
  )
}
