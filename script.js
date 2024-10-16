
function openmenu() {
    document.getElementById("mymenu").style.width = "200px";
}
function closemenu() {
    document.getElementById("mymenu").style.width = "0";
}

function changeImageWeather() {
    var image = document.getElementById('weather');
    image.src = './assets/DojoWeatherResult.png';
    image.style.width = '400px';
}
function changeImageConnections() {
    var image = document.getElementById('connections');
    image.src = './assets/MakingConnectionsResult.png';
    image.style.width ='400px';
}
function changeImageLikes() {
    var image = document.getElementById('Likes');
    image.src = './assets/LikesResult.png';
    image.style.width ='400px';
}
function changeImageVideo() {
    var image = document.getElementById('Vid');
    image.src = './assets/VideoPreviewResult.png';
    image.style.width ='400px';
}
function changeImageProfile() {
    var image = document.getElementById('ProfileIMG');
    image.src = './assets/ProfilePageResult.png';
    image.style.width ='400px';
}
function changeImageCard() {
    var image = document.getElementById('CardIMG');
    image.src = './assets/UserCardResult.png';
    image.style.width ='400px';
}
function TyForFeedBacks(){
    alert("Thank You! For Your FeedBacks");
}

var allImg = ['./assets/megapc.webp', './assets/ba9chich.svg','./assets/orange.png','./assets/Mytek.png'];
var currentIndex = 0;
function switchImg() {
    var next = document.getElementById('image');
    currentIndex = (currentIndex + 1) % allImg.length;
    next.src = allImg[currentIndex];
}
function previousImg() {
    var next = document.getElementById('image');
    currentIndex = (currentIndex - 1 + allImg.length) % allImg.length;
    next.src = allImg[currentIndex];
}

prevImageBtn.addEventListener('click', function() {
fadeImage(previousImageSrc);


var tempSrc = currentImageSrc;
currentImageSrc = previousImageSrc;
previousImageSrc = tempSrc;

if (!previousImageSrc) {
    prevImageBtn.disabled = true; 
}
});


function fadeImage(newSrc) {
imgElement.classList.add('fade-out');

setTimeout(function() {
    imgElement.src = newSrc;
    imgElement.classList.remove('fade-out');
    imgElement.classList.add('fade-in');
}, 1000);
}
