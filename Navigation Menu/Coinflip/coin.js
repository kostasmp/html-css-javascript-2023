var tossbutton = document.getElementById("toss");
var result = document.getElementById("res");
tossbutton.addEventListener("click", cointoss)

function cointoss(){
var num = Math.random();
	if(num < 0.5)
	{
	  result.innerText = 'Result: ' + 'Heads';
	}
	else{
	  result.innerHTML = 'Result: ' + 'Tails';
	}
}


var firstbutton = document.getElementById("b-one");
	firstbutton.addEventListener("click", function(){
	window.location.href = '../HomePage/index.html';
})


function showgames(){
    document.getElementById("games").classList.toggle("show");
}

function showimages(){
    document.getElementById("imchoices").classList.toggle("show");
  }

function showmenu(){
    document.getElementById("choices").classList.toggle("show");
}