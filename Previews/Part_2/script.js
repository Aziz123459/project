var count = 9;

function onClick(){
    count+=1;
    document.getElementById("here").innerHTML = count;
}

var counttwo = 9;

function OnClick(){
    counttwo+=1;
    document.getElementById("there").innerHTML = counttwo;
}

var clicks = 12;

function plusClicks() {
    clicks++;
    document.getElementById('clickCount').innerText =clicks;
}