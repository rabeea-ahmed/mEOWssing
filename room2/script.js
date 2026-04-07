
window.onload = function () {

    const ambianceAudio = document.getElementById("audio-ambience");
    const pianoAudio = document.getElementById("audio-piano");
    const pageAudio = document.getElementById("audio-page");
    const snoreAudio = document.getElementById("audio-snore");

    const vinylImg = document.getElementById("vinyl");
    const grandmaImg = document.getElementById("grandma");
    const grandpaImg = document.getElementById("grandpa");

    // Play ambience audio automatically
    ambianceAudio.volume = 0.6;
    pianoAudio.volume = 0.7;
    ambianceAudio.play();
    pianoAudio.play();

    //Vinyl: toggle play/pause on click
    vinylImg.onclick = function () {
        if (pianoAudio.paused) {
            pianoAudio.play();
        } else {
            pianoAudio.pause();
        }
    };

    //Grandma 
    grandmaImg.onclick = function () {
        grandmaImg.classList.remove("pulse");
        grandmaImg.src = "grandma.gif";
        pageAudio.play();

        //back to static when audio finishes
        pageAudio.onended = function () {
            grandmaImg.src = "grandma-static.png";
            grandmaImg.classList.add("pulse");
        };
    };

    //Grandpa 
    grandpaImg.onclick = function () {
        grandpaImg.classList.remove("pulse");
        grandpaImg.src = "grandpa.gif";
        snoreAudio.play();

        //back to static when audio finishes
        snoreAudio.onended = function () {
            grandpaImg.src = "grandpa-static.png";
            grandpaImg.classList.add("pulse");
        };
    };
};