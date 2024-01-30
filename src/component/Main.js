const Main = ({ data }) => {
    
    const width = data.main.humidity + '%';

    return (
        <div className="">
            <div className="px-[21px] mt-[10px] mb-[8px] xl:px-8 xl:mt-[21px] xl:mb-[12px]">
                <h3 className="text-color-white text-2xl font-bold mb-[10px] text-left "> Today's Highlights</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Wind Status</h4>
                        <div className="flex flex-row items-center">
                            <h1 className="text-color-white font-bold text-[44px]">{data ? data.wind.speed : ""}</h1>
                            <span className="text-color-white text-4xl">mps</span>
                        </div>
                        <div className="flex flex-row items-center gap-[5px]">
                            <button className="w-[29px] h-[29px] rounded-full bg-[#A09FB1] flex items-center justify-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-[17px] h-[17px] arrow-rotate" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>
                            </button>
                            <span className="text-sm font-medium leading-normal text-color-white">WVW</span>
                        </div>
                    </div>

                    <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Humidity</h4>
                        <div className="flex flex-row items-center">
                            <h1 className="text-color-white font-bold text-[44px]">{data ? data.main.humidity : ""}%</h1>
                        </div>
                        <div className="w-[80%]">
                            <div className="flex flex-row justify-between text-[#A09FB1] text-xs font-bold mb-1">
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </div>
                            <div className="w-full h-[8px] bg-color-white rounded-[80px]">
                                <div className="h-full bg-[#FFEC65] rounded-[80px" style={{width: width}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                    <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Visibility</h4>
                        <div className="flex flex-row items-center">
                            <h1 className="text-color-white font-bold text-[44px]">{data ? data.visibility : ""}</h1>
                            <span className="text-color-white text-4xl">miles</span>
                        </div>
                    </div>
                    <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Air Pressure</h4>
                        <div className="flex flex-row items-center mt-[10px]">
                            <h1 className="text-color-white font-bold text-[44px]">{data ? data.main.pressure : ""}</h1>
                            <span className="text-color-white text-4xl">mb</span>
                        </div>
                    </div>
                </div>
                <h6 className="text-center text-[#A09FB1] mt-[50px]">
                    created by <a href="http://" target="_blank" rel="noreferrer" className="font-bold text-sm underline">Yusuf Hussein</a> - devChallenges.io
                </h6>
            </div>

        </div>
    );
}

export default Main;