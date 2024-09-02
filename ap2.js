var m=document.querySelector("div #btn");
var h= document.querySelector("div #h");
var h1=document.querySelector("div #ne");
var n= document.querySelector("div #in");
var h43=document.querySelector("div #h43");
var h44=document.querySelector("div #h44");
var h441=document.querySelector("div #h441");
var h45=document.querySelector("div #h45");
var m1=document.querySelector("div #btn2")
var h4=document.querySelector(" div #h4")
var h41=document.querySelector("div #h41")
var h42=document.querySelector("div #h42")
var h22=document.querySelector("div #h22")
var t=document.querySelector("div #t")
var t1=document.querySelector("div #t1")

let numberoftries=Number(localStorage.getItem("numberoftries"));

if(!numberoftries) {
  numberoftries = 0;
}



let numberoflose=Number(localStorage.getItem("numberoflose"));
if(!numberoflose) {
  numberoflose = 0;
}
let score=Number(localStorage.getItem("score"))
if(!score){

  score=0;
}
let highscore=Number(localStorage.getItem("highscore"))
if(!highscore){

  highscore=0;
}

h43.textContent="Score:"
h44.textContent=`0`
h441.textContent="Total Score:"
h45.textContent=`${highscore}`
h41.textContent=`Tried:`
h42.textContent=`${numberoftries}`
t1.textContent=`Times`
h22.textContent=`Lost:`
h4.textContent=`${numberoflose}`
t.textContent=`Times`



n.addEventListener("keyup" ,e =>{

e.preventDefault();
if(e.keyCode===13){

    console.log("Enter is pressed")
    m.click();
}

})

m.addEventListener('click', function(){

h42.textContent=`${numberoftries}` ; 
numberoftries++
updatenumberoftries();

  var num=parseInt(n.value);

    var f= Math.floor(Math.random()*49)+1;

if(num==f){

h1.textContent="Congratulations! You won the game. To play again, wait untill this meassage dissappears.  ";

setTimeout(() => {

    h1.textContent="";
},7000);

highscore++
score++


updatescore()
updatehighscore()


h44.textContent=` ${score}`
h45.textContent=`${highscore}`



}

else{

  h.textContent= "You lose the game.  The right number was   :  " +   f   + "; To try again, wait untill this meassage dissappears.   "; 
 


setTimeout(() => {
    h.textContent="";


    
}, 7000);

 numberoflose++;
 updatenumberoflose()
 updatescore()
 updatehighscore()


h44.textContent=` ${score}`
h45.textContent=`${highscore}`
h4.textContent=`${numberoflose}`





   
 
}




});

function updatenumberoftries(){


  localStorage.setItem("numberoftries", JSON.stringify(numberoftries));


}

function updatenumberofwin(){


  localStorage.setItem("numberofwin", JSON.stringify(numberofwin));

}


function updatenumberoflose(){


  localStorage.setItem("numberoflose", JSON.stringify(numberoflose));

}
function updatescore(){

  localStorage.setItem("score", JSON.stringify(score))
  localStorage.removeItem("score")
}

function updatehighscore(){

  localStorage.setItem("highscore", JSON.stringify(highscore))
}


m1.addEventListener('click',function(){

  window.location.reload();

})