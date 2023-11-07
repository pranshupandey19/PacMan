const gameOverAudio = new Audio("./audio/mixkit-retro-arcade-game-over-470.wav")

gameOverAudio.play();

document.querySelector(".play-again").onclick = ()=>{
  window.location.href = "./modes.html"
}


const savedScore = localStorage.getItem('score');
document.querySelector("#final-score").textContent = savedScore


document.querySelector(".home").onclick = ()=>{
  window.location.href = "./index.html"
}

