import { useState, useEffect } from "react";
import LocationSearchInput from "./LocInput";

const Sidebar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const getCountries = async () => {
    
    return;
  };

  const fetchWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid="087b1487a92f22b3f24f1a9440660a25"`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // 473bee0ee0cb4dd89bb7f9b0373c3b90

//   useEffect(() => {
//     getCountries();
//   }, []);

  return (
    <div className="sidebar bg-color-primary-light w-full sticky flex flex-col min-h-80vh px-[11px] py-[18px] lg:max-w-[400px] md:p-[10px]">
      <aside
        className={`bg-color-primary-light z-50 top-0 left-0 h-screen w-full flex flex-col px-2 py-[10px] md:px-[47px] duration-300 translate-x-0 xl:absolute xl:px-[46px] searchbar ${
          searchBar ? "block" : "hidden"
        }`}
      >
        <button
          className="text-color-white self-end"
          id="close-btn"
          onClick={() => setSearchBar(false)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="h-[32px] w-[32px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <div className="mt-[38px] mb-[28px] flex flex-row items-center gap-3">
          <div className="border-[1px] border-silver w-full h-[48px] flex flex-row items-center px-3 gap-[13px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-[24px] w-[24px]  text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input
              placeholder="Search Location"
              className="text-color-white text-base w-full font-small bg-color-primary-light hover:right-0 focus:ring-0 focus:outline-none hover:outline-none"
              type="text"
              id=""
            />
          </div>
          <button
            className="bg-[#3C47E9] disabled:bg-[#5D64CA] text-white hover:translate-y-2 duration-200 h-[48px] w-[86px] text-base font-semibold"
            id=""
          >
            Search
          </button>
        </div>
      </aside>

      <div className="sidebar-header">
        <div className="bg-color-white rounded-md text-lg px-3 py-2 text-gray-300 hover:translate-y-2 duration-75 shadow-xl">
          {/* button for toggling/open sidebar */}
          <button className="toggle-btn" onClick={() => setSearchBar(true)}>
            Search for places
          </button>
        </div>
        <button className="compass-btn bg-color-white rounded-xl p-1 text-gray-300 shadow-xl">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="2 2 20 20"
            className="h-[22px] w-[22px]"
            height="1em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-col max-h-fit">
        <img
          src="/images/Cloud-background.png"
          alt="cloud bg"
          loading="lazy"
          width="684"
          height="376"
          className="absolute top-[60px] left-0 w-full bg-no-repeat bg-cover  opacity-10"
        ></img>

        <div className="self-center mt-[46px] mb-[10px] 2xl-mt-[76px]">
          <img
            src="/images/clear.png"
            alt="weather"
            className="weather-icon"
            width="150"
            height="167"
          />
        </div>

        <LocationSearchInput />

        <div className="temperature mt-5 text-white flex justify-center">
          <p id="temp" className="text-[90px] md:text-[120px]">
            -10
          </p>
          <span className="temp-unit text-[40px] mt-6">°C</span>
        </div>

        <div className="temp-description">
          <p
            className=" text-gray-400 font-semibold text-2xl"
            id="weather-type"
          >
            Clear Sky
          </p>
        </div>

        <div
          className="mt-10 text-gray-400 flex flex-row justify-center gap-2"
          id="date-time"
        >
          <span>Monday</span>
          <span>•</span>
          <span>11:40PM</span>
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
          <span className="font-semibold">Ilorin</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
