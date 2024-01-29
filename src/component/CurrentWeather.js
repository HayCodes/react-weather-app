import "../../src/index.css";

const CurrentWeather = () => {
    return ( 
        <div className="flex flex-col max-h-fit">
        <img
          src="/images/Cloud-background.png"
          alt="cloud bg"
          loading="lazy"
          width="684"
          height="376"
          className="absolute top-[60px] left-0 w-full bg-no-repeat bg-cover  opacity-10 bg-center"
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

        <div className="temperature mt-5 text-white flex justify-center">
          <p id="temp" className="text-[90px] md:text-[120px]">
            40
          </p>
          <span className="temp-unit text-[40px] mt-6">°C</span>
        </div>

        <div className="temp-description">
          <p className=" text-gray-400 font-semibold text-2xl text-center">
            Clear
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
          <span className="font-semibold">Lagos</span>
        </div>
      </div>
     );
}
 
export default CurrentWeather;