const bodyelement = document.querySelector("body");

function toggleMode()
{
    bodyelement.classList.toggle("dark-mode");
    if(bodyelement.classList.contains("dark-mode"))
    {
        localStorage.setItem("dark-mode", "enabled");
    }
    else
    {
        localStorage.setItem("dark-mode", "disabled");
    }
}

window.addEventListener("load", () => {
    let darkmode = localStorage.getItem("dark-mode");
    if(darkmode === "enabled")
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