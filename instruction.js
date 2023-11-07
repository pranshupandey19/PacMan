document.getElementById("x").addEventListener("click",()=>{
  window.location.href = "./index.html"
})


const backgroundAudio = new Audio("./audio/pacman_beginning.wav")
backgroundAudio.play();
backgroundAudio.loop = true;