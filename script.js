
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

var allImg = ['./assets/megapc.webp', './assets/ba9chich.svg', './assets/orange.png', './assets/Mytek.png'];
var currentIndex = 0;

function switchImg() {
    changeImage(1);  // Move to the next image
}

function previousImg() {
    changeImage(-1);  // Move to the previous image
}

function changeImage(direction) {
    var imgElement = document.getElementById('image');
    imgElement.classList.add('fade-out');
    setTimeout(function() {
        currentIndex = (currentIndex + direction + allImg.length) % allImg.length;
        imgElement.src = allImg[currentIndex];
        imgElement.classList.remove('fade-out');
        imgElement.classList.add('fade-in');
        setTimeout(function() {
            imgElement.classList.remove('fade-in');
        }, 500); 
    }, 500);
}
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById("darkModeToggle");
    const lightModeToggle = document.getElementById("lightModeToggle");

    body.classList.toggle("dark-mode");

    
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.style.display = "none";
        lightModeToggle.style.display = "block";
    } else {
        darkModeToggle.style.display = "block";
        lightModeToggle.style.display = "none";
    }
}
var slidebox = document.getElementById('slidebox')
function checkslide(){
var boxposition = slidebox.getBoundingClientRect().top;
var screenposition = window.innerHeight;
if (boxposition<screenposition){
    slidebox.classList.add('visible');
}
}

window.addEventListener('scroll', checkslide);


checkslide();