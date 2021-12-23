'use strict';

class Player {
  constructor(name, defence, speed, shoot, pass, tech) {
    this.name = name;
    this.defence = defence;
    this.speed = speed;
    this.shoot = shoot;
    this.pass = pass;
    this.tech = tech;
  }
}

const mohamad = new Player('moe', 6, 6, 10, 10, 10);
const keshavarz = new Player('keshavarz', 10, 6, 9, 8, 7);
const bahram = new Player('bahram', 7, 5, 5, 7, 6);
const bahman = new Player('bahman', 5, 4, 8, 7, 9);
const rajab = new Player('rajab', 2, 2, 5, 9, 4);
const ehsan = new Player('ehsan', 8, 6, 8, 7, 7);
const navid = new Player('navid', 6, 5, 7, 7, 5);
const shahab = new Player('shahab', 8, 5, 6, 6, 6);
const mahmudi = new Player('mahmudi', 7, 10, 7, 7, 6);
const rasool = new Player('rasool', 5, 2, 8, 9, 9);
const mehrdad = new Player('mehrdad', 5, 7, 6, 5, 8);
const mehrshad = new Player('mehrshad', 7, 7, 8, 8, 8);
const iman = new Player('iman', 5, 5, 7, 7, 8);
const hamidian = new Player('hamidian', 6, 3, 2, 2, 2);
const payam = new Player('payam', 7, 6, 9, 7, 7);
const farahani = new Player('farahani', 0, 7, 7, 7, 8);
const mamul = new Player('mamul', 6, 6, 8, 7, 6);
const ali1 = new Player('ali', 8, 7, 6, 6, 5);
const ali2 = new Player('ali2', 7, 6, 7, 7, 7);
const masoud = new Player('masoud', 7, 7, 7, 7, 7);
const reza = new Player('reza', 7, 7, 7, 7, 7);
const unknown = new Player('unknown');

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
  farahani,
  mamul,
  ali1,
  ali2,
  masoud,
  reza,
  unknown,
];

const skillcard = document.getElementById('plcard');
const bar = '█';
const empbar = '▒';

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

///////////////////////////////////////////////////////////////////////////////////////

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
  location.replace('index.html');
}
///////////////////////////////////////////////

function ovr(q) {
  const ovr = Math.ceil((q.defence + q.speed + q.shoot + q.pass + q.tech) / 5);
  q.ovr = ovr;
  return ovr;
}
///////////////////SECTION/// FUNCTION SKILLS//////////////////////////////////////

function def(q) {
  let skl = 0;
  for (let i = 0; i < q.length; i++) {
    skl = skl + q[i].defence;
  }
  skl = Math.ceil(skl / q.length);
  return skl;
}

function speed(q) {
  let skl = 0;
  for (let i = 0; i < q.length; i++) {
    skl = skl + q[i].speed;
  }
  skl = Math.ceil(skl / q.length);
  return skl;
}

function shoot(q) {
  let skl = 0;
  for (let i = 0; i < q.length; i++) {
    skl = skl + q[i].shoot;
  }
  skl = Math.ceil(skl / q.length);
  return skl;
}

function pass(q) {
  let skl = 0;
  for (let i = 0; i < q.length; i++) {
    skl = skl + q[i].pass;
  }
  skl = Math.ceil(skl / q.length);
  return skl;
}

function tech(q) {
  let skl = 0;
  for (let i = 0; i < q.length; i++) {
    skl = skl + q[i].tech;
  }
  skl = Math.ceil(skl / q.length);
  return skl;
}

//////////////////////////////SECTION//////////// MUSIC//////////////////////////////////////
var pause = document.querySelector('.pause');
var audio = document.querySelector('.audio');

document.getElementsByClassName('.audio').volume = 0;

function Play() {
  if (audio.paused) {
    audio.play();
    document.getElementById('onoff').src = 'src/img/Sound On.png';
  } else {
    audio.pause();
    document.getElementById('onoff').src = 'src/img/Sound Off.png';
  }
}

var selectSoundEffect = new Audio();
selectSoundEffect.src = 'src/msc/Hover Effect.mp3';

var deselectSoundEffect = new Audio();
deselectSoundEffect.src = 'src/msc/Select.mp3';

////////////////////////////////////////////////////////////////////////////////////////
const teamPlayerss = document.querySelector('.selected__players');
var all = document.getElementsByClassName('players__container');

function selectedId(pid) {
  var element = document.getElementById(pid.id);

  element.classList.toggle('blink-1');
  element.classList.toggle('fade');

  // provide Index number based on name property of object, element.id = object.name
  var obj = objtoarr(element.id, allPlayers);

  if (element.classList.contains('fade') && thisWeekPlayers.includes(unknown)) {
    selectSoundEffect.play();
    const addPlayer = `
    <div class="lineup__box blink-2" id=${element.id}x>
      <img
        src="src/img/lineup/${pid.id}.png "
        alt="Add Player"
        class="lineup__photo_first"
      />
    </div>`;
    document.getElementById('plc').src = `src/img/lineup/${pid.id}.png`;
    document.getElementById('cardname').innerHTML = `${pid.id}`;
    document.getElementById('cardname1').innerHTML = `${pid.id}`;

    document.getElementById('carddef').innerHTML = `${bar.repeat(
      obj.defence
    )}${empbar.repeat(10 - obj.defence)}`;

    document.getElementById('carddef1').innerHTML = `${bar.repeat(
      obj.defence
    )}${empbar.repeat(10 - obj.defence)}`;

    document.getElementById('cardspeed').innerHTML = `${bar.repeat(
      obj.speed
    )}${empbar.repeat(10 - obj.speed)}`;

    document.getElementById('cardspeed1').innerHTML = `${bar.repeat(
      obj.speed
    )}${empbar.repeat(10 - obj.speed)}`;

    document.getElementById('cardshoot').innerHTML = `${bar.repeat(
      obj.shoot
    )}${empbar.repeat(10 - obj.shoot)}`;

    document.getElementById('cardshoot1').innerHTML = `${bar.repeat(
      obj.shoot
    )}${empbar.repeat(10 - obj.shoot)}`;

    document.getElementById('cardpass').innerHTML = `${bar.repeat(
      obj.pass
    )}${empbar.repeat(10 - obj.pass)}`;

    document.getElementById('cardpass1').innerHTML = `${bar.repeat(
      obj.pass
    )}${empbar.repeat(10 - obj.pass)}`;

    document.getElementById('cardtech').innerHTML = `${bar.repeat(
      obj.tech
    )}${empbar.repeat(10 - obj.tech)}`;

    document.getElementById('cardtech1').innerHTML = `${bar.repeat(
      obj.tech
    )}${empbar.repeat(10 - obj.tech)}`;

    teamPlayerss.insertAdjacentHTML('beforeend', addPlayer);

    thisWeekPlayers.push(obj);

    ///removing unknown player///
    thisWeekPlayers.splice(unknown, 1);
    document.getElementById('unknown').remove();

    //////////////////////////////
  } else if (
    element.classList.contains('fade') &&
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
    document.getElementById('plc').src = `src/img/lineup/${pid.id}.png`;
    document.getElementById('cardname').innerHTML = `${pid.id}`;
    document.getElementById('cardname1').innerHTML = `${pid.id}`;

    document.getElementById('carddef').innerHTML = `${bar.repeat(
      obj.defence
    )}${empbar.repeat(10 - obj.defence)}`;

    document.getElementById('carddef1').innerHTML = `${bar.repeat(
      obj.defence
    )}${empbar.repeat(10 - obj.defence)}`;

    document.getElementById('cardspeed').innerHTML = `${bar.repeat(
      obj.speed
    )}${empbar.repeat(10 - obj.speed)}`;

    document.getElementById('cardspeed1').innerHTML = `${bar.repeat(
      obj.speed
    )}${empbar.repeat(10 - obj.speed)}`;

    document.getElementById('cardshoot').innerHTML = `${bar.repeat(
      obj.shoot
    )}${empbar.repeat(10 - obj.shoot)}`;

    document.getElementById('cardshoot1').innerHTML = `${bar.repeat(
      obj.shoot
    )}${empbar.repeat(10 - obj.shoot)}`;

    document.getElementById('cardpass').innerHTML = `${bar.repeat(
      obj.pass
    )}${empbar.repeat(10 - obj.pass)}`;

    document.getElementById('cardpass1').innerHTML = `${bar.repeat(
      obj.pass
    )}${empbar.repeat(10 - obj.pass)}`;

    document.getElementById('cardtech').innerHTML = `${bar.repeat(
      obj.tech
    )}${empbar.repeat(10 - obj.tech)}`;

    document.getElementById('cardtech1').innerHTML = `${bar.repeat(
      obj.tech
    )}${empbar.repeat(10 - obj.tech)}`;

    teamPlayerss.insertAdjacentHTML('beforeend', addPlayer1);

    thisWeekPlayers.push(obj);
  } else if (!element.classList.contains('fade')) {
    deselectSoundEffect.play();
    thisWeekPlayers.splice(thisWeekPlayers.indexOf(obj), 1);
    document.getElementById(`${element.id}x`).remove();

    if (thisWeekPlayers.length === 1) {
      document
        .getElementById(`${thisWeekPlayers[0].name}x`)
        .classList.remove('lineup__box1');
      document
        .getElementById(`${thisWeekPlayers[0].name}x`)
        .classList.add('lineup__box');
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
      document.getElementById('plc').src = `src/img/lineup/Unknown.png`;
      document.getElementById('cardname').innerHTML = 'Unknown';
      document.getElementById('cardname1').innerHTML = 'Unknown';
      document.getElementById('carddef').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('carddef1').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardspeed').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardspeed1').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardshoot').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardshoot1').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardpass').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardpass1').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardtech').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      document.getElementById('cardtech1').innerHTML = `${bar.repeat(
        5
      )}${empbar.repeat(5)}`;

      teamPlayerss.insertAdjacentHTML('afterbegin', addUnknown);
    }
  }
}

var disp = document.getElementById('mdl');
var disp1 = document.getElementById('mdl2');
var err = document.getElementById('mdlerror');
const errtxt = document.getElementById('errtxt');
let teamfair1 = [];
let teamfair2 = [];
let teamfair3 = [];
let x = 0;
let i = x + 1;

function equalizer(team) {
  var overall = 0;
  for (i = 0; i < team.length; i++) {
    ovr(team[i]);
    overall = overall + team[i].ovr;
  }
  return overall;
}
function firstToEnd(list) {
  for (i; i < list.length; i++) {
    if (list[x].ovr === list[i].ovr) {
      teamfair1.push(list[x]);
      teamfair2.push(list[i]);
      list.splice(x, 1);
      list.splice(i - 1, 1);
      x = 0;
      i = x + 1;
      let splitted = list;
      return splitted;
    }
  }
}

function sbmt() {
  var sbmt = document.getElementsByClassName('selected__players');
  document.getElementById('ar1').style.opacity = '1';

  if (thisWeekPlayers.length >= 2) {
    setTimeout(function () {
      disp.style.display = 'flex';
    }, 500);
    all[0].classList.add('noHover');
    sbmt[0].classList.add('submitted');
    sbmt[0].classList.add('blink-1');
    document.getElementById('btn').style.backgroundColor = 'green';
    document.getElementById('btn').style.color = 'white';
  } else {
    err.style.display = 'flex';
    errtxt.innerHTML = ' Please select at least 2 players';
  }
}

function bck() {
  disp.style.display = 'none';

  all[0].classList.remove('noHover');
  document.getElementById('btn').style.backgroundColor = '#eee';
  document.getElementById('btn').style.color = '#222';
  document.getElementById('ar2').style.opacity = '0';
}
function bck2() {
  disp1.style.display = 'none';
  disp.style.display = 'flex';
  document.getElementById('ar4').style.opacity = '0';
}

function choice(elem) {
  var arrow1 = document.getElementById('ar1');
  var arrow2 = document.getElementById('ar2');
  if (elem.id == 'two') {
    arrow1.style.opacity = '1';
    arrow2.style.opacity = '0';
  } else if (elem.id == 'three') {
    arrow2.style.opacity = '1';
    arrow1.style.opacity = '0';
  }
}

function choice1(elem) {
  var arrow1 = document.getElementById('ar3');
  var arrow2 = document.getElementById('ar4');
  if (elem.id == 'fr') {
    arrow1.style.opacity = '1';
    arrow2.style.opacity = '0';
  } else if (elem.id == 'rnd') {
    arrow2.style.opacity = '1';
    arrow1.style.opacity = '0';
  }
}

function start() {
  /////////////SECTION/////////////TWO TEAMS FAIR//////////////////////////////////////////
  const secSelect = document.getElementById('select');

  if (
    document.getElementById('ar3').style.opacity === '1' &&
    document.getElementById('ar1').style.opacity === '1'
  ) {
    for (i = 0; i < thisWeekPlayers.length; i++) {
      ovr(thisWeekPlayers[i]);
    }
    thisWeekPlayers.sort((a, b) => (a.ovr > b.ovr ? -1 : 1));

    do {
      firstToEnd(thisWeekPlayers);
    } while (firstToEnd(thisWeekPlayers) != undefined);

    do {
      if (
        firstToEnd(thisWeekPlayers) === undefined &&
        x != thisWeekPlayers.length - 1
      ) {
        function pointer(listn) {
          x = x + 1;
          i = x + 1;

          return listn;
        }
        pointer(thisWeekPlayers);
        firstToEnd(thisWeekPlayers);
      }
    } while (x != thisWeekPlayers.length - 1 && thisWeekPlayers.length != 0);

    if (thisWeekPlayers != 0) {
      teamfair1.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);

      if (thisWeekPlayers != 0) {
        teamfair2.push(thisWeekPlayers[0]);
        thisWeekPlayers.splice(0, 1);
      }

      if (thisWeekPlayers != 0) {
        teamfair2.push(thisWeekPlayers[0]);
        thisWeekPlayers.splice(0, 1);
      }

      if (thisWeekPlayers != 0) {
        teamfair1.push(thisWeekPlayers[0]);
        thisWeekPlayers.splice(0, 1);
      }
      if (thisWeekPlayers != 0) {
        teamfair1.push(thisWeekPlayers[0]);
        thisWeekPlayers.splice(0, 1);
      }
    }
    console.log(equalizer(teamfair1));
    console.log(equalizer(teamfair2));

    let team1 = teamfair1;
    let team2 = teamfair2;
    secSelect.innerHTML = `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="styleTeams.css" />
        <title>Wednesday!</title>
      </head>
      <body>
        <header>
          <h1>We have three Balanced teams!</h1>
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
                <div class="skillbox"> 

                <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                  def(team1)
                )}${empbar.repeat(10 - def(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                  speed(team1)
                )}${empbar.repeat(10 - speed(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                  shoot(team1)
                )}${empbar.repeat(10 - shoot(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                  pass(team1)
                )}${empbar.repeat(10 - pass(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                  tech(team1)
                )}${empbar.repeat(10 - tech(team1))}</p> </div> </div>




                <p class="textbox">OVERALL:${equalizer(team1)}</p>
                </div>

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
                <div class="skillbox">  
                <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                  def(team2)
                )}${empbar.repeat(10 - def(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                  speed(team2)
                )}${empbar.repeat(10 - speed(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                  shoot(team2)
                )}${empbar.repeat(10 - shoot(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                  pass(team2)
                )}${empbar.repeat(10 - pass(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                  tech(team2)
                )}${empbar.repeat(10 - tech(team2))}</p> </div> </div>
                <p class="textbox">OVERALL:${equalizer(team2)}</p>
                </div>
      
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
            
           
        </section>
        
        <div class="btn__container">
          <button class="btn-main btn" onclick="backToMain()">Back</button>
          <button class="btn-main btn" onclick="again()">Again</button>
        </main>
      </body>
      </html>
    
    `;

    const t1p = document.getElementById('t1p');
    const t1px = document.getElementById('t1txt');

    for (let i = 1; i < team1.length; i++) {
      const addToT1p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team1[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
      t1p.insertAdjacentHTML('beforeend', addToT1p);
      const addtxt1 = `<p class="textbox">${team1[i].name}</p>`;
      t1px.insertAdjacentHTML('beforeend', addtxt1);
    }

    const t2p = document.getElementById('t2p');
    const t2px = document.getElementById('t2txt');

    for (let i = 1; i < team2.length; i++) {
      const addToT2p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team2[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
      t2p.insertAdjacentHTML('beforeend', addToT2p);
      const addtxt2 = `<p class="textbox">${team2[i].name}</p>`;
      t2px.insertAdjacentHTML('beforeend', addtxt2);
    }
  }

  /////////////SECTION////////THREE TEAMS FAIR///////////////////////////////////////
  else if (
    document.getElementById('ar3').style.opacity === '1' &&
    document.getElementById('ar2').style.opacity === '1'
  ) {
    for (i = 0; i < thisWeekPlayers.length; i++) {
      ovr(thisWeekPlayers[i]);
    }
    thisWeekPlayers.sort((a, b) => (a.ovr > b.ovr ? -1 : 1));

    for (let i = 0; i < thisWeekPlayers.length / 6; i++) {
      teamfair1.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
      teamfair2.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
      teamfair3.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
      teamfair3.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
      teamfair2.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
      teamfair1.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }

    if (thisWeekPlayers.length != 0) {
      teamfair1.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }
    if (thisWeekPlayers.length != 0) {
      teamfair2.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }
    if (thisWeekPlayers.length != 0) {
      teamfair3.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }
    if (thisWeekPlayers.length != 0) {
      teamfair3.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }
    if (thisWeekPlayers.length != 0) {
      teamfair2.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }
    if (thisWeekPlayers.length != 0) {
      teamfair1.push(thisWeekPlayers[0]);
      thisWeekPlayers.splice(0, 1);
    }

    let team1 = teamfair1;
    let team2 = teamfair2;
    let team3 = teamfair3;

    secSelect.innerHTML = `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="styleTeams.css" />
        <title>Wednesday!</title>
      </head>
      <body>
        <header>
          <h1>We have three Balanced teams!</h1>
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
                <div class="skillbox"> 

                <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                  def(teamfair1)
                )}${empbar.repeat(10 - def(teamfair1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                  speed(teamfair1)
                )}${empbar.repeat(10 - speed(teamfair1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                  shoot(teamfair1)
                )}${empbar.repeat(10 - shoot(teamfair1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                  pass(teamfair1)
                )}${empbar.repeat(10 - pass(teamfair1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                  tech(teamfair1)
                )}${empbar.repeat(10 - tech(teamfair1))}</p> </div> </div>




                <p class="textbox">OVERALL:${equalizer(teamfair1)}</p>
                </div>

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
                <div class="skillbox">  
                <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                  def(teamfair2)
                )}${empbar.repeat(10 - def(teamfair2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                  speed(teamfair2)
                )}${empbar.repeat(10 - speed(teamfair2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                  shoot(teamfair2)
                )}${empbar.repeat(10 - shoot(teamfair2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                  pass(teamfair2)
                )}${empbar.repeat(10 - pass(teamfair2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                  tech(teamfair2)
                )}${empbar.repeat(10 - tech(teamfair2))}</p> </div> </div>
                <p class="textbox">OVERALL:${equalizer(teamfair2)}</p>
                </div>
      
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
              <div class="skillbox">  
              <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                def(teamfair3)
              )}${empbar.repeat(10 - def(teamfair3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                speed(teamfair3)
              )}${empbar.repeat(10 - speed(teamfair3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                shoot(teamfair3)
              )}${empbar.repeat(10 - shoot(teamfair3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                pass(teamfair3)
              )}${empbar.repeat(10 - pass(teamfair3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                tech(teamfair3)
              )}${empbar.repeat(10 - tech(teamfair3))}</p> </div> </div>
              <p class="textbox">OVERALL:${equalizer(teamfair3)}</p>
              </div>
    
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

    const t1p = document.getElementById('t1p');
    const t1px = document.getElementById('t1txt');

    for (let i = 1; i < team1.length; i++) {
      const addToT1p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team1[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
      t1p.insertAdjacentHTML('beforeend', addToT1p);
      const addtxt1 = `<p class="textbox">${team1[i].name}</p>`;
      t1px.insertAdjacentHTML('beforeend', addtxt1);
    }

    const t2p = document.getElementById('t2p');
    const t2px = document.getElementById('t2txt');

    for (let i = 1; i < team2.length; i++) {
      const addToT2p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team2[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
      t2p.insertAdjacentHTML('beforeend', addToT2p);
      const addtxt2 = `<p class="textbox">${team2[i].name}</p>`;
      t2px.insertAdjacentHTML('beforeend', addtxt2);
    }
    const t3p = document.getElementById('t3p');
    const t3px = document.getElementById('t3txt');

    for (let i = 1; i < team3.length; i++) {
      const addToT3p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team3[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />
  
      </div>`;
      t3p.insertAdjacentHTML('beforeend', addToT3p);
      const addtxt3 = `<p class="textbox">${team3[i].name}</p>`;
      t3px.insertAdjacentHTML('beforeend', addtxt3);
    }
  }

  //////////////////////////////SECTION////TWO TEAMS RANDOM/////////////////////////
  else if (
    document.getElementById('ar1').style.opacity === '1' &&
    document.getElementById('ar4').style.opacity === '1'
  ) {
    let shuffledplayers = shuffle(thisWeekPlayers);

    let team1 = shuffledplayers;
    let team2 = shuffledplayers.splice(0, shuffledplayers.length / 2);

    secSelect.innerHTML = `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="styleTeams.css" />
      <title>Wednesday!</title>
    </head>
    <body>
      <header>
        <h1>We have three Balanced teams!</h1>
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
              <div class="skillbox"> 

              <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                def(team1)
              )}${empbar.repeat(10 - def(team1))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                speed(team1)
              )}${empbar.repeat(10 - speed(team1))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                shoot(team1)
              )}${empbar.repeat(10 - shoot(team1))}</p> </div> </div>



              <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                pass(team1)
              )}${empbar.repeat(10 - pass(team1))}</p> </div> </div>



              <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                tech(team1)
              )}${empbar.repeat(10 - tech(team1))}</p> </div> </div>




              <p class="textbox">OVERALL:${equalizer(team1)}</p>
              </div>

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
              <div class="skillbox">  
              <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                def(team2)
              )}${empbar.repeat(10 - def(team2))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                speed(team2)
              )}${empbar.repeat(10 - speed(team2))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                shoot(team2)
              )}${empbar.repeat(10 - shoot(team2))}</p> </div> </div>



              <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                pass(team2)
              )}${empbar.repeat(10 - pass(team2))}</p> </div> </div>



              <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                tech(team2)
              )}${empbar.repeat(10 - tech(team2))}</p> </div> </div>
              <p class="textbox">OVERALL:${equalizer(team2)}</p>
              </div>
    
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
          
         
      </section>
      
      <div class="btn__container">
        <button class="btn-main btn" onclick="backToMain()">Back</button>
        <button class="btn-main btn" onclick="again()">Again</button>
      </main>
    </body>
    </html>
  
  `;

    const t1p = document.getElementById('t1p');
    const t1px = document.getElementById('t1txt');

    for (let i = 1; i < team1.length; i++) {
      const addToT1p = `<div class="lineup__box">
      <img
        src="src/img/lineup/${team1[i].name}.png"
        alt="Add Player"
        class="lineup__photo-rest"
      />

    </div>`;
      t1p.insertAdjacentHTML('beforeend', addToT1p);
      const addtxt1 = `<p class="textbox">${team1[i].name}</p>`;
      t1px.insertAdjacentHTML('beforeend', addtxt1);
    }

    const t2p = document.getElementById('t2p');
    const t2px = document.getElementById('t2txt');

    for (let i = 1; i < team2.length; i++) {
      const addToT2p = `<div class="lineup__box">
      <img
        src="src/img/lineup/${team2[i].name}.png"
        alt="Add Player"
        class="lineup__photo-rest"
      />

    </div>`;
      t2p.insertAdjacentHTML('beforeend', addToT2p);
      const addtxt2 = `<p class="textbox">${team2[i].name}</p>`;
      t2px.insertAdjacentHTML('beforeend', addtxt2);
    }
  }

  //////////////////////////////SECTION////THREE TEAMS RANDOM/////////////////////////
  else {
    console.log('random');
    console.log('threeteams');

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
        <link rel="stylesheet" href="styleTeams.css" />
        <title>Wednesday!</title>
      </head>
      <body>
        <header>
          <h1>We have three random teams!</h1>
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
                <div class="skillbox">  
                <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                  def(team1)
                )}${empbar.repeat(10 - def(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                  speed(team1)
                )}${empbar.repeat(10 - speed(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                  shoot(team1)
                )}${empbar.repeat(10 - shoot(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                  pass(team1)
                )}${empbar.repeat(10 - pass(team1))}</p> </div> </div>



                <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                  tech(team1)
                )}${empbar.repeat(10 - tech(team1))}</p> </div> </div>
                <p class="textbox">OVERALL:${equalizer(team1)}</p>
                </div>
      
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
                <div class="skillbox">  
                <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                  def(team2)
                )}${empbar.repeat(10 - def(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                  speed(team2)
                )}${empbar.repeat(10 - speed(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                  shoot(team2)
                )}${empbar.repeat(10 - shoot(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                  pass(team2)
                )}${empbar.repeat(10 - pass(team2))}</p> </div> </div>



                <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                  tech(team2)
                )}${empbar.repeat(10 - tech(team2))}</p> </div> </div>
                <p class="textbox">OVERALL:${equalizer(team2)}</p>
                </div>
      
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
              <div class="skillbox">  
              <p class="textbox"><div class="tbar">DEF: <div class="barbox">${bar.repeat(
                def(team3)
              )}${empbar.repeat(10 - def(team3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SPD: <div class="barbox">${bar.repeat(
                speed(team3)
              )}${empbar.repeat(10 - speed(team3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">SHT: <div class="barbox">${bar.repeat(
                shoot(team3)
              )}${empbar.repeat(10 - shoot(team3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">PAS: <div class="barbox">${bar.repeat(
                pass(team3)
              )}${empbar.repeat(10 - pass(team3))}</p> </div> </div>



              <p class="textbox"><div class="tbar">DRB: <div class="barbox">${bar.repeat(
                tech(team3)
              )}${empbar.repeat(10 - tech(team3))}</p> </div> </div>
              <p class="textbox">OVERALL:${equalizer(team3)}</p>
              </div>
    
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

    const t1p = document.getElementById('t1p');
    const t1px = document.getElementById('t1txt');

    for (let i = 1; i < team1.length; i++) {
      const addToT1p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team1[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
      t1p.insertAdjacentHTML('beforeend', addToT1p);
      const addtxt1 = `<p class="textbox">${team1[i].name}</p>`;
      t1px.insertAdjacentHTML('beforeend', addtxt1);
    }

    const t2p = document.getElementById('t2p');
    const t2px = document.getElementById('t2txt');

    for (let i = 1; i < team2.length; i++) {
      const addToT2p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team2[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />

      </div>`;
      t2p.insertAdjacentHTML('beforeend', addToT2p);
      const addtxt2 = `<p class="textbox">${team2[i].name}</p>`;
      t2px.insertAdjacentHTML('beforeend', addtxt2);
    }
    const t3p = document.getElementById('t3p');
    const t3px = document.getElementById('t3txt');

    for (let i = 1; i < team3.length; i++) {
      const addToT3p = `<div class="lineup__box">
        <img
          src="src/img/lineup/${team3[i].name}.png"
          alt="Add Player"
          class="lineup__photo-rest"
        />
  
      </div>`;
      t3p.insertAdjacentHTML('beforeend', addToT3p);
      const addtxt3 = `<p class="textbox">${team3[i].name}</p>`;
      t3px.insertAdjacentHTML('beforeend', addtxt3);
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////

function next() {
  if (document.getElementById('ar2').style.opacity == '1') {
    if (thisWeekPlayers.length >= 6) {
      disp.style.display = 'none';
      disp1.style.display = 'flex';
      document.getElementById('ar3').style.opacity = '1';
    } else {
      errtxt.innerHTML = 'Please select at least 6 players';
      err.style.display = 'flex';
    }
  } else {
    if (thisWeekPlayers.length <= 12) {
      disp.style.display = 'none';
      disp1.style.display = 'flex';
      document.getElementById('ar3').style.opacity = '1';
    } else {
      const errtxt = document.getElementById('errtxt');
      errtxt.innerHTML =
        'Two teams and more than 12 people is not a good idea!';
      err.style.display = 'flex';
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////

let array1 = ['a', 'b', 'c', 'f', 'd', 'e', 'g'];

// let team1 = [];
let team2 = [];
let team3 = [];

function ok() {
  err.style.display = 'none';
}
