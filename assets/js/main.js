
/* javascript */
console.log("This 'ad' employs a silly play on words using the brand Heinken."+ 
"It seeks to motivate viewers to choose going to bed as an alternative to grabbing aother beer.")

document.getElementById("img").addEventListener("click", show);
document.getElementById("img").addEventListener("click", rotate);
document.getElementById("img").addEventListener("click", showPillow);

function show(){
    let listShow = document.getElementsByTagName("p");
    for(let i = 0; i < listShow.length + 1; i++){
        listShow[i].style.visibility = "visible";
    }
}

function rotate(){
    document.getElementById("rotate").style.transform = "rotate(90deg)";
    document.getElementById("rotate").style.top = "200px";
    document.getElementById("rotate").style.left = "350px";
}

function showPillow(){
    document.getElementById("show").style.visibility = ("visible");
}
