const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())

const cityCoordinates = [
    { name: "서울특별시", nx: 60, ny: 127},
    { name: "부산광역시", nx: 98, ny: 76},
    { name: "대구광역시", nx: 89, ny: 90},
    { name: "인천광역시", nx: 55, ny: 124},
    { name: "광주광역시", nx: 58, ny: 74},
    { name: "대전광역시", nx: 67, ny: 100},
    { name: "울산광역시", nx: 102, ny: 84},
    { name: "세종특별자치시", nx: 66, ny: 103},
    { name: "경기도", nx: 60, ny: 120},
    { name: "충청북도", nx: 69, ny: 107},
    { name: "충청남도", nx: 68, ny: 100},
    { name: "전라북도", nx: 63, ny: 89},
    { name: "전라남도", nx: 51, ny: 67},
    { name: "경상북도", nx: 87, ny: 106},
    { name: "경상남도", nx: 91, ny: 77},
    { name: "제주특별자치도", nx: 52, ny: 38},
    { name: "이어도", nx: 28, ny: 8},
    { name: "강원특별자치도", nx: 73, ny: 134},
  ]


app.get("/city", (req, res)=>{
    res.json({cityCoordinates})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });