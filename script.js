
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



var imgElement = document.getElementById('image');
var nextImageBtn = document.getElementById('nextImageBtn');
var prevImageBtn = document.getElementById('prevImageBtn');

var currentImageSrc = imgElement.src;
var previousImageSrc = './assets/megapc.webp';

nextImageBtn.addEventListener('click', function() {
previousImageSrc = currentImageSrc; 
currentImageSrc = './assets/ba9chich.svg';
fadeImage(currentImageSrc);
prevImageBtn.disabled = false; 
});


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