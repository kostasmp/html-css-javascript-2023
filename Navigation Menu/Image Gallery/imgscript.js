 //store the images:
const picone = 'pic1.jpg';
const pictwo = 'pic2.jpg';
const picthree = 'pic3.jpg';
const picfour = 'pic4.jpg';
 //toggle between two pics on the 1st section
const apic = document.getElementById("firstpic");
const buttona = document.getElementById("buttonone");
const imgtexta = document.getElementById("textone");
let picstate = true;
buttona.addEventListener("click", function(){
    if(picstate)
    {
        apic.src = pictwo;
        imgtexta.innerText = 'Nature in the Morning';
        imgtexta.style.color = "#88ff4d";
    }
    else
    {
        apic.src = picone;
        imgtexta.innerText = 'Nature in the Afternoon';
        imgtexta.style.color = "#cc0099";
    }
    picstate = !picstate;
})

//toggle between two pics on the second section
const bpic = document.getElementById("secondpic");
const buttonb = document.getElementById("buttontwo");
const imgtextb = document.getElementById("texttwo");
let picstatetwo = true;
buttonb.addEventListener("click", function(){
    if(picstatetwo)
    {
        bpic.src = picthree;
        imgtextb.innerText = 'Night sky without stars';
        imgtextb.style.color = "#3333cc";
    }
    else
    {
        bpic.src = pictwo;
        imgtextb.innerText = 'Nature in the Morning';
        imgtextb.style.color = "#88ff4d";
    }
    picstatetwo = !picstatetwo;
})

//toggle between two pics on the third section
const cpic = document.getElementById("thirdpic");
const buttonc = document.getElementById("buttonthree");
const imgtextc = document.getElementById("textthree");
let picstatethree =  true;
buttonc.addEventListener("click", function(){
    if(picstatethree)
    {
        cpic.src = picfour;
        imgtextc.innerText = 'Night sky with stars. Lots of stars.'
        imgtextc.style.color = "#538cc6";
    }
    else
    {
        cpic.src = picthree;
        imgtextc.innerText = 'Night sky without stars'
        imgtextc.style.color = "#3333cc";
    }
    picstatethree = !picstatethree;
})

//toggle between two pics on the fourth section
const dpic = document.getElementById("fourthpic");
const buttond = document.getElementById("buttonfour");
const imgtextd = document.getElementById("textfour");
let picstatefour =  true;
buttond.addEventListener("click", function(){
    if(picstatefour)
    {
        dpic.src = picone;
        imgtextd.innerText = 'Nature in the Afternoon';
        imgtextd.style.color = "#cc0099";
    } 
    else
    {
        dpic.src = picfour;
        imgtextd.innerText = 'Night sky with stars. Lots of stars';
        imgtextd.style.color = "#538cc6";
    }
    picstatefour = !picstatefour;
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
