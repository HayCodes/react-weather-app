import Sidebar from './component/Sidebar';
import Main from './component/Main';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import CurrentWeather from './component/CurrentWeather';
import Forecast from './component/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App flex flex-col md:flex-row lg:flex-row min-h-screen">
      <div className="sidebar bg-color-primary-light w-full flex flex-col min-h-80vh px-[11px] py-[18px] lg:max-w-[400px] md:p-[10px] top-0 left-0 md:sticky">
        <Sidebar onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>

      <div className="overflow-scroll overflow-x-hidden w-full flex flex-col xl:px-[100px] xl:h-screen bg-color-primary-dark">
        {forecast && <Forecast  data={forecast} /> }
        {currentWeather && <Main data={currentWeather} />}
      </div>
    </div>
  );
}

export default App;
