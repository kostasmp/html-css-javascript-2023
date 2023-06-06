const h = document.getElementById("hour");
const m =  document.getElementById("minutes");
const s = document.getElementById("seconds");
const btnstart = document.getElementById("start");
const btnstop = document.getElementById("stop");
const btnreset = document.getElementById("reset")

//TodoStep1. make the function for the clock that will be used in the button
let controltimer; 
function clock()
{
    if(s.innerText != 0)
    s.innerText = (parseInt(s.innerText, 10) -1).toString().padStart(2, "0");
    else if(m.innerText != 0 && s.innerText == 0)
    {
        s.innerText = 59;
        m.innerText = (parseInt(m.innerText, 10) -1).toString().padStart(2, "0");
        if(m.innerText < 5)
        {
          m.style.color = "red";
          s.style.color = "red";
        }
        if(h.innerText < 1)
        {
          h.style.color = "orange";
          m.style.color = "orange";
          s.style.color = "orange";
        }
    }
    else if(h.innerText != 0 && m.innerText == 0 && s.innerText == 0)
    {
        s.innerText = 59;
        m.innerText = 59;
        h.innerText = (parseInt(h.innerText, 10) -1).toString().padStart(2, "0");
    }
}

//TodoStep2. event listener for the button, here we call the above function
btnstart.addEventListener("click", function(){
       if(controltimer === undefined)
       {
         controltimer = setInterval(clock, 1000);
       }
       else
       {
         alert("Clock is running");
       }
})

//TodoStep3. make the function that will be used in the stop and reset buttons
function stoptimer()
{
  clearInterval(controltimer);
}

btnstop.addEventListener("click", function(){
  stoptimer();
})

btnreset.addEventListener("click", function(){
   s.innerText = "00";
   s.style.color = "#006600";
   m.innerText = "00"
   m.style.color = "#006600";
   h.innerText = (parseInt(3, 10) -1).toString().padStart(2, "0");
   h.style.color = "#006600";
   stoptimer();
   controltimer = undefined;
})


var firstbutton = document.getElementById("b-one");
firstbutton.addEventListener("click", function(){
    window.location.href = '../HomePage/index.html';
})


function showgames() {
  document.getElementById("games").classList.toggle("show");
}

function showimages(){
  document.getElementById("imchoices").classList.toggle("show");
}

function showmenu(){
  document.getElementById("choices").classList.toggle("show");
}