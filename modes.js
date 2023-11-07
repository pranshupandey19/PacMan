const username = localStorage.getItem("storedInput");
document.querySelector(".username").textContent = username


document.querySelector("#easy").addEventListener("click",()=>{
  window.location.href = "./easy.html"
})


document.querySelector("#medium").addEventListener("click",()=>{
 window.location.href = "./game.html"
})

document.querySelector("#hard").addEventListener("click",()=>{
  window.location.href = "./hard.html"
})


const backgroundAudio = new Audio("./audio/pacman_beginning.wav")
backgroundAudio.play();
backgroundAudio.loop = true;