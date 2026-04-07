// index.html
window.addEventListener("load", () => {
    const missing = document.querySelector(".missing");
    const blur = document.querySelector(".blur");
    const clear = document.querySelector(".clear");
    const startBtn = document.querySelector(".button-start");
    const objective = document.querySelector(".objective");

    clear.style.opacity = "0";

    missing.addEventListener("click", () => {
        blur.style.opacity = "0";

        setTimeout(() => {
            clear.style.opacity = "1";
        }, 600);


        const audio = document.getElementById("bg-audio");
        audio.volume = 0.3;

        audio.play();

        
        setTimeout(() => {
            const meow = document.getElementById("meow");
            meow.volume = 0.5;

            meow.play();
        }, 1000);



        setTimeout(() => {
            startBtn.style.opacity = "1";
            objective.style.opacity = "1";

        }, 800);


        missing.style.opacity = "0";
        missing.style.pointerEvents = "none";
    });
});

// start button
function goToBuilding(){
    const doorOpen = document.getElementById("door");

    doorOpen.volume = 0.7;
    doorOpen.currentTime = 0;
    doorOpen.play();

    doorOpen.onended = () => {
    window.location.href = "building.html";
    };

}



// building.html

// scroll from bottom
function scrollBottom() {window.scrollTo(0, 99999);}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);


// stair sound
function playStair() {
    const sound = document.getElementById("stair-audio");
    sound.currentTime = 0; 
    sound.play();
}

// apartment 1
function goToPage1() {
    const windowSound = document.getElementById("window-Open");

    windowSound.volume = 0.05;
    windowSound.currentTime = 0;
    windowSound.play();

    windowSound.onended = () => {
    // alert("This page is coming soon!");
    window.location.href = "room1/room1.html";
    };


}

// apartment 2
function goToPage2() {
    const windowSound = document.getElementById("window-Open");

    windowSound.volume = 0.05;
    windowSound.currentTime = 0;
    windowSound.play();

    windowSound.onended = () => {
    window.location.href = "room2/room2.html";
    };

}

// apartment 3
function goToPage3() {
    const windowSound = document.getElementById("window-Open");

    windowSound.volume = 0.05;
    windowSound.currentTime = 0;
    windowSound.play();

    windowSound.onended = () => {
    window.location.href = "room3/room3.html";
    };

}

// return to start button
function goHome(){
    const doorOpen = document.getElementById("door");

    doorOpen.volume = 0.7;
    doorOpen.currentTime = 0;
    doorOpen.play();

    doorOpen.onended = () => {
    window.location.href = "index.html";
    };

}

// hiss sound
function catHiss(catImg) {
    const hiss = document.getElementById("hiss");
    hiss.volume = 0.2;

    catImg.src = "img/cat_hissing.png";

    hiss.currentTime = 0;
    hiss.play();

    setTimeout(() => {
        catImg.src = "img/cat_standing.png";
    }, 2000);
}

// meow sound
function catHappy(catImg) {
    const happy = document.getElementById("happy");

    catImg.src = "img/cat_happy.png";

    happy.currentTime = 0;
    happy.play();

    setTimeout(() => {
        catImg.src = "img/cat_standing.png";
    }, 2000);
}


// paper sound
const paper = document.getElementById("paper");
const missingPaper = document.querySelector(".missing");

missingPaper.addEventListener("mouseenter", () => {
    paper.currentTime = 0; 
    paper.volume = 0.7;
    paper.play();
});




