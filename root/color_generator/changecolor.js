


let bodyelement = document.body;
const colorbtn = document.getElementById("changecolorbtn");
const text = document.getElementById("txt");
const displayhexone = document.getElementById("hexcodeone");
const displayhextwo = document.getElementById("hexcodetwo");
const displayhexthree = document.getElementById("hexcodethree");

//TODO: DEFINE COLORS FOR LIGHT AND DARK MODE

const lightmodearrayone = [
     '#FFFAF0',  '#FFF5EE', 
     '#FAFAD2', '#FFE4E1',  
     '#FFF8DC', '#FDF5E6',
     '#E0FFFF', '#F0FFFF', 
     '#F5FFFA', '#F8F8FF'
]

const lightmodearraytwo = [
    '#FFFACD', '#FAEBD7',
    '#FFE4B5', '#FFEFD5',
    '#F0E68C', '#F5F5F5',
    '#E6E6FA', '#D8BFD8',
    '#FFF0F5', '#FFFAFA'
]

const lightmodearraythree = [
    '#FDFEFE', '#F4A460',
    '#FFDEAD', '#FFEBCD',
    '#FAF0E6', '#FFF5F0',
    '#FFEC8B', '#FFFFE0',
    '#FFFCE8', '#FFFDD0'
]


const darkmodearrayone = [
  '#2F4F4F', '#556B2F',
  '#483D8B', '#191970',
  '#2C2C2C', '#4B0082',
  '#1E1E1E', '#2E8B57',
  '#8B0000',  '#006400'
]

const darkmodearraytwo = [
  '#5F9EA0', '#8B4513',
  '#2F2F4F', '#708090',
  '#000080', '#4A4A4A',
  '#3CB371', '#8B008B',
  '#00008B', '#B22222'
]

const darkmodearraythree = [
   '#6A5ACD', '#7B68EE',
   '#800000', '#2A2A2A',
   '#202020', '#2F4B4B',
   '#663399', '#191919',
   '#001F3F', '#3B3B3B'
]

//TODO: GET THE INDEX OF A RANDOM COLOR FROM EACH ARRAY
//* LIGHT MODE COLORS */
function getLightRandomColorone()
{
    const randomlightColorindexone = Math.floor(lightmodearrayone.length * Math.random());
    //* GET THE HEX CODE OF THE SELECTED COLOR AND DISPLAY IT /*
    const selectedcolorhexcodeone = lightmodearrayone[randomlightColorindexone];
    const htmltxt = `
       ${selectedcolorhexcodeone}
    `
    displayhexone.textContent = htmltxt;
    return randomlightColorindexone;
}



function getLightRandomColortwo()
{
    const randomlightColorindextwo = Math.floor(lightmodearraytwo.length * Math.random());
    const selectedcolorhexcodetwo = lightmodearraytwo[randomlightColorindextwo];
    const htmltxt = `
       ${selectedcolorhexcodetwo}
    `
    displayhextwo.textContent = htmltxt;
    return randomlightColorindextwo;
}

function getLightRandomColorthree()
{
    const randomlightColorindexthree = Math.floor(lightmodearraythree.length * Math.random());
    const selectedcolorhexcodethree = lightmodearraythree[randomlightColorindexthree];
    const htmltxt = `
       ${selectedcolorhexcodethree}
    `
    displayhexthree.textContent = htmltxt;
    return randomlightColorindexthree;
}

//* DARK MODE COLORS */

function getDarkRandomColorone()
{
    const randomdarkColorindexone = Math.floor(darkmodearrayone.length * Math.random());
    const selectedcolorhexcodeone = darkmodearrayone[randomdarkColorindexone];
    const htmltxt = `
       ${selectedcolorhexcodeone}
    `
    displayhexone.textContent = htmltxt;
    return randomdarkColorindexone;
}

function getDarkRandomColortwo()
{
    const randomdarkColorindextwo = Math.floor(darkmodearraytwo.length * Math.random());
    const selectedcolorhexcodetwo = darkmodearraytwo[randomdarkColorindextwo];
    const htmltxt = `
       ${selectedcolorhexcodetwo}
    `
    displayhextwo.textContent = htmltxt;
    return randomdarkColorindextwo;
}

function getDarkRandomColorthree()
{
    const randomdarkColorindexthree = Math.floor(darkmodearraythree.length * Math.random());
    const selectedcolorhexcodethree = darkmodearraythree[randomdarkColorindexthree];
    const htmltxt = `
       ${selectedcolorhexcodethree}
    `
    displayhexthree.textContent = htmltxt;
    return randomdarkColorindexthree;
}


//TODO: USE THE COLOR THAT CORRESPONDS TO THE SELECTED INDEX, TO CREATE A RANDOM GRADIENT COMBINATION

function changeLightModeBGcolor()
{
    const randomlightColorone = lightmodearrayone[getLightRandomColorone()]
    const randomlightColortwo = lightmodearraytwo[getLightRandomColortwo()]
    const randomlightColorthree = lightmodearraythree[getLightRandomColorthree()];
    bodyelement.style.backgroundSize = "cover";
    bodyelement.style.backgroundAttachment = "fixed";
    bodyelement.style.backgroundImage = `linear-gradient(45deg, ${randomlightColorone}, ${randomlightColortwo}, ${randomlightColorthree})`;
}


function changeDarkModeBGcolor()
{
    const randomdarkColorone = darkmodearrayone[getDarkRandomColorone()]
    const randomdarkColortwo = darkmodearraytwo[getDarkRandomColortwo()]
    const randomdarkColorthree = darkmodearraythree[getDarkRandomColorthree()];
    bodyelement.style.backgroundSize = "cover";
    bodyelement.style.backgroundAttachment = "fixed";
    bodyelement.style.backgroundImage = `linear-gradient(45deg, ${randomdarkColorone}, ${randomdarkColortwo}, ${randomdarkColorthree})`;
}

//*---------------------------------------------------------------------- */


//* TOGGLE MODE FUNCTIONALITY */

function toggleMode(){
    
    bodyelement.classList.toggle("dark-mode");
    if(bodyelement.classList.contains("dark-mode"))
    {
        console.log("Dark Mode");
        localStorage.setItem("dark-mode", "enabled");
        colorbtn.onclick = changeDarkModeBGcolor
    }
    else
    {
        console.log("Light Mode");
        localStorage.setItem("dark-mode", "disabled");
        colorbtn.onclick = changeLightModeBGcolor
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


