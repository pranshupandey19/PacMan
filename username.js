

const input = document.getElementById('input');

document.querySelector(".play").addEventListener("click",()=>{
  const inputValue = input.value;
  if (inputValue.length !=0){
    localStorage.setItem('storedInput', inputValue);
    window.location.href = "./modes.html"
}
else{
  alert("Please enter your name")
}
})


const backgroundAudio = new Audio("./audio/pacman_beginning.wav")
backgroundAudio.play();
backgroundAudio.loop = true;