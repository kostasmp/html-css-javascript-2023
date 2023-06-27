const btns = document.getElementById("start");
const btnp = document.getElementById("stop");
const btnr = document.getElementById("reset");
const btnh = document.getElementById("homepage");
const texta = document.getElementById("wtxt");
const textb = document.getElementById("btxt");
const workmins = document.getElementById("wmins");
const worksecs = document.getElementById("wsecs");
const wbox = document.getElementById("worktime");
const breakmins = document.getElementById("bmins");
const breaksecs = document.getElementById("bsecs");
const bbox = document.getElementById("breaktime");

//this will be used as a trigger in the buttons to check if the timer runs or not
let startpomotimer;
let timeractive = true;

btns.addEventListener("click", function(){
    if(startpomotimer === undefined)
    {
        startpomotimer = setInterval(pomotimer, 1000); // pomotimer is the function of the timer that will be created
    }
    else
    {
        alert("Clock is running");
    }
})

btnr.addEventListener("click", function(){
    workmins.innerText = "25";
    worksecs.innerText = "00";
    texta.style.color = "white";
    texta.style.backgroundColor = '';
    wbox.style.color = "white";
    breakmins.innerText = "05";
    breaksecs.innerText = "00";
    textb.style.color = "white";
    textb.style.backgroundColor = '';
    bbox.style.color = "white";
    stoppomotimer() // this function stops the timer, it's defined in the next lines
    startpomotimer = undefined;
})

btnp.addEventListener("click", function(){
    stoppomotimer()
    startpomotimer = undefined;
})

btnh.addEventListener("click", function(){
    window.location.href = '../Pomodoro Homepage/index.html'
})

// create the pomotimer and the stoppomotimer functions



function pomotimer()
{
    if(worksecs.innerText != 0)
    {
        texta.style.color = "white";
        texta.style.backgroundColor = "#4b9a9b";
        wbox.style.color = "black";
        worksecs.innerText--;
        if(worksecs.innerText < 10)
        {
            worksecs.innerText = "0" + worksecs.innerText
        }
    }
    else if(worksecs.innerText == 0 && workmins.innerText != 0)
    {
        worksecs.innerText = 59;
        workmins.innerText--;
        if(workmins.innerText < 10)
        {
            workmins.innerText = "0" + workmins.innerText;
        }
    }
  if(worksecs.innerText == 0 && workmins.innerText == 0)
  {
    texta.style.color = "white";
    texta.style.backgroundColor = '';
    wbox.style.color = "white"
    textb.style.color = "white";
    textb.style.backgroundColor = "#ff4da6";
    bbox.style.color = "black";

    if(breaksecs.innerText != 0)
    {
        breaksecs.innerText--;
        if(breaksecs.innerText < 10)
        {
            breaksecs.innerText = "0" + breaksecs.innerText;
        }
    }
    else if(breaksecs.innerText == 0 && breakmins.innerText != 0)
    {
        breaksecs.innerText = 59;
        breakmins.innerText--;
        if(breakmins.innerText < 10)
        {
            breakmins.innerText = "0" + breakmins.innerText;
        }
    }
  }
  if(worksecs.innerText == 0 && workmins.innerText == 0 && breaksecs.innerText == 0 && breakmins.innerText == 0)
  {
    worksecs.innerText = "00";
    workmins.innerText = 25;
    texta.style.color = "white";
    texta.style.backgroundColor = "#4b9a9b";
    wbox.style.color = "black";
    breaksecs.innerText = "00";
    breakmins.innerText = "0" + 5;
    textb.style.color = "white";
    textb.style.backgroundColor = '';
    bbox.style.color = "white";
  }
}


function stoppomotimer()
{
    clearInterval(startpomotimer);
}

