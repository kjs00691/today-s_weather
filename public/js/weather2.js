import { urlreturn } from "./url.js";
import { imgSelect } from "./imgSelect.js";

function innerContent(
  content,
  t1hnum,
  ptynum,
  skyimgDivId,
  baseTimeId,
  t1hId
) {
  const fcstDiv = document.getElementById(baseTimeId);
  let time = content.item[t1hnum].fcstTime;
  let hour = time.slice(0,2);
  fcstDiv.innerHTML = `${hour}시`
  const skyimgDiv = document.getElementById(skyimgDivId);
  imgSelect(content, ptynum, skyimgDiv, 150, 150);
  const t1hDiv = document.getElementById(t1hId);
  t1hDiv.innerHTML = content.item[t1hnum].fcstValue;
}

function fetchWeatherData2(nx = 60, ny = 127, cityName = "서울특별시") {
  const url = urlreturn(nx, ny);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let content = json.response.body.items;

      innerContent(content, 24, 6, "skyimg1", "fcsttime1", "T1H1");
      innerContent(content, 25, 7, "skyimg2", "fcsttime2", "T1H2");
      innerContent(content, 26, 8, "skyimg3", "fcsttime3", "T1H3");
      innerContent(content, 27, 9, "skyimg4", "fcsttime4", "T1H4");
      innerContent(content, 28, 10, "skyimg5", "fcsttime5", "T1H5");
      innerContent(content, 29, 11, "skyimg6", "fcsttime6", "T1H6");

      const selectedCityElement = document.getElementById("selected-city");
      selectedCityElement.innerHTML = cityName;
    });
}

fetchWeatherData2();

function handleSubmit(event) {
  event.preventDefault();
  fetch('http://localhost:3000/city', { method: 'GET' })
    .then((response) => response.json())
    .then((json) => {
      const cityCoordinates = json.cityCoordinates;
      const city = document.forms['city']['citys'].value;
      const coordinates = cityCoordinates.find((item) => item.name === city);

      if (coordinates) {
        fetchWeatherData2(coordinates.nx, coordinates.ny, city);
      } else {
        console.error('도시 데이터를 찾을 수 없습니다.');
      }
    })
    .catch((error) => {
      console.error('도시 데이터를 가져오는 중 오류가 발생했습니다.', error);
    });
}

document.forms['city'].addEventListener('submit', handleSubmit);
