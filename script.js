const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surprise = document.getElementById("surprise");
const message = document.getElementById("loveMessage");


const confettiCanvas = document.getElementById("confetti");
const heartsCanvas = document.getElementById("hearts");

const ctx = confettiCanvas.getContext("2d");
const hctx = heartsCanvas.getContext("2d");

confettiCanvas.width = heartsCanvas.width = window.innerWidth;
confettiCanvas.height = heartsCanvas.height = window.innerHeight;


/* ========== YES CLICK ========== */
yesBtn.onclick = () => {

  surprise.style.display = "block";
  

  typeWriter("Yay! You made my day ❤️✨");

  startConfetti();
  startHearts();
};


/* ========== NO RUN AWAY ========== */
noBtn.onmouseover = () => {
  const x = Math.random()*300-150;
  const y = Math.random()*300-150;
  noBtn.style.transform = `translate(${x}px,${y}px)`;
};


/* ========== TYPEWRITER EFFECT ========== */
function typeWriter(text){
  let i=0;
  message.innerHTML="";
  let interval = setInterval(()=>{
    message.innerHTML += text.charAt(i);
    i++;
    if(i>=text.length) clearInterval(interval);
  },40);
}


/* ========== CONFETTI ========== */
let confetti=[];

function startConfetti(){
  for(let i=0;i<150;i++){
    confetti.push({
      x:Math.random()*confettiCanvas.width,
      y:Math.random()*confettiCanvas.height,
      r:Math.random()*5+2,
      d:Math.random()*5+1
    });
  }

  animateConfetti();
}

function animateConfetti(){
  ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);

  ctx.fillStyle="pink";

  confetti.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();

    p.y+=p.d;
    if(p.y>confettiCanvas.height) p.y=0;
  });

  requestAnimationFrame(animateConfetti);
}


/* ========== HEART RAIN ========== */
let hearts=[];

function startHearts(){
  for(let i=0;i<40;i++){
    hearts.push({
      x:Math.random()*heartsCanvas.width,
      y:Math.random()*heartsCanvas.height,
      size:20+Math.random()*10,
      speed:1+Math.random()*2
    });
  }

  animateHearts();
}

function animateHearts(){
  hctx.clearRect(0,0,heartsCanvas.width,heartsCanvas.height);

  hearts.forEach(h=>{
    hctx.font = h.size+"px Arial";
    hctx.fillText("❤️", h.x, h.y);

    h.y += h.speed;
    if(h.y>heartsCanvas.height) h.y=0;
  });

  requestAnimationFrame(animateHearts);
}
