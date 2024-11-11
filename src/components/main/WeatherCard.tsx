import React from "react";
import Spinner from "../spinner/Spinner";
import { useTranslations } from "../hooks/useTranslations";
import { Card, CardCity, CardContainer, CardDate, CardDescription, CardNameCity, CardNameContainer, CardTempText, CardText } from "./CardStyles";

interface WeatherInfo {
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

interface ForecastInfo {

}

interface WeatherCardProps {
  showInfo: boolean;
  loadingInfo: boolean;
  weather: WeatherInfo | null;
  forecast: ForecastInfo | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ showInfo, loadingInfo, weather, forecast }) => {

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;

  let url = "";
  let iconUrl = "";

  const t = useTranslations();


  if (loadingInfo) {
    return <Spinner />
  }

  if (showInfo) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather?.weather[0].icon + '.png';

  }


  return (
    <Card>

      {
        showInfo === true ? (
          <CardContainer>
            <CardCity>
              <CardNameContainer>
                <CardNameCity>{weather?.name}</CardNameCity>
                <CardDate>{date}</CardDate>
              </CardNameContainer>
              <CardTempText>{((weather?.main.temp ?? 0) - 273.15).toFixed(0)}°C</CardTempText>
            </CardCity>
            <CardDescription className="rigth">
              <div className="card--container__time">
                <CardText className="card--time__name">
                  <img src={iconUrl} alt="icon" className="card--icon__img" />
                  {t.card.description}: {weather?.weather[0].description}
                </CardText>
              </div>
              <div>
                <CardText className="card--range__name">{t.card.max}: {((weather?.main.temp_max ?? 0) - 273.15).toFixed(0)}°C</CardText>
                <CardText className="card--range__name">{t.card.min}: {((weather?.main.temp_min ?? 0) - 273.15).toFixed(0)}°C</CardText>
                <CardText>{t.card.feels}: {((weather?.main.feels_like ?? 0) - 273.15).toFixed(0)}°C</CardText>
              </div>
            </CardDescription>
          </CardContainer>
        ) : (
          <h2 className="card--noinfo">{t.card.text}</h2>
        )
      }

    </Card>
  );
};

export default WeatherCard;