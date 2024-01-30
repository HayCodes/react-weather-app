import "../../src/index.css";
import {useGeolocated} from "react-geolocated"
import { WEATHER_API_KEY, WEATHER_API_URL } from '../api';
import {useState, useEffect} from "react"

const date = new Date();

const dateOptions = {
  weekday: 'long',
  day: 'numeric',
  year: 'numeric'
};

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit'
}

const formattedDate = date.toLocaleDateString('en-US', dateOptions);
const formattedTime = date.toLocaleTimeString('en-US', timeOptions);



const CurrentWeather = ({data}) => {


  const {coords} = useGeolocated();

   
  useEffect(() => {
  
  const fetchWeatherData = async () => {
    const apiKey = {WEATHER_API_KEY};
    const url = {WEATHER_API_URL};
    const response = await fetch(url);
    const data =  await response.json();
    return data;
  }
  },[])

      const [weatherData, setWeatherData] = useState(null)
      
    return ( 
        <div className="flex flex-col max-h-fit">
        <img
          src="/images/Cloud-background.png"
          alt="cloud bg"
          loading="lazy"
          width="684"
          height="376"
          className="absolute top-[60px] left-0 w-full bg-no-repeat bg-cover  opacity-5 bg-center"
        ></img>

        <div className="self-center mt-[46px] mb-[10px] 2xl-mt-[76px]">
          <img
            src={`/icons/${data.weather[0].icon}.png`}
            alt="weather"
            className="bounce"
            width="150"
            height="167"
          />
        </div>

        <div className="temperature mt-5 text-white flex justify-center">
          <p id="temp" className="text-[90px] md:text-[120px]">
            {Math.round(data.main.temp)}
          </p>
          <span className="temp-unit text-[40px] mt-6">°C</span>
        </div>

        <div className="temp-description">
          <p className=" text-gray-400 font-semibold text-2xl text-center capitalize">
            {data.weather[0].description}
          </p>
        </div>

        <div
          className="mt-10 text-gray-400 flex flex-row justify-center gap-2"
          id="date-time"
        >
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{formattedTime}</span>
        </div>

        <div className="flex flex-row gap-2 justify-center mt-8 text-gray-400">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            className="h-[22px] w-[22px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
          </svg>
          <span className="font-semibold">{data.city} </span>
        </div>
      </div>
     );
}
 
export default CurrentWeather;