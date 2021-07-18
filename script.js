"use strict";

class Player {
  constructor(name, speed, defence, attack, shoot, pass, seed) {
    this.name = name;
    this.speed = speed;
    this.defence = defence;
    this.attack = attack;
    this.shoot = shoot;
    this.pass = pass;
    this.seed = seed;
  }
}

const mohamad = new Player("moe", 7.5, 7, 10, 10, 10, 1);
const keshavarz = new Player("keshavarz", 3, 3, 5, 6, 7, 1);
const bahram = new Player("bahram", 3, 3, 5, 6, 7, 3);
const bahman = new Player("bahman", 3, 3, 5, 6, 7, 2);
const rajab = new Player("rajab", 3, 3, 5, 6, 7, 3);
const ehsan = new Player("ehsan", 3, 3, 5, 6, 7, 1);
const navid = new Player("navid", 3, 3, 5, 6, 7, 3);
const shahab = new Player("shahab", 3, 3, 5, 6, 7, 3);
const mahmudi = new Player("mahmudi", 3, 3, 5, 6, 7, 2);
const rasool = new Player("rasool", 3, 3, 5, 6, 7, 3);
const mehrdad = new Player("mehrdad", 3, 3, 5, 6, 7, 4);
const mehrshad = new Player("mehrshad", 3, 3, 5, 6, 7, 1);
const iman = new Player("iman", 3, 3, 5, 6, 7, 4);
const hamidian = new Player("hamidian", 3, 3, 5, 6, 7, 5);
const payam = new Player("payam", 3, 3, 5, 6, 7, 2);
const unknown = new Player("unknown");

const allPlayers = [
  mohamad,
  keshavarz,
  bahram,
  bahman,
  rajab,
  navid,
  shahab,
  ehsan,
  mahmudi,
  rasool,
  mehrdad,
  mehrshad,
  iman,
  hamidian,
  payam,
  unknown,
];

let thisWeekPlayers = [unknown];
function objtoarr(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
}

let seed1 = [];
let seed2 = [];
let seed3 = [];
let seed4 = [];
let seed5 = [];

////////////////////////////////////////////////////////////////////////////////////////
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
///////////////////////////////// BacktoMain//////////////////////////////////////////

function backToMain() {
  location.replace("index.html");
  console.log("sssssssssss");
}

////////////////////////////////////////// MUSIC//////////////////////////////////////
var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

document.getElementsByClassName(".audio").volume = 0;

function Play() {
  if (audio.paused) {
    audio.play();
    document.getElementById("onoff").src = "src/img/Sound On.png";
  } else {
    audio.pause();
    document.getElementById("onoff").src = "src/img/Sound Off.png";
  }
}

var selectSoundEffect = new Audio();
selectSoundEffect.src = "src/msc/Hover Effect.mp3";

var deselectSoundEffect = new Audio();
deselectSoundEffect.src = "src/msc/Select.mp3";

////////////////////////////////////////////////////////////////////////////////////////
const teamPlayerss = document.querySelector(".selected__players");
var all = document.getElementsByClassName("players__container");

function selectedId(pid) {
  var element = document.getElementById(pid.id);

  element.classList.toggle("blink-1");
  element.classList.toggle("fade");

  // provide Index number based on name property of object, element.id = object.name
  var obj = objtoarr(element.id, allPlayers);

  if (element.classList.contains("fade") && thisWeekPlayers.includes(unknown)) {
    selectSoundEffect.play();
    const addPlayer = `
    <div class="lineup__box blink-2" id=${element.id}x>
      <img
        src="src/img/lineup/${pid.id}.png "
        alt="Add Player"
        class="lineup__photo_first"
      />
    </div>`;
    teamPlayerss.insertAdjacentHTML("beforeend", addPlayer);

    thisWeekPlayers.push(obj);

    ///removing unknown player///
    thisWeekPlayers.splice(unknown, 1);
    document.getElementById("unknown").remove();

    //////////////////////////////
  } else if (
    element.classList.contains("fade") &&
    !thisWeekPlayers.includes(unknown) &&
    !thisWeekPlayers.includes(element.id)
  ) {
    selectSoundEffect.play();

    const addPlayer1 = `
    <div class="lineup__box1 blink-2" id=${element.id}x>
      <img
        src="src/img/lineup/${pid.id}.png "
        alt="Add Player"
        class="lineup__photo_first"
      />
    </div>`;

    teamPlayerss.insertAdjacentHTML("beforeend", addPlayer1);

    thisWeekPlayers.push(obj);
  } else if (!element.classList.contains("fade")) {
    deselectSoundEffect.play();
    thisWeekPlayers.splice(thisWeekPlayers.indexOf(obj), 1);
    document.getElementById(`${element.id}x`).remove();

    if (thisWeekPlayers.length === 1) {
      document
        .getElementById(`${thisWeekPlayers[0].name}x`)
        .classList.remove("lineup__box1");
      document
        .getElementById(`${thisWeekPlayers[0].name}x`)
        .classList.add("lineup__box");
    }

    if (thisWeekPlayers.length === 0) {
      thisWeekPlayers.push(unknown);
      const addUnknown = `
      <div class="lineup__box" id=unknown>
        <img
          src="src/img/lineup/unknown.png "
          alt="Add Player"
          class="lineup__photo_first"
        />
      </div>`;
      teamPlayerss.insertAdjacentHTML("afterbegin", addUnknown);
    }
  }
}

var disp = document.getElementById("mdl");
var disp1 = document.getElementById("mdl2");
var err = document.getElementById("mdlerror");
const errtxt = document.getElementById("errtxt");

function sbmt() {
  var sbmt = document.getElementsByClassName("selected__players");
  document.getElementById("ar1").style.opacity = "1";

  if (
    document.getElementById("btn").textContent == "Submit!" &&
    thisWeekPlayers.length >= 2
  ) {
    setTimeout(function () {
      disp.style.display = "flex";
    }, 500);
    all[0].classList.add("noHover");
    sbmt[0].classList.add("submitted");
    sbmt[0].classList.add("blink-1");
    document.getElementById("btn").style.backgroundColor = "green";
    document.getElementById("btn").style.color = "white";
  } else {
    err.style.display = "flex";
    errtxt.innerHTML = " Please select at least 2 players";
  }
}

function bck() {
  disp.style.display = "none";

  all[0].classList.remove("noHover");
  document.getElementById("btn").style.backgroundColor = "#eee";
  document.getElementById("btn").style.color = "#222";
  document.getElementById("ar2").style.opacity = "0";
}
function bck2() {
  disp1.style.display = "none";
  disp.style.display = "flex";
  document.getElementById("ar4").style.opacity = "0";
}

function choice(elem) {
  var arrow1 = document.getElementById("ar1");
  var arrow2 = document.getElementById("ar2");
  if (elem.id == "two") {
    arrow1.style.opacity = "1";
    arrow2.style.opacity = "0";
  } else if (elem.id == "three") {
    arrow2.style.opacity = "1";
    arrow1.style.opacity = "0";
  }
}

function choice1(elem) {
  var arrow1 = document.getElementById("ar3");
  var arrow2 = document.getElementById("ar4");
  if (elem.id == "fr") {
    arrow1.style.opacity = "1";
    arrow2.style.opacity = "0";
  } else if (elem.id == "rnd") {
    arrow2.style.opacity = "1";
    arrow1.style.opacity = "0";
  }
}

////////////////////////////////////// SEED //////////////////////////////////////////

function start() {
  const secSelect = document.getElementById("select");

  if (document.getElementById("ar3").style.opacity === "1") {
    errtxt.innerHTML = "Currently not available!";
    err.style.display = "flex";
  } else {
    if (document.getElementById("ar1").style.opacity === "1") {
      let shuffledplayers = shuffle(thisWeekPlayers);

      let team1 = shuffledplayers;
      let team2 = shuffledplayers.splice(0, shuffledplayers.length / 2);

      secSelect.innerHTML = `<html lang="en" id=secTwoTeams >
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="styleTwoTeams.css" />
        <title>Wednesday</title>
      </head>
      <body>
        <header>
          <h1>We have two random teams ready for battle!</h1>
          <p class="credit">By Moe</p>
          <label for="check"><img src="src/img/Sound Off.png" alt="Sound Logo" class="soundLogo" id="onoff" onclick="Play()"></label>
          <audio class="audio" src="src/msc/Show.mp3" type="audio" loop=""></audio>
          <input type="checkbox" class="checkb" id="check"">
          <section class="players" id="secPick">
        </header>
        <main>
         
          <!-- /////////////////////////////PICKED PLAYERS/////////////////////////////// -->
    
          <section class="twoTeams">
            <div class="lineup">
    
            <div class="team__container">
    
              
              <p class="team__text">Team 1</p>
              
              <div class="team__players" id="t1p">
              
                <div class="lineup__box">
                  <img
                    src="src/img/lineup/${team1[0].name}.png"
                    alt="Add Player"
                    class="lineup__photo_first"
                  />
                  <p class="playername-first">${team1[0].name}</p>
                </div>
   
    
                </div>
               
              </div>
              
            </div>
    
            <div class="lineup">
            <div class="team__container">
              <p class="team__text">Team 2</p>
              
              <div class="team__players" id="t2p">
              
                <div class="lineup__box">
                  <img
                    src="src/img/lineup/${team2[0].name}.png"
                    alt="Add Player"
                    class="lineup__photo_first"
                  />
                  <p class="playername-first">${team2[0].name}</p>
                </div>
  
               
              </div>
            </div>
           </div>
    
    
    
          </section>
                 
          <div class="btn__container">
            <button class="btn-main btn" onclick="backToMain()">Back</button>
            <button class="btn-main btn">Again</button>
        </main>
      </body>
    </html>
    `;

      console.log("random");
      console.log("twoteams");
      const t1p = document.getElementById("t1p");

      for (let i = 1; i < team1.length; i++) {
        const addToT1p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team1[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />
        <p class="playername-rest">${team1[i].name}</p>
      </div>`;
        t1p.insertAdjacentHTML("beforeend", addToT1p);
      }
      for (let i = 1; i < team2.length; i++) {
        const t2p = document.getElementById("t2p");

        const addToT2p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team2[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />
        <p class="playername-rest">${team2[i].name}</p>
      </div>`;
        t2p.insertAdjacentHTML("beforeend", addToT2p);
      }
    } else {
      console.log("random");
      console.log("threeteams");

      let shuffledplayers = shuffle(thisWeekPlayers);

      let team1 = shuffledplayers.splice(
        0,
        Math.ceil(shuffledplayers.length / 3)
      );
      let team2 = shuffledplayers.splice(0, team1.length);
      let team3 = shuffledplayers;

      secSelect.innerHTML = `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="styleThreeTeams.css" />
        <title>Wednesday!</title>
      </head>
      <body>
        <header>
          <h1>We have three random teams ready for battle!</h1>
          <p class="credit">By Moe</p>
          <label for="check"><img src="src/img/Sound Off.png" alt="Sound Logo" class="soundLogo" id="onoff" onclick="Play()"></label>
          <audio class="audio" src="src/msc/Show.mp3" type="audio" loop=""></audio>
          <input type="checkbox" class="checkb" id="check"">
          <section class="players" id="secPick">
        </header>
        <main>
         
          <!-- /////////////////////////////PICKED PLAYERS/////////////////////////////// -->
    
          <section class="players__selected">
            <div class="lineup">
              <div class="team__container">
                <p class="team__text">Team 1</p>
                
                <div class="playersntextcont">
      
                <div class="team__players" id="t1p">
                
                  <div class="lineup__box">
                    <img
                      src="src/img/lineup/${team1[0].name}.png "
                      alt="Add Player"
                      class="lineup__photo_first"
                    />
                  </div>
                  
                
              
      
                </div>
                <div class="plnmbox" id="t1txt">          
                <p class="textbox">${team1[0].name}</p>

                  </div>
                </div>
              </div>
            </div>
            
    
    
            <div class="lineup">
              <div class="team__container">
                <p class="team__text">Team 2</p>
                
                <div class="playersntextcont">
      
                <div class="team__players" id="t2p">
                
                  <div class="lineup__box">
                    <img
                      src="src/img/lineup/${team2[0].name}.png"
                      alt="Add Player"
                      class="lineup__photo_first"
                    />
                  </div>
                  
      
      
                </div>
                <div class="plnmbox" id="t2txt">          
                  <p class="textbox">${team2[0].name}</p>

                  </div>
                </div>
              </div>
            </div>
            
    

    
           <div class="lineup">
            <div class="team__container">
              <p class="team__text">Team 3</p>
              
              <div class="playersntextcont">
    
              <div class="team__players" id="t3p">
              
                <div class="lineup__box">
                  <img
                    src="src/img/lineup/${team3[0].name}.png"
                    alt="Add Player"
                    class="lineup__photo_first"
                  />
                </div>
                

                
        
              </div>
              <div class="plnmbox" id= "t3txt">          
                <p class="textbox">${team3[0].name}</p>
 
                </div>
              </div>
            </div>
          </div>
           
        </section>
        
        <div class="btn__container">
          <button class="btn-main btn" onclick="backToMain()">Back</button>
          <button class="btn-main btn" onclick="again()">Again</button>
        </main>
      </body>
      </html>
    
    `;

      const t1p = document.getElementById("t1p");
      const t1px = document.getElementById("t1txt");

      for (let i = 1; i < team1.length; i++) {
        const addToT1p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team1[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
        t1p.insertAdjacentHTML("beforeend", addToT1p);
        const addtxt1 = `<p class="textbox">${team1[i].name}</p>`;
        t1px.insertAdjacentHTML("beforeend", addtxt1);
      }

      const t2p = document.getElementById("t2p");
      const t2px = document.getElementById("t2txt");

      for (let i = 1; i < team2.length; i++) {
        const addToT2p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team2[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
        t2p.insertAdjacentHTML("beforeend", addToT2p);
        const addtxt2 = `<p class="textbox">${team2[i].name}</p>`;
        t2px.insertAdjacentHTML("beforeend", addtxt2);
      }
      const t3p = document.getElementById("t3p");
      const t3px = document.getElementById("t3txt");

      for (let i = 1; i < team3.length; i++) {
        const addToT3p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team3[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />
  
      </div>`;
        t3p.insertAdjacentHTML("beforeend", addToT3p);
        const addtxt3 = `<p class="textbox">${team3[i].name}</p>`;
        t3px.insertAdjacentHTML("beforeend", addtxt3);
      }
    }
  }
  function seeder() {
    for (let i = 0; i < thisWeekPlayers.length; i++) {
      if (thisWeekPlayers[i].seed === 1) {
        if (!seed1.includes(thisWeekPlayers[i])) {
          seed1.push(thisWeekPlayers[i]);
        }
      } else if (thisWeekPlayers[i].seed === 2) {
        if (!seed1.includes(thisWeekPlayers[i])) {
          seed2.push(thisWeekPlayers[i]);
        }
      } else if (thisWeekPlayers[i].seed === 3) {
        if (!seed3.includes(thisWeekPlayers[i])) {
          seed3.push(thisWeekPlayers[i]);
        }
      } else if (thisWeekPlayers[i].seed === 4) {
        if (!seed4.includes(thisWeekPlayers[i])) {
          seed4.push(thisWeekPlayers[i]);
        }
      } else if (thisWeekPlayers[i].seed === 5) {
        if (!seed5.includes(thisWeekPlayers[i])) {
          seed5.push(thisWeekPlayers[i]);
        }
      }
    }
  }
  seeder();
}

//////////////////////////////////////////////////////////////////////////////////

function next() {
  if (document.getElementById("ar2").style.opacity == "1") {
    if (thisWeekPlayers.length >= 3) {
      disp.style.display = "none";
      disp1.style.display = "flex";
      document.getElementById("ar3").style.opacity = "1";
    } else {
      errtxt.innerHTML = "Please select at least 3 players";
      err.style.display = "flex";
    }
  } else {
    if (thisWeekPlayers.length <= 12) {
      disp.style.display = "none";
      disp1.style.display = "flex";
      document.getElementById("ar3").style.opacity = "1";
    } else {
      const errtxt = document.getElementById("errtxt");
      errtxt.innerHTML =
        "Two teams and more than 12 people is not a good idea!";
      err.style.display = "flex";
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////

let array1 = ["a", "b", "c", "f", "d", "e", "g"];

// let team1 = [];
let team2 = [];
let team3 = [];

function ok() {
  err.style.display = "none";
}
