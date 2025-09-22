# 🌤️ Weather App

A fully responsive and dynamic **Weather Forecasting Web App** built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**, which fetches real-time data using the **OpenWeatherMap API**. This application allows users to search for any city and get current weather, air quality, and a 5-day forecast.

---

## 🔍 Features

- 🔎 **City-Based Search**
  - Users can enter any city name to fetch live weather data.
- 🌡️ **Current Weather Conditions**
  - Temperature, Humidity, Pressure, Visibility, Feels Like temperature, and Sky Description.
- 🌅 **Sunrise & Sunset Times**
- 🌫️ **Air Quality Index (AQI)**
  - Includes CO, SO₂, O₃, and NO₂ levels.
- 📆 **5-Day Weather Forecast**
  - Displays weather predictions for the next 5 days at 3-hour intervals.
- 📱 **Responsive Design**
  - Seamless experience across mobile, tablet, and desktop devices.

---

## 🌐 APIs Used

This app uses **OpenWeatherMap APIs** to fetch weather and air quality data.

### 🔹 Current Weather Data

- [`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=034acc3d0d1d1ec4bf80789e9bb28d84&units=metric`](https://api.openweathermap.org/data/2.5/weather?q=London&appid=034acc3d0d1d1ec4bf80789e9bb28d84&units=metric)

### 🔹 Air Pollution Data

- [`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=034acc3d0d1d1ec4bf80789e9bb28d84`](https://api.openweathermap.org/data/2.5/air_pollution?lat=17.6868&lon=83.2185&appid=034acc3d0d1d1ec4bf80789e9bb28d84)

### 🔹 5-Day Forecast (3-Hour Intervals)

- [`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=034acc3d0d1d1ec4bf80789e9bb28d84&units=metric`](https://api.openweathermap.org/data/2.5/forecast?lat=17.6868&lon=83.2185&appid=034acc3d0d1d1ec4bf80789e9bb28d84&units=metric)

> 🔐 **Note**: In your JavaScript code, dynamically replace `${cityName}`, `${lat}`, and `${long}` with the user's input and location data.

---

## 🛠️ Built With

- **HTML5** – Semantic markup
- **CSS3** – Styling and layout
- **JavaScript (Vanilla)** – Data fetching and dynamic UI
- **Bootstrap 5** – Responsive layout and utility classes
- **OpenWeatherMap API** – Real-time weather and air quality data

---

## 💻 UI Preview

> The interface features modern cards showing:

- 📍 Location-based weather
- ☁️ Sky description
- 🌡️ Real-time weather metrics
- 🌫️ AQI with pollutant values
- 📅 5-day forecast cards
- 🌅 Sunrise and sunset times

---

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
