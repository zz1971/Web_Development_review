// document.querySelector('.button-container').addEventListener('click', function(event) {
//     //alert(`You clicked on button ${event.target.innerText}`);
//     let doSomThing = event.target.innertext;
//     if (doSomeThing === '+'){
//       section.displayresult = parseInt(doSomeThing);
//       document.
//     }
//   });

//   const btn = document.querySelector('button');
//   const txt = document.querySelector('p');
  
//   btn.addEventListener('click', updateBtn);
  
//   function updateBtn() {
//     if (btn.textContent === 'Start machine') {
//       btn.textContent = 'Stop machine';
//       txt.textContent = 'The machine has started!';
//     } else {
//       btn.textContent = 'Start machine';
//       txt.textContent = 'The machine is stopped.';
//     }
//   }

let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector(".displayResult");
// console.log("here1");

//const newLocal = ".button-container";
document.querySelector(".button-container").addEventListener("click", function(event) {
    //alert(`You clicked on button ${event.target.innerText}`);
    // console.log(event.target.innerText);
    buttonClick(event.target.innerText);
});



function buttonClick(value){
  if(isNaN(parseInt(value))){          //if it is not a number
    console.log("value is not a number", value);
    handleSymbol(value);
  }
  else{                               // it's a symbol
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value){
  if(buffer === "0"){
    buffer = value;
  }else{
    buffer += value;
  }
  // console.log("here2");
  // console.log("here3");
}


function handleSymbol(value){
  switch(value){
    case "C":
      buffer = "0";
      runningTotal =0;
      previousOperator = null;
      break;
    case "=":
      if(previousOperator === null){
        return;                               //get out of here
      }
      //it change buffer to number
      flushOperation(parseInt(buffer));    //I have some sort of previous operator I want you to commit to that operator that you were holding onto
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if(buffer.length === 1){
        buffer = "0";
      }else{
        buffer = buffer.substring(0, buffer.length-1);
      }
      break;
      default:
        handleMath(value);
        break;
  }
}

function handleMath(value){
  const intBuffer = parseInt(buffer);
  if(runningTotal === 0){
    runningTotal = intBuffer;         //want to keep that number which is pressed before hitting operator
  }else{
    flushOperation(intBuffer);
    console.log(intBuffer,value);
  }
  console.log("value",value);
  previousOperator= value;
  console.log("previousOperator", previousOperator);
  buffer = "";
}

function flushOperation(intBuffer){
  if(previousOperator === "+"){
    runningTotal += intBuffer;
  }else if(previousOperator === "-"){
    runningTotal -= intBuffer;
  }else if(previousOperator === "×"){
    runningTotal *= intBuffer;
  }else{
    runningTotal /= intBuffer;
  }
}

function rerender(){
  screen.innerText = buffer;
}