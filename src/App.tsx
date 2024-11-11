import React from 'react';
import './assets/css/App.css';
import WeatherInfo from './components/main/WeatherInfo';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <WeatherInfo></WeatherInfo>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
