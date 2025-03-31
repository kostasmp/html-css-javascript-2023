const userinput = document.getElementById("text-input");
const checkbtn = document.getElementById("check-btn");
const restxt = document.getElementById("result");
const clearbtn = document.getElementById("clear");



function checkforPalindrome() 
{
   let regexone = /[^A-z0-9]/gi;
   let regextwo = /[_]/g;
   const initialInput = userinput.value;
   const editedInput = userinput.value.replace(regexone, '').replace(regextwo, "").toLowerCase().split("");
   const reverseinput = editedInput.toReversed();
  if(String(editedInput) === String(reverseinput))
  {
    return restxt.innerText = initialInput + " is a palindrome";
  }
  else
  {
    return restxt.innerText = initialInput + " is not a palindrome";
  }
}

function checkButtonAlert()
{
  if(userinput.value === "")
  {
    alert("Please input a value");
  }
  else
  {
     checkforPalindrome()
  }
}

function resetResult()
{
    if(userinput.value !== "")
    {
        userinput.value = "";
        restxt.innerText = "";
    }
}

checkbtn.addEventListener("click", checkButtonAlert);
clearbtn.addEventListener("click", resetResult);