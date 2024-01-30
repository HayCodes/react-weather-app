import { useState, useEffect } from "react";
// import axios from 'axios'; what i used previously
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../src/api";


const Sidebar = ({ onSearchChange }) => {
  const [searchBar, setSearchBar] = useState(false);

  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  // const handleLocationClick = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let lat = position.coords.latitude;
  //       let lon = position.coords.longitude;
  //       console.log("Latitude:", lat)
  //       console.log("Longitude:", lon)
  //     });
  //   } else {
  //     console.error('Geolocation is not supported by this browser.')
  //   }
  // }

  return (
      <div className="">
      <aside
        className={`bg-color-primary-light z-99 top-0 left-0 h-screen w-full flex flex-col px-2 py-[10px] md:px-[47px] duration-300 translate-x-0 xl:absolute xl:px-[46px] searchbar ${searchBar ? "block" : "hidden"
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
          <AsyncPaginate
            placeholder="Search Location"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            className="text-color-white text-base w-full font-small bg-color-primary-light hover:right-0 focus:ring-0 focus:outline-none hover:outline-none"
          />
          {/* </div> */}
          <button
            className="bg-[#3C47E9] disabled:bg-[#5D64CA] text-white hover:translate-y-2 duration-200 h-[48px] w-[86px] text-base font-semibold"
            id=""
          >
            Search
          </button>
        </div>
      </aside>

      <div className="sidebar-header">
        <div className="bg-color-white rounded-md text-lg px-3 py-2 text-gray-300 hover:translate-y-2 duration-75 hover:bg-opacity-10 shadow-xl">
          {/* button for toggling/open sidebar */}
          <button className="toggle-btn" onClick={() => setSearchBar(true)}>
            Search for places
          </button>
        </div>
        <button className="compass-btn bg-color-white rounded-xl p-1 text-gray-300 shadow-xl hover:translate-y-2 duration-75 hover:bg-opacity-10">
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
      </div>
  );
};

export default Sidebar;
