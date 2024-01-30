let firstImage = "mypic.png";
let secondImage ="me.png";

function changeImg(){
    let current = document.getElementById("mypic").src;
    if(current.indexOf("mypic.png")!==-1){
        let second = current.replace("mypic.png","me.png");     
        document.getElementById("mypic").src=second;
    }
    else{
        let second = current.replace("me.png","mypic.png");  
        document.getElementById("mypic").src=second;
    }
}

function firstimg(){
    document.getElementById("fpbox").style.backgroundColor="rgb(15, 13, 13)";
    let path = document.getElementById("mypic").src;
    let fi = path.replace("me.png","mypic.png");
    document.getElementById("mypic").src=fi;
    document.getElementById("mypic").style.boxShadow="";
}
function secondimg(){
    document.getElementById("fpbox").style.backgroundColor="rgb(197, 214, 220)";
    let path = document.getElementById("mypic").src;
    let fi = path.replace("mypic.png","me.png");
    document.getElementById("mypic").src=fi;
    document.getElementById("mypic").style.boxShadow="5px 5px 10px black";
}

let details = ["I'm 21 years old!","I'm a nocturnal person", "I love computers","I'm the youngest in the family","I love chocolates and donuts","I'm a League of Legends player","I love dogs","I do know how to play volleyball","I love memes","I code as a hobby","and","I love...","...","..",".","naghintay ka ba? wala na, it's a prank!"];
let index=0;
document.getElementById("content").innerHTML=details[0];

function back(){
    if(index>0&&index<=(details.length-1)){
        index--;
        document.getElementById("content").innerHTML=details[index];
    }
}
function next(){
    if(index>=0&&index<(details.length-1)){
        index++;
        document.getElementById("content").innerHTML=details[index];
    }
}


function blink(){
    document.getElementById("arrow").style.visibility="visible";
    document.getElementById("arrow").style.animation="blink 800ms infinite";
}

function stop(){
    document.getElementById("arrow").style.visibility="hidden";
    document.getElementById("arrow").style.animation="0";
}
let attempt =0;
function submit(){
    attempt++;
    let ans = document.getElementById("age").value;
    let num = parseFloat(ans);
    if(ans==16){
        document.getElementById("confetti").style.visibility="visible";
        document.getElementById("age").style.backgroundColor="rgb(134, 166, 240)";
        document.getElementById("submit").style.backgroundColor="rgb(134, 166, 240)";
        document.getElementById("age").style.color="black";
        document.getElementById("guess").innerHTML="I was born on January 16, 2003";
    }
    else{
        document.getElementById("age").style.backgroundColor="rgb(181, 61, 61)";
        document.getElementById("submit").style.backgroundColor="rgb(181, 61, 61)";
        document.getElementById("age").style.color="white";
        
    }
}

function tries(){
    document.getElementById("tries").innerHTML="You tried guessing my birthday "+attempt+" times";
}

