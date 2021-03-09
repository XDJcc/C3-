const string = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  .skin {
    background: #93b8ca;
    height: 100vh;
    position: relative;
    z-index: -3;
  }
  
  .head {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: #0092dc;
    border-radius: 50%;
    border: 1px solid #333;
  }
  
  .eye {
    border: 1px solid #333;
    width: 50px;
    height: 65px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 60px;
    z-index: 1;
    transform: translateX(-50%);
  }
  
  .eye::before {
    content: "";
    display: block;
    width: 20px;
    height: 30px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .head .left {
    transform: translateX(-55px);
  }
  
  .head .left::before {
    left: 28px;
  }
  .head .right {
    transform: translateX(5px);
  }
  .head .right::before {
    left: 1px;
  }
  
  .nose {
    width: 40px;
    height: 40px;
    background: #d40019;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 105px;
    z-index: 1;
    border-radius: 50%;
    border: 1px solid #333;
  }
   
  .face {
    width: 270px;
    height: 210px;
    background: #fff;
    position: absolute;
    top: 85px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 1px solid #333;
  }
  
  .mouth {
    width: 200px;
    height: 100px;
    border: 1px solid #333;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 145px;
    z-index: 2;
    border-radius: 0 0 50% 50%;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 2px solid #333;
  }
  .mouth .sty {
    border: 1px solid #333;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .mouth .center {
    width: 1px;
    height: 100px;
    top: -2px;
  }
  
  /* .mustache1 {
    width: 200px;
    height: 20px;
    background: pink;
  } */
  .mustache1::before,
  .mustache2::before,
  .mustache3::before,
  .mustache1::after,
  .mustache2::after,
  .mustache3::after {
    content: "";
    display: block;
    width: 80px;
    height: 1px;
    /* background: #000; */
    border: 1px solid #333;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .mustache1::before {
    top: 10px;
    transform: translateX(-120%) rotateZ(20deg);
  }
  .mustache2::before {
    top: 30px;
    transform: translateX(-122%);
  }
  .mustache3::before {
    top: 50px;
    transform: translateX(-120%) rotateZ(-20deg);
  }
  .mustache1::after {
    top: 10px;
    transform: translateX(20%) rotateZ(160deg);
  }
  .mustache2::after {
    top: 30px;
    transform: translateX(22%);
  }
  .mustache3::after {
    top: 50px;
    transform: translateX(20%) rotateZ(20deg);
  }
 
  /* 脖子 */
  .neck {
    width: 180px;
    height: 20px;
    background: #dd011c;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 310px;
    border-radius: 20%;
    border: 1px solid #333;
    z-index: 5;
  }
  .lingdang {
    width: 40px;
    height: 40px;
    background: #f5cc07;
    position: absolute;
    left: 50%;
    top: 5px;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  .lingdang::before {
    content: "";
    display: block;
    width: 40px;
    height: 5px;
    border: 1px solid #333;
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  .circle {
    width: 11px;
    height: 11px;
    border: 1px solid #333;
    background: #444;
    position: absolute;
    left: 50%;
    top: 18px;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  .circle::before {
    content: "";
    display: block;
    height: 8px;
    width: 1px;
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    border: 1px solid #333;
  }
  .dbody {
    width: 200px;
    height: 200px;
    border: 1px solid #333;
    background: #0092dc;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 315px;
    border-radius: 30%/100%;
    z-index: 3px;
  }
  .abdomen {
    width: 160px;
    height: 150px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
    border-radius: 40%/100%;
  }
  
  .pocket {
    width: 125px;
    height: 60px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 60px;
    border-radius: 10%;
    border: 1px solid #333;
  }
  
  .foot {
    width: 100px;
    height: 120px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 100px;
    border-radius: 45%;
    border: 1px solid #333;
  }
  
  .dbody .left {
    transform: translateX(-120%);
  }
  
  .dbody .right {
    transform: translateX(20%);
  }
  
  @keyframes wave1 {
    0% {
      transform: translateX(-145%) rotateZ(30deg);
    }
    50% {
      transform: translateX(-145%) rotateZ(0deg);
    }
    100% {
      transform: translateX(-145%) rotateZ(30deg);
    }
    /* 100% {
      transform: translateX(45%) rotateZ(0deg);
    } */
  }
  @keyframes wave2 {
    0% {
      transform: translateX(45%) rotateZ(-30deg);
    }
    50% {
      transform: translateX(45%) rotateZ(0deg);
    }
    100% {
      transform: translateX(45%) rotateZ(-30deg);
    }
    /* 100% {
      transform: translateX(45%) rotateZ(0deg);
    } */
  }
  .arm {
    width: 115px;
    height: 50px;
    background: #0092dc;
    border: 1px solid #333;
    position: absolute;
    left: 50%;
    top: 352px;
    z-index: -1;
    border-radius: 20%/100%;
  }
  .aleft {
    transform-origin: 100% 0;
    transform: translateX(-145%) rotateZ(-30deg);
    animation: 1.5s wave1 infinite linear;
  }
  .aright {
    transform-origin: 0 0;
    transform: translateX(45%) rotateZ(30deg);
    animation: 1.5s wave2 infinite linear;
  }
  .arm::before {
    content: "";
    display: block;
    width: 65px;
    height: 65px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #333;
    z-index: -2;
  }
  .aleft::before {
    left: -30%;
    top: -10px;
  }
  .aright::before {
    left: 70%;
    top: -10px;
  }
`;
const player = {
  timer: undefined,
  time: 10,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#style"),
  },
  events: {
    ".btnPause": "pause",
    ".btnPlay": "play",
    ".btnSlow": "slow",
    // ".btnNormal": "normal",
    ".btnFast": "fast",
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindsEvents();
    player.play();
  },
  bindsEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        debugger;
        document.querySelector(key).onclick = player[value];
        console.log(player[value]);
      }
    }
  },
  play: () => {
    player.timer = setInterval(player.run, player.time);
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.timer);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  pause: () => {
    window.clearInterval(player.timer);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 10;
    player.play();
  },
};

player.init();
