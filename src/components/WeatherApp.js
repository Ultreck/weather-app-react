import React, { useState, useEffect } from 'react';
import {FaSearch} from 'react-icons/fa';
import img from '../images/Spin-1s-299px.gif';
import axios from 'axios';

const WeatherApp = () => {
      const [weatherOne, setweatherOne] = useState()
      const [weatherTwo, setweatherTwo] = useState()
      const [handleSearch, sethandleSearch] = useState("Lagos")
      const [cityName, setcityName] = useState()
      // const [loader, setloader] = useState(true)
      const [currentLocationLat, setcurrentLocationLat] = useState()
      const [currentLocationLong, setcurrentLocationLong] = useState()
      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocationLat}&lon=${currentLocationLong}&appid=1dadd99807c0d5f4e3d39e8da1dd0e02&units=metric`;
      let URL2 = `https://api.openweathermap.org/data/2.5/weather?q=${handleSearch}&appid=1dadd99807c0d5f4e3d39e8da1dd0e02&units=metric`;
      
      const getCurrentLocationWeather = () => {
            navigator.geolocation.getCurrentPosition(position => {
                  setcurrentLocationLat(position.coords.latitude)
                  setcurrentLocationLong(position.coords.longitude)
            });
      }
      const getWeather = () => {
            fetch(URL).then(res => res.json()).then(item => {setweatherOne(item)}); 
            fetch(URL2).then(res => res.json()).then(item => {setweatherTwo(item)});
        }
      
      useEffect(() => {
            getCurrentLocationWeather();
            getWeather();
            console.log(weatherOne);
            console.log(weatherTwo);
      }, [ getCurrentLocationWeather, getWeather])


      const searchCity = (e) => {
            setcityName(e.target.value)
      }

      const handleSearchFunct = () => {
            sethandleSearch(cityName)
            console.log(handleSearch);
      }

  return (
    <div className=''>
                  <div className="text w-full md:h-screen  py-10 bag"  style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?landscape)` , backgroundSize:"cover"}}>

                        <div className="text w-2/3 rounded-lg shadow-xl bg-white mx-auto flex focus:border-blue-400">
                              <input type="search" onChange={searchCity} value={cityName} className="w-full rounded-tl-lg rounded-bl-lg  border-none pl-10" />
                              <button onClick={ handleSearchFunct} className="text text-center bg-blue-300 w-1/5 rounded-tr-lg rounded-br-lg border-none ">
                                    <FaSearch className='text-end  w-1/2 mx-auto'/> 
                              </button>
                        </div>

                      
                        {/* <img src={img} alt="" className="text" /> */}


                        <div className="text-black grid px-10">
                                 {/* Weather Two */}
                              <div className="text">
                                    <div className="text-white mt-14 py-8 px-3 w-3/4 md:w-1/2 mx-auto bg-blue-600/50 text-center">
                                          <span className="text-lg md:text-xl "> {weatherTwo? "Country/City": ""}</span>
                                          <div className="text text-2xl md:text-6xl  my-5 bg-green-500/80"> {weatherTwo? weatherTwo.sys.country: "Loading..."}</div>
                                          <div className="text  text-4xl md:text-8xl font-bold">
                                                 {weatherTwo? weatherTwo.name: "Loading..."}
                                          </div>
                                     </div>
                                    <div className="text-black mt-20 text-xl grid  md:flex mx-auto gap-8 md:gap-0  w-full  ">
                                          {/* first div for  weather two  */}
                                    <div className="text-white mx-auto md:mx-0 w-3/4 md:w-1/3  bg-cyan-500/70">
                                          <div className="text py-4 bg-orange-600/70">
                                                <span className="text-lg md:text-xl "> {weatherTwo? "Feels Like": ""}</span>
                                                <div className="text-2xl font-bold">  {weatherTwo? Math.round(weatherTwo.main.feels_like) : "Loading..."} <span className="text font-normal">°C</span></div>
                                          </div>
                                          <div className="text py-4 w-full">
                                                <span className="text-lg md:text-xl"> {weatherTwo? "Maximum Temperature": ""}</span>
                                                <div className="text font-bold">  {weatherTwo?  Math.round(weatherTwo.main.temp_max): "Loading..."}  <span className="text font-normal">°C</span></div>
                                          </div>
                                          <div className="text py-4 w-full">
                                                <span className="text-lg md:text-xl"> {weatherTwo? "Minimum Temperature": ""}</span>
                                                <div className="text font-bold">  {weatherTwo?  Math.round(weatherTwo.main.temp_min): "Loading..."}  <span className="text font-normal">°C</span></div>
                                          </div>
                                          
                                    </div>
                                   
                                        {/* secod div for weather Two  */}
                                    <div className="text-white mx-auto md:mx-20 w-3/4 md:w-1/3  bg-orange-600/70">
                                    <div className="text py-4 bg-cyan-600/70">
                                                <span className="text-lg md:text-xl "> {weatherTwo? "Humidity": ""}</span>
                                                <div className="text  md:text-xl font-bold">  {weatherTwo? weatherTwo.main.humidity: "Loading..."} <span className="text font-normal">g/m <sup className="text">-3</sup> </span></div>
                                          </div>
                                          <div className="text py-4 w-full">
                                                <span className="text-lg md:text-xl">{weatherTwo? "Pressure": ""}</span>
                                                <div className="text font-bold">  {weatherTwo? weatherTwo.main.pressure: "Loading..."}  <span className="text font-normal">pa</span></div>
                                          </div>
                                          <div className="text py-4 w-full">
                                                <span className="text-lg md:text-xl"> {weatherTwo? weatherTwo.weather[0].main: ""}</span>
                                                <div className="text font-bold">  {weatherTwo? weatherTwo.weather[0].description: "Loading..."}</div>
                                          </div>
                                          <div className="text"></div>
                                          <div className="text"></div>
                                          <span className="text"></span>
                                          <span className="text"></span>
                                    </div>

                               {/* third div for weather Two */}
                               <div className="text-white mx-auto md:mx-0 w-3/4 md:w-1/3  bg-cyan-500/70">
                                          <div className="text py-4 bg-orange-600/70">
                                                <span className="text-lg md:text-xl "> {weatherTwo? "Wind Speed": ""}</span>
                                                <div className="text-2xl font-bold">  {weatherTwo? Math.round(weatherTwo.wind.speed) : "Loading..."} <span className="text font-normal">kmh <sup className="text">-1</sup></span></div>
                                          </div>
                                          <div className="text py-4 w-full">
                                                <span className="text-lg md:text-xl"> {weatherTwo? "Gust": ""}</span>
                                                <div className="text font-bold">  {weatherTwo?  Math.round(weatherTwo.wind.gust): "Loading..."} <span className="text font-normal">kmh <sup className="text">-1</sup></span></div>
                                          </div>
                                          <div className="text py-4 w-full">
                                                <span className="text-lg md:text-xl"> {weatherTwo? "Wind Degree": ""}</span>
                                                <div className="text font-bold">  {weatherTwo?  Math.round(weatherTwo.wind.deg): "Loading..."}  <span className="text font-normal">°</span></div>
                                          </div>
                                    </div>
                               </div>    
                              </div>
                              
                        </div>
                  </div>
                 
    </div>
  )
}

export default WeatherApp