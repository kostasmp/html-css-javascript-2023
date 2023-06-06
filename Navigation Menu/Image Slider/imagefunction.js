
let picindex = 1;
const g = document.getElementById("picone");
const h = document.getElementById("pictwo");
const j = document.getElementById("picthree");
const k = document.getElementById("picfour");
showpics(picindex); //this will be a function that will show the pic


function gotopic(n) //n is a number that is used to check which pic we see each time
{

	showpics(picindex += n);
}


function currentpic(n)
{
	showpics(picindex = n);
}

// functionality to show each pic one at a time
function showpics(n)
{
	let i;
	
	let pics = document.getElementsByClassName("box");
	
	let threedots = document.getElementsByClassName("dot");
	
	if(n > pics.length)
		{
			picindex = 1;
		}
	if(n < 1)
		{
			picindex = pics.length;
		}
	for(i = 0; i < pics.length; i++)
		{
			pics[i].style.display = "none";
		}
	
	    for(i = 0; i < threedots.length; i++)
		{
			threedots[i].className = threedots[i].className.replace("active", "");
		}
	    pics[picindex - 1].style.display = "block";
	    threedots[picindex - 1].className += "active";
	}

	function revealtextone(){
		if(g.innerText === undefined || g.innerText === "")
		{
			g.innerText = 'hi from the forest';
			g.style.color = "white";
			g.style.marginLeft = "35%";
			g.style.marginTop = "18%";
			g.style.fontSize = "20px";
			g.style.fontFamily = "Lucida Handwriting";
			g.style.fontStyle = "italic";
			g.style.display = "inline-block";
			g.style.position = "absolute";

			
		}
		else
		{
			g.innerText = "";
			g.style.display = "none";
		}
     }

	function revealtexttwo(){
		if(h.innerText === undefined || h.innerText === "")
		{
			h.innerText = 'hi from the blue sky';
			h.style.color = "white";
			h.style.marginLeft = "28%";
			h.style.fontSize = "20px";
			h.style.fontFamily = "Lucida Handwriting";
			h.style.fontStyle = "italic";
			h.style.display  = "inline-block";
			h.style.position = "absolute";
		}
		else
		{
			h.innerText = "";
			h.style.display = "none";
		}
     }

	function revealtextthree(){
		if(j.innerText === undefined || j.innerText === "")
		{
			j.innerText = 'hi from the afternoon sky';
			j.style.color = "white";
			j.style.marginLeft = "23%";
			j.style.fontSize = "20px";
			j.style.fontFamily = "Lucida Handwriting";
			j.style.fontStyle = "italic";
			j.style.display = "inline-block";
			j.style.position = "absolute";
		}
		else
		{
			j.innerText = "";
			j.style.display = "none";
		}

	}

	function revealtextfour(){
		if(k.innerText === undefined || k.innerText === "")
		{
			k.innerText = 'hi from the sea';
			k.style.color = "white";
			k.style.marginLeft = "35%";
			k.style.fontSize = "20px";
			k.style.fontFamily = "Lucida Handwriting";
			k.style.fontStyle = "italic";
			k.style.display = "inline-block";
			k.style.position = "absolute";
		}
		else
		{
			k.innerText = "";
			k.style.display = "none";
		}

	}
	/*code for the image slider functionality ends here*/

	
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