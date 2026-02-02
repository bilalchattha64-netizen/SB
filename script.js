const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.onclick = () => {
  message.innerText = "Yay! Celebration time! 🎉❤️";
};

noBtn.onmouseover = () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};
