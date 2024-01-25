const Main = () => {
    return (
        <div className="overflow-scroll w-full flex flex-col xl:px[100px] xl:h-screen bg-color-primary-dark">
           <div className="flex flex-row items-center justify-end gap-3 mt-[20px] px-10 xl:px-">
                <button type="button" className="rounded-full h-[40px] w-[40px]font-bold text-lg text-white px-3 py-0 bg-[#A09FB1]">
                °C
                </button>
                <button type="button" className="rounded-full h-[40px] w-[40px]font-bold text-lg px-3 py-0 text-white bg-[#585676]">
                °F
                </button>
            </div>     

            <div className="px-10 py-9 grid grid-cols-2 gap-[22px] lg:grid-cols-4 xl:grid-cols-5 xl:px-8">
                
                    <div className="bg-color-primary-light py-[18px] px-2 flex flex-col justify-center items-center cursor-pointer duration-300 hover:translate-y-2">
                        <h4 className="text-color-white text-base font-medium leading-normal">Tomorrow</h4>
                        <img src="/images/clear.png" alt="" loading="lazy" className="mt-[10px] w-[66px] h-[62px]" height={"62"} width={"56.44"} />
                        <div className="text-center flex flex-row gap-4 mt-[31px]">
                            <span className="text-color-white font-medium text-base">
                                20<span>°</span>C
                            </span>
                            <span className="text-[#A09FB1] font-medium text-base">
                                36<span>°</span>C
                            </span>
                        </div>
                    </div>

                    <div className="bg-color-primary-light py-[18px] px-2 flex flex-col justify-center items-center cursor-pointer duration-300 hover:translate-y-2">
                        <h4 className="text-color-white text-base font-medium leading-normal">Tomorrow</h4>
                        <img src="/images/fog.png" alt="" loading="lazy" className="mt-[10px] w-[66px] h-[62px]" height={"62"} width={"56.44"} />
                        <div className="text-center flex flex-row gap-4 mt-[31px]">
                            <span className="text-color-white font-medium text-base">
                                20<span>°</span>C
                            </span>
                            <span className="text-[#A09FB1] font-medium text-base">
                                36<span>°</span>C
                            </span>
                        </div>
                    </div>

                    <div className="bg-color-primary-light py-[18px] px-2 flex flex-col justify-center items-center cursor-pointer duration-300 hover:translate-y-2">
                        <h4 className="text-color-white text-base font-medium leading-normal">Tomorrow</h4>
                        <img src="/images/haze.png" alt="" loading="lazy" className="mt-[10px] w-[66px] h-[62px]" height={"62"} width={"56.44"} />
                        <div className="text-center flex flex-row gap-4 mt-[31px]">
                            <span className="text-color-white font-medium text-base">
                                20<span>°</span>C
                            </span>
                            <span className="text-[#A09FB1] font-medium text-base">
                                36<span>°</span>C
                            </span>
                        </div>
                    </div>

                    <div className="bg-color-primary-light py-[18px] px-2 flex flex-col justify-center items-center cursor-pointer duration-300 hover:translate-y-2">
                        <h4 className="text-color-white text-base font-medium leading-normal">Tomorrow</h4>
                        <img src="/images/cloudy.png" alt="" loading="lazy" className="mt-[10px] w-[66px] h-[62px]" height={"62"} width={"56.44"} />
                        <div className="text-center flex flex-row gap-4 mt-[31px]">
                            <span className="text-color-white font-medium text-base">
                                20<span>°</span>C
                            </span>
                            <span className="text-[#A09FB1] font-medium text-base">
                                36<span>°</span>C
                            </span>
                        </div>
                    </div>

                    <div className="bg-color-primary-light py-[18px] px-2 flex flex-col justify-center items-center cursor-pointer duration-300 hover:translate-y-2">
                        <h4 className="text-color-white text-base font-medium leading-normal">Tomorrow</h4>
                        <img src="/images/clear.png" alt="" loading="lazy" className="mt-[10px] w-[66px] h-[62px]" height={"62"} width={"56.44"} />
                        <div className="text-center flex flex-row gap-4 mt-[31px]">
                            <span className="text-color-white font-medium text-base">
                                20<span>°</span>C
                            </span>
                            <span className="text-[#A09FB1] font-medium text-base">
                                36<span>°</span>C
                            </span>
                        </div>
                    </div>
            </div>
            
            <div className="px-[21px] mt-[10px] mb-[8px] xl:px-8 xl:mt-[21px] xl:mb-[12px]">
                <h3 className="text-color-white text-2xl font-bold mb-[10px]"> Today's Highlights</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Wind Status</h4>
                        <div className="flex flex-row items-center">
                            <h1 className="text-color-white font-bold text-[44px]">0</h1>
                            <span className="text-color-white text-4xl">mps</span>
                        </div>
                        <div className="flex flex-row items-center gap-[5px]">
                            <button className="w-[29px] h-[29px] rounded-full bg-[#A09FB1] flex items-center justify-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-[17px] h-[17px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>
                            </button>
                            <span className="text-sm font-medium leading-normal text-color-white">WVW</span>
                        </div>
                    </div>

                    <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Humidity</h4>
                        <div className="flex flex-row items-center">
                            <h1 className="text-color-white font-bold text-[44px]">9%</h1>
                        </div>
                        <div className="w-[80%]">
                            <div className="flex flex-row justify-between text-[#A09FB1] text-xs font-bold mb-1">
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </div>
                            <div className="w-full h-[8px] bg-color-white rounded-[80px]">
                                <div className="h-full bg-[#FFEC65] rounded-[80px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                     <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Visibility</h4>
                        <div className="flex flex-row items-center">
                            <h1 className="text-color-white font-bold text-[44px]">6,213</h1>
                            <span className="text-color-white text-4xl">miles</span>
                        </div>
                     </div>  
                     <div className="bg-color-primary-light flex flex-col justify-center items-center p-[22px]">
                        <h4 className="text-color-white font-medium">Air Pressure</h4>
                        <div className="flex flex-row items-center mt-[10px]">
                            <h1 className="text-color-white font-bold text-[44px]">1013</h1>
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