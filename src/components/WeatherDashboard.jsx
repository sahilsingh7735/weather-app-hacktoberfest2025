'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle';

export default function WeatherDashboard() {
  const [city, setCity] = useState('Delhi');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);

console.log("weatherData",weatherData)

  const convertTemp = (temp, toCelsius) => {
    if (toCelsius) {
      return temp;
    }
    return (temp * 9/5) + 32;
  };

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );
      const weatherResult = await weatherResponse.json();
      
      if (weatherResponse.ok) {
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherResult.coord.lat}&lon=${weatherResult.coord.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        const forecastResult = await forecastResponse.json();
        
        setWeatherData({
          name: weatherResult.name,
          temp: Math.round(weatherResult.main.temp),
          high: Math.round(weatherResult.main.temp_max),
          low: Math.round(weatherResult.main.temp_min),
          condition: weatherResult.weather[0].main,
          description: weatherResult.weather[0].description,
          feelsLike: Math.round(weatherResult.main.feels_like),
          humidity: weatherResult.main.humidity,
          windSpeed: weatherResult.wind.speed,
          sunrise: new Date(weatherResult.sys.sunrise * 1000),
          sunset: new Date(weatherResult.sys.sunset * 1000),
        });

        const next24Hours = forecastResult.list.slice(0, 7).map(item => ({
          time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' }),
          temp: Math.round(item.main.temp),
          icon: item.weather[0].icon,
          condition: item.weather[0].main
        }));
        
        setHourlyForecast(next24Hours);
        setCity(weatherResult.name);
      } else {
        setError('City not found. Please try another location.');
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Error fetching weather data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeatherData(searchQuery);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  if (!weatherData) return <div className="min-h-screen bg-[#0a0f1f] text-white p-6 flex items-center justify-center">Loading...</div>;

  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const date = currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <span className="text-lg font-semibold">Weather Data</span>
          </div>
          <form onSubmit={handleSearch} className="flex-1 mx-8">
            <Input 
              type="text" 
              placeholder="Search City...."
              className="bg-[#1a1f2e] border-none w-full max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a1f2e] rounded-full" />
            <span>User Name</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 bg-[#1a1f2e] rounded-xl p-4">
            <div className="flex flex-col items-center gap-6">
              <Button className="p-3 bg-purple-600 rounded-lg">📍</Button>
              <Button className="p-3 hover:bg-[#2a2f3e] rounded-lg">📊</Button>
              <Button className="p-3 hover:bg-[#2a2f3e] rounded-lg">🌡️</Button>
              <Button className="p-3 hover:bg-[#2a2f3e] rounded-lg">🎯</Button>
              <Button className="p-3 hover:bg-[#2a2f3e] rounded-lg">⚙️</Button>
            </div>
          </div>

          {/* Main Weather Display */}
          <div className="col-span-11">
            <div className="grid grid-cols-3 gap-6">
              {/* Current Weather */}
              <div className="col-span-2 bg-[#1a1f2e] rounded-xl p-6">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full inline-block mb-4">
                      {city}
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{day}</h2>
                    <p className="text-gray-400">{date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Toggle
                      pressed={isCelsius}
                      onPressedChange={setIsCelsius}
                      className="bg-gray-700 data-[state=on]:bg-purple-600"
                      aria-label="Toggle temperature unit"
                    >
                      {isCelsius ? '°C' : '°F'}
                    </Toggle>
                  </div>
                </div>

                <div className="flex items-center gap-20">
                  <div>
                    <div className="text-7xl font-bold mb-4">
                      {Math.round(convertTemp(weatherData.temp, isCelsius))}°{isCelsius ? 'C' : 'F'}
                    </div>
                    <div className="text-gray-400">
                      High: {Math.round(convertTemp(weatherData.high, isCelsius))}° 
                      Low: {Math.round(convertTemp(weatherData.low, isCelsius))}°
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-2">
                      <img 
                        src={`https://openweathermap.org/img/wn/${hourlyForecast[0]?.icon}@4x.png`}
                        alt={weatherData.condition}
                        className="w-32 h-32"
                      />
                    </div>
                    <div className="text-2xl capitalize">{weatherData.description}</div>
                    <div className="text-gray-400">
                      Feels Like {Math.round(convertTemp(weatherData.feelsLike, isCelsius))}°
                    </div>
                  </div>
                </div>

                {/* Hourly Forecast */}
                <div className="mt-8">
                  <div className="text-gray-400 mb-4">Today / Week</div>
                  <div className="flex justify-between">
                    {hourlyForecast.map((hour, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-2">{hour.time}</div>
                        <img 
                          src={`https://openweathermap.org/img/wn/${hour.icon}.png`}
                          alt={hour.condition}
                          className="w-10 h-10 mx-auto mb-2"
                        />
                        <div>{Math.round(convertTemp(hour.temp, isCelsius))}°</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Panels */}
              <div className="space-y-6">
                {/* Today Highlight */}
                <div className="bg-[#1a1f2e] rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Today Highlight</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#262b3c] p-4 rounded-xl">
                      <div className="text-gray-400 mb-2">UV Index</div>
                      <div className="text-4xl">☀️</div>
                    </div>
                    <div className="bg-[#262b3c] p-4 rounded-xl">
                      <div className="text-gray-400 mb-2">Wind Status</div>
                      <div className="text-2xl">{weatherData.windSpeed} m/s</div>
                    </div>
                    <div className="bg-[#262b3c] p-4 rounded-xl">
                      <div className="text-gray-400 mb-2">Sunrise & Sunset</div>
                      <div>🌅 {weatherData.sunrise.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
                      <div>🌇 {weatherData.sunset.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
                    </div>
                    <div className="bg-[#262b3c] p-4 rounded-xl">
                      <div className="text-gray-400 mb-2">Humidity</div>
                      <div className="text-2xl">{weatherData.humidity}%</div>
                    </div>
                  </div>
                </div>

                {/* Other Cities */}
                <div className="bg-[#1a1f2e] rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Other Cities</h3>
                    <Button className="text-gray-400">Show All</Button>
                  </div>
                  <div className="space-y-4">
                    {['New York', 'London', 'Tokyo', 'Dubai'].map((otherCity, index) => (
                      <button
                        key={index}
                        className="w-full text-left hover:bg-[#262b3c] p-2 rounded-lg transition-colors"
                        onClick={() => {
                          setSearchQuery(otherCity);
                          fetchWeatherData(otherCity);
                        }}
                      >
                        <div className="font-medium">{otherCity}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}