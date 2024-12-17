const mode = document.getElementById("lightanddark");
const title = document.getElementById("title");
const firstbox = document.getElementById("boxone");
const secondbox = document.getElementById("boxtwo");
const thirdbox = document.getElementById("boxthree");
let darkmodeon = false;
const moon = mode.querySelector(".bi-moon-fill");
const sun = mode.querySelector(".bi-sun-fill");
mode.addEventListener("click", function(){
    const bodycolor = document.body;
    //const icon = mode.querySelector("svg");
    darkmodeon = !darkmodeon;
    
    bodycolor.classList.toggle("dark-mode");
    title.classList.toggle("dark-mode-h1");
    firstbox.classList.toggle("dark-boxone-div");
    secondbox.classList.toggle("dark-boxtwo-div");
    thirdbox.classList.toggle("dark-boxthree-div");
    if (bodycolor.classList.contains("dark-mode"))
    {
        firstbox.style.backgroundImage = "linear-gradient(-90deg, #102542, #1e3a56, #489fb5, #82c0cc, #f4a261)";
        secondbox.style.backgroundImage = "linear-gradient(-90deg, #6a0572, #ab83a1, #5c946e, #1b4332, #f4a261)";
        thirdbox.style.backgroundImage = "linear-gradient(-90deg, #3E1E68, #216869, #303841, #D9BF77, #ECE5D1)";
        thirdbox.style.borderLeftColor ="black";
        //icon.classList.remove("bi bi-moon-fill");
        //icon.classList.add("bi bi-brightness-high-fill");
    }
    else
    {
        firstbox.style.backgroundImage = "linear-gradient(90deg, #F7B7A3, #ED828A, #F9A875, #D4A5A5, #CBB4D4)";
        secondbox.style.backgroundImage = "linear-gradient(90deg, #f7e4d5, #f0c6a0, #c3d0d9, #a4c3d2, #5a7a7a )";
        thirdbox.style.backgroundImage = "linear-gradient(90deg, #ff6b6b, #f4a261, #d9bf77, #acd8aa, #83c5be)";
        thirdbox.style.borderLeft = "white";
        //icon.classList.remove("bi bi-brightness-high-fill");
        //icon.classList.add("bi bi-moon-fill");
    }

   // moon.style.display = darkmodeon ? "none" : "inline";
    //sun.style.display = darkmodeon ? "inline" : "none";
    if(darkmodeon == false)
    {
        moon.style.display = "inline";
        sun.style.display = "none";
        mode.style.backgroundColor = "white";
    }
    else if(darkmodeon == true)
    {
      moon.style.display = "none";
      sun.style.display =  "inline";
      sun.style.color = "white";
      mode.style.backgroundColor = "black";
    }
})