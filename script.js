const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("loveMessage");
const video = document.getElementById("celebrationVideo");

yesBtn.onclick = () => {
  message.style.display = "block";
  video.style.display = "block";
  video.play();
};

noBtn.onmouseover = () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};
