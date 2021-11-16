const images = ["back_ground.jpg",
    "KakaoTalk_20211115_235540345_01.jpg",
    "KakaoTalk_20211115_235540345_02.jpg",
    "KakaoTalk_20211115_235540345_03.jpg",
    "KakaoTalk_20211115_235540345_04.jpg",
    "KakaoTalk_20211115_235540345_05.jpg",
    "KakaoTalk_20211115_235540345_06.jpg",
    "KakaoTalk_20211115_235540345_07.jpg",
    "KakaoTalk_20211115_235540345_08.jpg",
    "KakaoTalk_20211115_235540345_09.jpg",
    "KakaoTalk_20211115_235540345_10.jpg",
    "KakaoTalk_20211115_235540345_11.jpg",
    "KakaoTalk_20211115_235540345.jpg",
    "portfolio-7.jpg",
    "portfolio-8.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");//<img>를 만든다.

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);//원하는걸 html에 추가
const h2 = document.querySelector("#clock");

document.body.insertBefore(bgImage, h2);//h2앞에 bgImage를 삽입
