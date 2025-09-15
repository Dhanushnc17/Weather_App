$(document).ready(function () {
  // On clicking search icon
  $(".searchIcon").on("click", fetchData);

  // On pressing Enter inside the input field
  $(".inputField").on("keydown", function (e) {
    if (e.key === "Enter") {
      fetchData();
    }
  });
});

// function dateFormat(timestamp) {
//   const date = new Date(timestamp * 1000);
//   return date.toLocaleString("en-IN", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, // Forces 12-hour format
//     timeZone: "Asia/Kolkata", // Ensures IST timezone
//   });
// }

function formatDateTime(timestamp) {
  const date = new Date(timestamp * 1000);

  const day = date.toLocaleString("en-IN", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });
  const dateStr = date.toLocaleString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  });
  const time = date.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  return [day, dateStr, time]; // returns a list
}

// Coming 5 days data container
function updateTempDayDate(data, item, labelDay) {
  const img = data.list[item].weather[0].main;
  const temp = data.list[item].main.temp;
  const timeStamp = data.list[item].dt;
  const dayDateTime = formatDateTime(timeStamp);
  const day = dayDateTime[0];
  const date = dayDateTime[1];

  $(`#image${labelDay}`)[0].src = `./images/${img}.png`;
  $(`#temp${labelDay}`)[0].innerText = temp;
  $(`#day${labelDay}`)[0].innerText = day;
  $(`#date${labelDay}`)[0].innerText = date;
}

// Today Container
function updateTodayData(data, item, labelDay) {
  const timeStamp = data.list[item].dt;
  const dayDateTime = formatDateTime(timeStamp);
  const time = dayDateTime[2];
  const img = data.list[item].weather[0].main;
  const temp = data.list[item].main.temp;
  $(`#todayTime${labelDay}`)[0].innerText = time;
  $(`#todayImage${labelDay}`)[0].src = `./images/${img}.png`;
  $(`#todayTemp${labelDay}`)[0].innerText = temp;
}

// Updating Aqi data
async function fetchAqiData(lat, long) {
  const requestAqiData = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=034acc3d0d1d1ec4bf80789e9bb28d84`
  );
  const formattedAqiData = await requestAqiData.json();
  console.log(formattedAqiData);
  const list = formattedAqiData.list[0].components;
  console.log(list);
  $("#co")[0].innerText = list.co;
  $("#so2")[0].innerText = list.so2;
  $("#o3")[0].innerText = list.o3;
  $("#no2")[0].innerText = list.no2;
  console.log("Aqi data : ", formattedAqiData);
}

// coming 5 days
async function fetchComingFiveDaysData(lat, long) {
  const requestComingFiveDays = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=034acc3d0d1d1ec4bf80789e9bb28d84&units=metric`
  );
  const formattedComingFiveDays = await requestComingFiveDays.json();
  console.log("Coming Five Days : ", formattedComingFiveDays);

  const responseHumidity = formattedComingFiveDays.list[0].main.humidity;
  const responsePressure = formattedComingFiveDays.list[0].main.pressure;
  const responseFeelsLike = formattedComingFiveDays.list[0].main.feels_like;
  const responseVisibility = formattedComingFiveDays.list[0].visibility;
  $("#humidity")[0].innerText = responseHumidity;
  $("#pressure")[0].innerText = responsePressure;
  $("#feelsLike")[0].innerText = responseFeelsLike;
  $("#visibility")[0].innerText = responseVisibility;
  6, 14, 22, 30, 37;
  updateTempDayDate(formattedComingFiveDays, 6, 1);
  updateTempDayDate(formattedComingFiveDays, 14, 2);
  updateTempDayDate(formattedComingFiveDays, 22, 3);
  updateTempDayDate(formattedComingFiveDays, 30, 4);
  updateTempDayDate(formattedComingFiveDays, 37, 5);

  updateTodayData(formattedComingFiveDays, 0, 1);
  updateTodayData(formattedComingFiveDays, 1, 2);
  updateTodayData(formattedComingFiveDays, 2, 3);
  updateTodayData(formattedComingFiveDays, 3, 4);
  updateTodayData(formattedComingFiveDays, 4, 5);
  updateTodayData(formattedComingFiveDays, 5, 6);

  // const firstDayDateTemp = formattedComingFiveDays.list[37].dt;
  // console.log(formatDateTime(firstDayDateTemp)[0]);
  // console.log(formatDateTime(firstDayDateTemp)[1]);
  // console.log(formatDateTime(firstDayDateTemp)[2]);
}

async function fetchData() {
  // alert("Fetching Data...!!");

  // Updating city name temp and sky desc
  const cityName = $(".inputField")[0].value;
  const requestData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=034acc3d0d1d1ec4bf80789e9bb28d84&units=metric`
  );
  const formattedData = await requestData.json();
  const responseCityName = formattedData.name;
  const responseTemp = formattedData.main.temp;
  const responseSkyDesc = formattedData.weather[0].description;
  $("#cityName")[0].innerText = responseCityName;
  $("#cityTemp")[0].innerText = responseTemp;
  $("#skyDesc")[0].innerText = responseSkyDesc;

  // Updating date and time
  const properDate = formatDateTime(formattedData.dt);
  const date = properDate[1];
  const time = properDate[2];
  $("#date")[0].innerText = date;
  $("#time")[0].innerText = time;

  // Updating sunrise and sunset
  const sunriseTimeStamp = formattedData.sys.sunrise;
  const sunsetTimeStamp = formattedData.sys.sunset;
  const properSunriseTime = formatDateTime(sunriseTimeStamp)[2];
  const properSunsetTime = formatDateTime(sunsetTimeStamp)[2];
  $("#sunriseTime")[0].innerText = properSunriseTime;
  $("#sunsetTime")[0].innerText = properSunsetTime;

  console.log(formattedData);
  const lat = formattedData.coord.lat;
  const long = formattedData.coord.lon;
  // Aqi data
  fetchAqiData(lat, long);

  // Coming 5 days data
  fetchComingFiveDaysData(lat, long);
}
