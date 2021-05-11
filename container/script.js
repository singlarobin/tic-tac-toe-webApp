let radio_btn1,radio_btn2;
let play_btn=document.querySelector(".play-btn");


play_btn.addEventListener("click",()=>{
    radio_btn1=document.querySelector("input[name='option1']:checked");
    radio_btn2=document.querySelector("input[name='option2']:checked");

    if(radio_btn1 && radio_btn2){
        //////////////////////////console.log(radio_btn1.value,"@@",radio_btn2.value);
        if(radio_btn1.value === radio_btn2.value){
            alert("Please select appropriate option for players.");
        }
        else{
            var params=new URLSearchParams();
            params.append("player1",radio_btn1.value);
            params.append("player2",radio_btn2.value);
            location.href="playArea.html?"+params;
        }
    }
    else{
        alert("Please choose option for players.");
    }
})

