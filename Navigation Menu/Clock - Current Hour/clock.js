/*functionality of the clock*/
const a = document.getElementById("clockshow");
const b = document.getElementById("revealtime");
const c = document.getElementById("hidetime");
let checktimer = null;
b.addEventListener("click", showtime)


function showtime()
  {
    let c = new Date();
        let h = c.getHours();
        if(h < 10)
        {
            h = "0" + h;
        }
        let m = c.getMinutes();
        if(m < 10)
        {
            m = "0" + m;
        }
        let s = c.getSeconds();
        if(s < 10)
        {
            s = "0" + s;
        }
       a.innerText = h + ":" + m + ":" + s;
       checktimer = setTimeout(showtime, 1000);
  }

  c.addEventListener("click", stoptime)

  function stoptime()
  {
      clearInterval(checktimer);
      a.style.display = "inline-block";
      a.style.color = "blueviolet";
      a.style.backgroundColor = "ightblue";
      a.innerText = "H:M:S"
  }
/*code for the functionality ends here*/



var firstbutton = document.getElementById("b-one");
firstbutton.addEventListener("click", function(){
    window.location.href = '../HomePage/index.html';
})





function showgames() {
  var gamesDropdown = document.getElementById("games");
  gamesDropdown.classList.toggle("show");
}

function showimages(){
  document.getElementById("imchoices").classList.toggle("show");
}

function showmenu(){
  document.getElementById("choices").classList.toggle("show");
}

