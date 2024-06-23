function imgSelect(content, ptynum, skyimgDiv, width = 100, height = 100) {
    if (content.item[ptynum].fcstValue == 0) {
  
        if (content.item[ptynum+12].fcstValue == 1) {
            skyimgDiv.innerHTML = `<img src="./img/sun.png"alt="맑음" width="${width}" height="${height}">`;
        } else if (content.item[ptynum+12].fcstValue == 3) {
            skyimgDiv.innerHTML = `<img src="./img/cloud.png" alt="구름많음" width="${width}" height="${height}">`;
        } else if (content.item[ptynum+12].fcstValue == 4) {
            skyimgDiv.innerHTML = `<img src="./img/cloudm.png" alt="흐림" width="${width}" height="${height}">`;
        }
    } else if (content.item[ptynum].fcstValue == 1) {
        skyimgDiv.innerHTML = `<img src="./img/rain.png" alt="비" width="${width}" height="${height}">`;
    } else if (content.item[ptynum].fcstValue == 2) {
        skyimgDiv.innerHTML = `<img src="./img/snowrain.png" alt="비눈" width="${width}" height="${height}">`;
    } else if (content.item[ptynum].fcstValue == 3) {
        skyimgDiv.innerHTML = `<img src="./img/snow.png" alt="눈" width="${width}" height="${height}">`;
    } else if (content.item[ptynum].fcstValue == 4) {
        skyimgDiv.innerHTML = `<img src="./img/rainm.png" alt="소나기" width="${width}" height="${height}">`;
    } else if (content.item[ptynum].fcstValue == 5) {
        skyimgDiv.innerHTML = `<img src="./img/rain.png" alt="빗방울" width="${width}" height="${height}">`;
    } else if (content.item[ptynum].fcstValue == 6) {
        skyimgDiv.innerHTML = `<img src="./img/snowrain.png" alt="빗방울눈날림" width="${width}" height="${height}">`;
    } else if (content.item[ptynum].fcstValue == 7) {
        skyimgDiv.innerHTML = `<img src="./img/snow.png" alt="눈날림" width="${width}" height="${height}">`;
    }
  }
  
  export { imgSelect };
  