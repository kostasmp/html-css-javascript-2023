var firstbutton = document.getElementById("b-one");
firstbutton.addEventListener("click", function(){
    window.location.href = 'index.html';
})

function showimages(){
    document.getElementById("imchoices").classList.toggle("show");
  }


function showmenu(){
    document.getElementById("choices").classList.toggle("show");
}

function showgames(){
    document.getElementById("games").classList.toggle("show");
}