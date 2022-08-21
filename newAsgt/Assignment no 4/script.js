var rad1 = document.querySelectorAll(".radio1");
var rad2 = document.querySelectorAll(".radio2");
var rad3 = document.querySelectorAll(".radio3");
var rad4 = document.querySelectorAll(".radio4");
var rad5 = document.querySelectorAll(".radio5");
var submit = document.querySelector(".submit");
var result = document.querySelector(".result");
var sta = document.querySelector(".sta");

var Quiz = () =>{
  var r=0;
  for(var i=0;i<4;i++){
    
    if (rad1[i].checked) {
      if (rad1[i].value == "Narmada") {
        r = r + 1;
        console.log(rad1[i].value);
      }
    }
    if (rad2[i].checked) {
      if (rad2[i].value == "Hitler") {
        r = r + 1;
        console.log(rad2[i].value);
      }
    }
    if (rad3[i].checked) {
      if (rad3[i].value == "Nobel Prize") {
        r = r + 1;
        console.log(rad3[i].value);
      }
    }
    if (rad4[i].checked) {
      if (rad4[i].value == "Bhagirathi") {
        r = r + 1;
        console.log(rad4[i].value);
      }
    }
    if (rad5[i].checked) {
      if (rad5[i].value == "Mahatma Gandhi") {
        r = r + 1;
        console.log(rad5[i].value);
      }
     }
  }
  for(var i=0;i<4;i++){
   console.log(rad4[i].value);
  }

  result.innerHTML = "Your result is "+r+"/5";
  if(r==5){
      sta.innerText = "Congratulations you have been selected for scholarship";
      sta.style.color = " rgb(163, 234, 56)";
  }
  else if(4==r || r==3){
      sta.innerText = "You have better work but you are in waiting list.You will be informed by email.";
      sta.style.color = "rgb(203, 255, 100)";
  }
  else if(r==2 || r==1 || r==0){
      sta.innerText = "I'm sorry to hear that you failed your general knowledge test. Better luck next time!";
      sta.style.color = "rgb(255, 25, 25)";
  }
            
}

submit.addEventListener("click",Quiz,false);









