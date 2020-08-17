function start(id){
    let user_score=Number(document.getElementById("user-points").textContent);
    let pc_score=(document.getElementById("user-points").textContent);
    let pc = random(1,3);
    console.log(pc);
    let result=2;
    switch(pc){
        case 1:
            pc = "rock";
            break;
        case 2:
            pc = "scissors";
            break;
        case 3:
            pc = "paper";            
    }

    switch(id){
        case "rock":
            if(pc=="paper"){
                result=0;
            }
            else if(pc == "scissors"){
                result=1;
            }
            break;
        case "paper":
            if(pc=="rock"){
                result=0;
            }
            else if(pc == "scissors"){
                result=1;
            }
            break;
        case "scissors":
            if(pc=="rock"){
                result: 0;
            }
            else if(pc=="paper"){
                result=1;
            }            
    }

    if(result==0){
        alert("You lost");
        pc_score++;
        document.getElementById("pc-points").innerHTML = String(user_score);
    }
    else if(result==1){
        alert("You Win!");
        user_score++;
        document.getElementById("user-points").innerHTML = String(user_score);
    }
    else{
        alert("Empate");
    }
}

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function restart(){
    document.getElementById("pc-points").innerHTML = "0"
    document.getElementById("user-points").innerHTML = "0"
}