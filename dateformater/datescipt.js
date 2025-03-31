
const dateformats = document.getElementById("date-choices");
const showdate = document.getElementById("display-date");
const showTime = document.getElementById("display-time");


function displayDate()
{
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
const year = date.getFullYear();



//add leading 0 if day or month values are less than 10
day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;

const fulldayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fullmonthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "Octomber", "November", "December"];

// get the short month name
const shortMonth = monthNames[month - 1];

// get the full month name
const fullMonth = fullmonthNames[month - 1];

// get the full day name
const fullDay = fulldayNames[date.getDay()];

const formattedDate = `${year}-${month}-${day}`;
showdate.textContent = formattedDate;

dateformats.addEventListener("change", () => {
    console.log("Selected Date Format", `"${dateformats.value}"`);
    switch (dateformats.value.trim()) 
    { 
        case "YYYY-MM-DD":
            showdate.textContent = `${year}-${month}-${day}`;
            break;
        case "MM/DD/YYYY":
            showdate.textContent = `${month}/${day}/${year}`;
            break;
        case "DD/MM/YYYY":  
            showdate.textContent = `${day}/${month}/${year}`;
            break;
        case "Short Month Date":
            showdate.textContent = `${shortMonth} ${day}, ${year}`
            break;
        case "Full Date Format":
            showdate.textContent = `${fullDay} ${day} ${fullMonth}, ${year}`
            break;
        default:
            showdate.textContent = formattedDate;
    }
})
}

displayDate()


//Todo: display continuously the current time

document.addEventListener("DOMContentLoaded", () => {
     function displayTime()
     {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let secs = now.getSeconds();
    
        //? add leading 0s if needed
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        secs = secs < 10 ? '0' + secs : secs;
    
        showTime.textContent = `${hours}h:${minutes}m:${secs}s`;
     }
    
     displayTime();
     setInterval(displayTime, 1000);
 })

