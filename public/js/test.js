const cityCoordinates = [
    { name: "서울특별시", nx: 60, ny: 127, lat: 37.5665, lng: 126.9780 },
    { name: "부산광역시", nx: 98, ny: 76, lat: 35.1796, lng: 129.0756 },
    { name: "대구광역시", nx: 89, ny: 90, lat: 35.8714, lng: 128.6014 },
    { name: "인천광역시", nx: 55, ny: 124, lat: 37.4563, lng: 126.7052 },
    { name: "광주광역시", nx: 58, ny: 74, lat: 35.1595, lng: 126.8526 },
    { name: "대전광역시", nx: 67, ny: 100, lat: 36.3504, lng: 127.3845 },
    { name: "울산광역시", nx: 102, ny: 84, lat: 35.5384, lng: 129.3114 },
    { name: "세종특별자치시", nx: 66, ny: 103, lat: 36.4800, lng: 127.2890 },
    { name: "경기도", nx: 60, ny: 120, lat: 37.4138, lng: 127.5183 },
    { name: "충청북도", nx: 69, ny: 107, lat: 36.6359, lng: 127.4913 },
    { name: "충청남도", nx: 68, ny: 100, lat: 36.5184, lng: 126.8000 },
    { name: "전라북도", nx: 63, ny: 89, lat: 35.8201, lng: 127.1088 },
    { name: "전라남도", nx: 51, ny: 67, lat: 34.8161, lng: 126.4629 },
    { name: "경상북도", nx: 87, ny: 106, lat: 36.4919, lng: 128.8889 },
    { name: "경상남도", nx: 91, ny: 77, lat: 35.2383, lng: 128.6924 },
    { name: "제주특별자치도", nx: 52, ny: 38, lat: 33.4996, lng: 126.5312 },
    { name: "이어도", nx: 28, ny: 8, lat: 32.1234, lng: 125.1823 },
    { name: "강원특별자치도", nx: 73, ny: 134, lat: 37.8228, lng: 128.1555 },
];

const mapContainer = document.getElementById('map');
const mapOption = { 
    center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심좌표 (서울)
    level: 7 // 지도의 확대 레벨
};

const map = new kakao.maps.Map(mapContainer, mapOption);

cityCoordinates.forEach(city => {
    const markerPosition = new kakao.maps.LatLng(city.lat, city.lng); 
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        alert(`${city.name}: nx=${city.nx}, ny=${city.ny}`);
        // 이곳에서 fetchWeatherData2(city.nx, city.ny, city.name);를 호출할 수 있습니다.
    });

    marker.setMap(map);
});
