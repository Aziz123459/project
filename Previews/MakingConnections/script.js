console.log("page loaded...");

function changeName(){
    document.getElementById("changename").innerText = "Samir Bargou" ; 
}


function removeRequestt(element){
var   element = document.getElementById("first");
    element.remove() 
    
}

function removeRequest(element){
    var   element = document.getElementById("second");
        element.remove() 
        
    }
var count = 500;
function onClick(){
    count+=1;
    document.getElementById("plus").innerHTML = count;
}

var current = 2;
function CLICK(){
    current--;
    document.getElementById("minus").innerHTML = current;
}