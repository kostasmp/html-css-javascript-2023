//functionality for the 6 side dice
const a = document.getElementById('res1');
const b = document.getElementById('buttonone')
b.addEventListener('click', rolling)
function rolling(){
    const nums = [1, 2, 3, 4, 5, 6]
    const randompos = Math.floor(Math.random() * 6)
    const randomnum = nums[randompos];
    a.innerHTML = randomnum
}

//functionality for the 10 side dice
const d = document.getElementById('res2')
const e = document.getElementById('buttontwo')
e.addEventListener('click', tenroll)
function tenroll(){
    const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const randompostwo = Math.floor(Math.random() * 10)
    const tenrandomnum = nums2[randompostwo];
    d.innerHTML = tenrandomnum
}

//functionality for the 20 side dice
const h = document.getElementById('res3')
const g = document.getElementById('buttonthree')
g.addEventListener('click', twentyroll)
function twentyroll(){
    const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const randomposthree = Math.floor(Math.random() * 20)
    const twentyrandomnum = nums3[randomposthree];
    h.innerHTML = twentyrandomnum
}

//functionality for the 100 side dice
const k = document.getElementById('res4')
const l = document.getElementById('buttonfour')
l.addEventListener('click', hundredroll)
function hundredroll(){
    const num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
    83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
    95, 96, 97, 98, 99, 100];

    const randomposfour = Math.floor(Math.random() * 100)
    const hundredrandomnum = num4[randomposfour];
    k.innerHTML = hundredrandomnum;
}

// functionality for the HOME button
const homebtn = document.getElementById("b-one");
homebtn.addEventListener("click", function(){
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