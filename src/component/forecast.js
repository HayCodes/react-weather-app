const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forecastDays);

    return (
        <div className="">
            <div className="flex flex-row items-center justify-end gap-3 mt-[20px] px-10 xl:px-">
                <button type="button" className="rounded-full h-[40px] w-[40px]font-bold text-lg text-white px-3 py-0 bg-[#A09FB1]">
                    °C
                </button>
                <button type="button" className="rounded-full h-[40px] w-[40px]font-bold text-lg px-3 py-0 text-white bg-[#585676]">
                    °F
                </button>
            </div>

            <div>
                {data.list.splice(0, 5).map((item, idx) => (
                    <div className="px-10 py-9 grid grid-cols-2 gap-[22px] lg:grid-cols-4 xl:grid-cols-5 xl:px-8">
                        <div className="bg-color-primary-light py-[18px] px-2 flex flex-col justify-center items-center cursor-pointer duration-300 hover:translate-y-2">
                            <h4 className="text-color-white text-base font-medium leading-normal">{forecastDays[idx]}</h4>

                            <img src={`icons/${item.weather[0].icon}.png`} alt="weather" loading="lazy" className="mt-[10px] w-[66px] h-[62px]" height={"62"} width={"56.44"} />

                            <div className="text-center flex flex-row gap-4 mt-[31px]">
                                <span className="text-color-white font-medium text-base">
                                    {Math.round(item.main.temp_min)}<span>°</span>C
                                </span>
                                <span className="text-[#A09FB1] font-medium text-base">
                                    {Math.round(item.main.temp_max)}<span>°</span>C
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;