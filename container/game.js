import check from './find_result.js';


let play_again=document.querySelector(".play-btn");
let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let resultVal=document.querySelector(".result-area h2:last-child");


play_again.addEventListener("click",()=>{
    location.href="index.html";
})

////////Extract choosen values of players from url ////////////////
var params=new URLSearchParams(window.location.search);
const player1Val=params.get("player1");
const player2Val=params.get("player2");

////////Set choosen values of players on web page ////////////////
player1.innerHTML=player1Val;
player2.innerHTML=player2Val;

const size=3
var arr= Array(size).fill().map(()=>Array(size));
var count=0;
var turnFlag=0;
var resultFlag=0;

///////Store the values of players in local arr variable //////////////
function pushValue(ptr,playerVal){
    switch(ptr){
        case one:
            arr[0][0]=playerVal;
            break;
        case two:
            arr[0][1]=playerVal;
            break;
        case three:
            arr[0][2]=playerVal;
            break;
        case four:
            arr[1][0]=playerVal;
            break;
        case five:
            arr[1][1]=playerVal;
            break;
        case six:
            arr[1][2]=playerVal;
            break;
        case seven:
            arr[2][0]=playerVal;
            break;
        case eight:
            arr[2][1]=playerVal;
            break;
        case nine:
            arr[2][2]=playerVal;
            break;

    }
}

//////////////Add event listner to DOM element /////////////////
function addListner(ptr){
    ptr.addEventListener("click",()=>{
        count++;
        /////////Player 1 turns///////////////////////
        if(turnFlag==0){
            ptr.innerHTML=player1Val;
            turnFlag=1;
            pushValue(ptr,player1Val);
            resultFlag=check(arr,player1Val);
            if(resultFlag===1){
                resultVal.innerHTML="Player 1 Won!";
                console.log("Player 1 Won!");
            }
        }/////////////Player 2 turns///////////////////
        else{
            ptr.innerHTML=player2Val;
            turnFlag=0;
            pushValue(ptr,player2Val);
            resultFlag=check(arr,player2Val);
            if(resultFlag===1){
                resultVal.innerHTML="Player 2 Won!";
                console.log("Player 2 Won!");
            }
        }
        ptr.style.color="03506f";
        if(count===9 && resultFlag===0){
            resultVal.innerHTML="Draw!";
            console.log("DRAW!");
        }
    })
}


let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let six=document.querySelector(".six");
let seven=document.querySelector(".seven");
let eight=document.querySelector(".eight");
let nine=document.querySelector(".nine");


addListner(one);
addListner(two);
addListner(three);
addListner(four);
addListner(five);
addListner(six);
addListner(seven);
addListner(eight);
addListner(nine);

