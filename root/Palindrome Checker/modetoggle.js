const bodyelement = document.querySelector('body');

function toggleMode(){
    
    bodyelement.classList.toggle("dark-mode");
    if(bodyelement.classList.contains("dark-mode"))
    {
        console.log("Dark Mode");
        localStorage.setItem("dark-mode", "enabled");
        //colorbtn.onclick = changeDarkModeBGcolor
    }
    else
    {
        console.log("Light Mode");
        localStorage.setItem("dark-mode", "disabled");
        //colorbtn.onclick = changeLightModeBGcolor
    }

}

    //* check the stored mode on page load and persist *//
    //* the icon of the toggle button based on the stored mode on page load *//
    window.addEventListener("load", () => {
        let darkMode = localStorage.getItem("dark-mode");
        if(darkMode === "enabled")
        {
            document.body.classList.add("dark-mode");
            document.querySelector("#togglebtn input[type='checkbox']").checked = true;
        }
        else
        {
            document.body.classList.remove("dark-mode");
            document.querySelector("#togglebtn input[type='checkbox']").checked = false; 
        }
    })