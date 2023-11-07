document.querySelector("#parent-instruction").addEventListener("click",()=>{
  window.location.href = "./instruction.html"
})


document.getElementById("parent-play").addEventListener("click",()=>{
  window.location.href = "./username.html";
})


const backgroundAudio = new Audio("./audio/pacman_beginning.wav")
backgroundAudio.play();
backgroundAudio.loop = true;