import { urlreturn } from './url.js';
import { imgSelect } from './imgSelect.js';

function fetchWeatherData(nx = 60, ny = 127, cityName = "서울특별시") {
  const url = urlreturn(nx, ny);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let content = json.response.body.items;

      const t1hDiv = document.getElementById("T1H");
      t1hDiv.innerHTML = content.item[24].fcstValue;

      const t1hDiv2 = document.getElementById("T1H2");
      t1hDiv2.innerHTML = content.item[24].fcstValue;

      const skyDiv = document.getElementById("SKY");
      if (content.item[18].fcstValue == 1) {
        skyDiv.innerHTML = "맑음";
      } else if (content.item[18].fcstValue == 3) {
        skyDiv.innerHTML = "구름많음";
      } else if (content.item[18].fcstValue == 4) {
        skyDiv.innerHTML = "흐림";
      }

      const ptyDiv = document.getElementById("PTY");
      if (content.item[6].fcstValue == 0) {
        ptyDiv.innerHTML = "없음";
      } else if (content.item[6].fcstValue == 1) {
        ptyDiv.innerHTML = "비";
      } else if (content.item[6].fcstValue == 2) {
        ptyDiv.innerHTML = "비/눈";
      } else if (content.item[6].fcstValue == 3) {
        ptyDiv.innerHTML = "눈";
      } else if (content.item[6].fcstValue == 5) {
        ptyDiv.innerHTML = "빗방울";
      } else if (content.item[6].fcstValue == 6) {
        ptyDiv.innerHTML = "빗방울날림";
      } else if (content.item[6].fcstValue == 7) {
        ptyDiv.innerHTML = "눈날림";
      }

      const rn1Div = document.getElementById("RN1");
      rn1Div.innerHTML = content.item[12].fcstValue;

      const rehDiv = document.getElementById("REH");
      rehDiv.innerHTML = content.item[30].fcstValue;

      const wsdDiv = document.getElementById("WSD");
      wsdDiv.innerHTML = content.item[54].fcstValue;

      const skyimgDiv = document.getElementById("skyimg");
      imgSelect(content, 6, skyimgDiv, 230, 230);

      const selectedCityElement = document.getElementById("selected-city");
      selectedCityElement.innerHTML = cityName;
    });
}
fetchWeatherData()

function handleSubmit(event) {
  event.preventDefault();
  fetch('http://localhost:3000/city', { method: 'GET' })
    .then((response) => response.json())
    .then((json) => {
      const cityCoordinates = json.cityCoordinates;
      const city = document.forms['city']['citys'].value;
      const coordinates = cityCoordinates.find((item) => item.name === city);

      if (coordinates) {
        fetchWeatherData(coordinates.nx, coordinates.ny, city);
      } else {
        console.error('도시 데이터를 찾을 수 없습니다.');
      }
    })
    .catch((error) => {
      console.error('도시 데이터를 가져오는 중 오류가 발생했습니다.', error);
    });
}

document.forms['city'].addEventListener('submit', handleSubmit);

