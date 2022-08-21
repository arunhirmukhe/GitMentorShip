var height = document.querySelector(".Height");
var base = document.querySelector(".Base");
var submit = document.querySelector(".hypo");
var ans = document.querySelector(".ans");

var hyport = () =>{
   
    var hypo1 = (height.value)**2 +(base.value)**2 ;
    var hypo2 = (hypo1)**(1/2);
    console.log(hypo2);
    ans.innerHTML = "Hyportenuse of height "+height.value+" and base "+base.value+" is "+hypo2;

}

submit.addEventListener("click",hyport,false);


