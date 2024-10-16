/* Set the width of the side navigation to 250px */
function openmenu() {
    document.getElementById("mymenu").style.width = "200px";
}
/* Set the width of the side navigation to 0 */
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