import { urlreturn } from "./url.js";
import { imgSelect } from "./imgSelect.js";

function fetchWeatherData(nx = 60, ny = 127, cityName = "서울특별시") {
  const url = urlreturn(nx, ny);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let content = json.response.body.items;

      const t1hDiv = document.getElementById("T1H");
      t1hDiv.innerHTML = content.item[24].fcstValue;

      const skyimgDiv = document.getElementById("skyimg");
      imgSelect(content, 6, skyimgDiv, 230, 230);

      const selectedCityElement = document.getElementById("selected-city");
      selectedCityElement.innerHTML = cityName;

      const rn1Div = document.getElementById("RN1");
      rn1Div.innerHTML = content.item[12].fcstValue;
      const rehDiv = document.getElementById("REH");
      rehDiv.innerHTML = content.item[30].fcstValue;
      const wsdDiv = document.getElementById("WSD");
      wsdDiv.innerHTML = content.item[54].fcstValue;
    });
}
fetchWeatherData();

// 이밑으로 코드수정
function handleSubmit(event, city) {
  event.preventDefault();
  fetch('http://localhost:3000/city', { method: 'GET' })
    .then((response) => response.json())
    .then((json) => {
      const cityCoordinates = json.cityCoordinates;
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

var markerSU = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.5635694444444, 126.980008333333),
  map: map
});
kakao.maps.event.addListener(markerSU, "click", function() {
  handleSubmit(new Event("submit"), "서울특별시");
});

var markerBS = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(35.1770194444444, 129.076952777777),
  map: map
});
kakao.maps.event.addListener(markerBS, "click", function() {
  handleSubmit(new Event("submit"), "부산광역시");
});

var markerDG = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(35.8685416666666, 128.603552777777),
  map: map
});
kakao.maps.event.addListener(markerDG, "click", function() {
  handleSubmit(new Event("submit"), "대구광역시");
});

// 추가적인 마커들에 대해서도 유사하게 추가
var markerIC = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.4532333333333, 126.707352777777),
  map: map
});
kakao.maps.event.addListener(markerIC, "click", function() {
  handleSubmit(new Event("submit"), "인천광역시");
});

var markerGJ = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(35.1569749999999, 126.853363888888),
  map: map
});
kakao.maps.event.addListener(markerGJ, "click", function() {
  handleSubmit(new Event("submit"), "광주광역시");
});

var markerDJ = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(36.3471194444444, 127.386566666666),
  map: map
});
kakao.maps.event.addListener(markerDJ, "click", function() {
  handleSubmit(new Event("submit"), "대전광역시");
});

var markerUS = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(35.5354083333333, 129.313688888888),
  map: map
});
kakao.maps.event.addListener(markerUS, "click", function() {
  handleSubmit(new Event("submit"), "울산광역시");
});

var markerSJ = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(36.4800121, 127.2890691),
  map: map
});
kakao.maps.event.addListener(markerSJ, "click", function() {
  handleSubmit(new Event("submit"), "세종특별자치시");
});

var markerGG = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.2718444444444, 127.011688888888),
  map: map
});
kakao.maps.event.addListener(markerGG, "click", function() {
  handleSubmit(new Event("submit"), "경기도");
});

var markerCCN = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(36.6325, 127.493586111111),
  map: map
});
kakao.maps.event.addListener(markerCCN, "click", function() {
  handleSubmit(new Event("submit"), "충청북도");
});

var markerCCS = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(36.65919, 126.6730),
  map: map
});
kakao.maps.event.addListener(markerCCS, "click", function() {
  handleSubmit(new Event("submit"), "충청남도");
});

var markerJLN = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(35.817275, 127.111052777777),
  map: map
});
kakao.maps.event.addListener(markerJLN, "click", function() {
  handleSubmit(new Event("submit"), "전라북도");
});

var markerJLS = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(34.8130444444444, 126.465),
  map: map
});
kakao.maps.event.addListener(markerJLS, "click", function() {
  handleSubmit(new Event("submit"), "전라남도");
});

var markerGSN = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(36.5759985118295, 128.505832256098),
  map: map
});
kakao.maps.event.addListener(markerGSN, "click", function() {
  handleSubmit(new Event("submit"), "경상북도");
});

var markerGSS = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(35.2347361111111, 128.694166666666),
  map: map
});
kakao.maps.event.addListener(markerGSS, "click", function() {
  handleSubmit(new Event("submit"), "경상남도");
});

var markerJJ = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(33.4856944444444, 126.500333333333),
  map: map
});
kakao.maps.event.addListener(markerJJ, "click", function() {
  handleSubmit(new Event("submit"), "제주특별자치도");
});

var markerGW = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.8826916666666, 127.731975),
  map: map
});
kakao.maps.event.addListener(markerGW, "click", function() {
  handleSubmit(new Event("submit"), "강원특별자치도");
});
