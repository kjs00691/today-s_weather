import { urlreturn } from "./url.js";
import { imgSelect } from "./imgSelect.js";

function innerContent(
  content,
  t1hnum,
  skyimg,
  fcsttime,
  t1h,
  rn1,
  reh,
  wsd
) {
  const fcstDiv = document.getElementById(fcsttime);
  let time = content.item[t1hnum].fcstTime;
  let hour = time.slice(0,2);
  fcstDiv.innerHTML = `${hour}시`
  const skyimgDiv = document.getElementById(skyimg);
  imgSelect(content, t1hnum-18, skyimgDiv, 150, 150);
  const t1hDiv = document.getElementById(t1h);
  t1hDiv.innerHTML = content.item[t1hnum].fcstValue;
  const rn1Div = document.getElementById(rn1);
  rn1Div.innerHTML = content.item[t1hnum-12].fcstValue;
  const rehDiv = document.getElementById(reh);
  rehDiv.innerHTML = content.item[t1hnum+6].fcstValue;
  const wsdDiv = document.getElementById(wsd);
  wsdDiv.innerHTML = content.item[t1hnum+30].fcstValue;
}

function fetchWeatherData2(nx = 60, ny = 127, cityName = "서울특별시") {
  const url = urlreturn(nx, ny);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let content = json.response.body.items;

      innerContent(content, 24, "skyimg1", "fcsttime1", "T1H1", "RN11", "REH1", "WSD1");
      innerContent(content, 25, "skyimg2", "fcsttime2", "T1H2", "RN12", "REH2", "WSD2");
      innerContent(content, 26, "skyimg3", "fcsttime3", "T1H3", "RN13", "REH3", "WSD3");
      innerContent(content, 27, "skyimg4", "fcsttime4", "T1H4", "RN14", "REH4", "WSD4");
      innerContent(content, 28, "skyimg5", "fcsttime5", "T1H5", "RN15", "REH5", "WSD5");
      innerContent(content, 29, "skyimg6", "fcsttime6", "T1H6", "RN16", "REH6", "WSD6");

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
