import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useTranslations } from "../hooks/useTranslations";
import Sidebar from "./Search";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
}

interface ForecastData {}

const WeatherInfo: React.FC = () => {
  const t = useTranslations();
  const weatherUrlBase = `https://api.openweathermap.org/data/2.5/weather?appid=175124ea4f8fff36c0f391e54f00a2cc&lang=${t.url}`;
  const cityUrl = "&q=";
  const forecastUrlBase = `https://api.openweathermap.org/data/2.5/forecast?appid=175124ea4f8fff36c0f391e54f00a2cc&lang=${t.url}`;

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  const fetchWeatherData = async (loc: string) => {
    setLoading(true);

    const weatherUrl = weatherUrlBase + cityUrl + loc;

    try {
      const weatherResponse = await fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error("Weather data not available");
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setInfo(false);
      return;
    }

    const forecastUrl = forecastUrlBase + cityUrl + loc;

    try {
      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) throw new Error("Forecast data not available");
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);
      setInfo(true);
    } catch (error) {
      console.error(error);
      setInfo(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [t.url, location]);

  const getLocation = (loc: string) => {
    setLocation(loc);
    fetchWeatherData(loc);
  };

  return (
    <React.Fragment>
      <Sidebar newLocation={getLocation} />
      <WeatherCard
        showInfo={info}
        loadingInfo={loading}
        weather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
};

export default WeatherInfo;
