console.log("Script ready");

function moveBall(dx, dy) {
  let ballElem = document.getElementById("ball");
  ballElem.style.left = (ballElem.offsetLeft + dx) + "px";
  ballElem.style.top = (ballElem.offsetTop + dy) + "px";
}

let vx = 3;
let vy = 1;

let balls = [
  {id: 'ball', vx: 1, vy: 1},
  {id: 'square', vx: -1, vy: 1},
  {id: 'image', vx: -1, vy: -1}
];

function bounceBalls() {
  let fieldElem = document.getElementById("field");

  for(let ball of balls) {
    let ballElem = document.getElementById(ball.id);

    ballElem.style.left = (ballElem.offsetLeft + ball.vx) + "px";

    ballElem.style.top = (ballElem.offsetTop + ball.vy) + "px";

    if(ballElem.offsetTop + ballElem.offsetHeight >= fieldElem.offsetHeight || ballElem.offsetTop <= 0)
      ball.vy = -ball.vy;

    if(ballElem.offsetLeft + ballElem.offsetWidth >= fieldElem.offsetWidth || ballElem.offsetLeft <= 10)
      ball.vx = -ball.vx;
  }
}

function bounceBall() {
  let fieldElem = document.getElementById("field");
  let ballElem = document.getElementById("ball");

  ballElem.style.left = (ballElem.offsetLeft + vx) + "px";

  ballElem.style.top = (ballElem.offsetTop + vy) + "px";

  if(ballElem.offsetTop + ballElem.offsetHeight >= fieldElem.offsetHeight || ballElem.offsetTop <= 0)
    vy = -vy;

  if(ballElem.offsetLeft + ballElem.offsetWidth >= fieldElem.offsetWidth || ballElem.offsetLeft <= 10)
    vx = -vx;
}

setInterval(bounceBalls, 10);
