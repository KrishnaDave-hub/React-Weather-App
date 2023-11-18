import React, { useEffect, useState } from "react";

const WeatherComponent = ({ weatherData }) => {
    const [date, setDate] = useState("none");
    const onDateChange = (event) => {
       setDate(event.target.value);
    };
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toDateString();
    };

    return(
        <div className='weather grid grid-cols-5 gap-4'>
            <div className="max-w-sm mt-6">
                <div className='datePart'>
                    <span>Select Date:</span>
                    <input type="date" name="" class="date" value={date} onChange={onDateChange}/>
                </div>
                <div className="mt-3">
                    <div className="labels">
                        <div className="mb-2">High Temperature</div>
                        <div className="mb-2">Low Temperature</div>
                        <div className="mb-2">Humidity</div>
                        <div className="mb-2">Sunrise Time</div>
                        <div className="mb-2">Sunset Time</div>
                    </div>      
                </div>
            </div>
            {[...Array(4)].map((_, index) => (
                <div key={index} className="max-w-sm">
                    <div className='date'>
                        {formatDate(weatherData.dt)}
                    </div>
                    <div className="backColor weatherCard shadow-lg">
                        <div className="divide-gray-50 divide-y divide-slate-700 ">
                            <div className="head">
                                <img src='/sunny.png' alt="" />
                                <span>Sunny</span>    
                            </div>  
                            <div className="px-6 py-4 forcasting">
                                <div className="font-bold text-xl mb-2">{weatherData.main.temp_min}</div>
                                <div className="font-bold text-xl mb-2">{weatherData.main.temp_max}</div>
                                <div className="font-bold text-xl mb-2">{weatherData.main.humidity}%</div>
                                <div className="font-bold text-xl mb-2">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
                                <div className="font-bold text-xl mb-2">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</div>
                            </div>
                        </div>              
                    </div>
                </div>
            ))}
        </div>
    )
}
export default WeatherComponent