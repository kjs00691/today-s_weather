function urlreturn(nx, ny) {
    const API_KEY =
      "YOKk3tIb1euSMGi8vEM0oxggnRGzMMGLCSDywe%2FYJ51eEmGvvFxnbGIy7qMS03DEzOHpeVqKfxPRv9Jw86Di9Q%3D%3D"; // 기상청 API 키
    const BASE_URL =
      "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
    const PAGE_NO = "1";
    const NUM_OF_ROWS = "1000";
    const DATA_TYPE = "JSON";
    const NX = nx; 
    const NY = ny; 
    let weather = new Date();
    weather = adjustTime(weather);
  
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}${month}${day}`;
    }
  
    function formatTime(date) {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}${minutes}`;
    }
  
    function adjustTime(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
  
      if (minutes < 45) {
        hours -= 1;
        if (hours < 0) {
          hours = 23;
          date.setDate(date.getDate() - 1);
        }
      }
  
      date.setHours(hours);
  
      return date;
    }
    return `${BASE_URL}?serviceKey=${API_KEY}&pageNo=${PAGE_NO}&numOfRows=${NUM_OF_ROWS}&dataType=${DATA_TYPE}&base_date=${formatDate(
      weather
    )}&base_time=${formatTime(weather)}&nx=${NX}&ny=${NY}`;
  }
  
  export { urlreturn };
  