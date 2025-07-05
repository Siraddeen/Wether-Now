import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-rose-300 shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-bold text-black">{weather.name}</h2>
      <p className="text-gray-700">Temp: {weather.main.temp}°C</p>
      <p className="text-gray-700">Weather: {weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        className="w-16 h-16 mt-2"
      />
    </div>
  );
};

export default WeatherCard;
