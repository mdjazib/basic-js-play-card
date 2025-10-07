console.log("Hello World");
let state = false;

const playWithAlert = () => {
    state ? alert("It's already playing.") : alert("Woooh, Music played. Enjoy.");
    document.getElementById("song").play();
    document.body.setAttribute("aria-disabled", "false");
    state = true;
}