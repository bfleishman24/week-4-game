
//variables needed: randomly generated number between 19 and 120, four crstals with random values 1 through 12
// total score adding up all the crstal presses, wins and losses
// when the game starts, we will need a random number generated and each crstal will have a random value assigned to it


var crystal1 = Math.floor(Math.random() * ((12-1)+1)+1);
var crystal2 = Math.floor(Math.random() * ((12-1)+1)+1);
var crystal3 = Math.floor(Math.random() * ((12-1)+1)+1);
var crystal4 = Math.floor(Math.random() * ((12-1)+1)+1);
var randomNumber = Math.floor(Math.random() *((120-19)+1)+19);
var totalScore = 0;
var wins = 0;
var loses =0; 
$(`#ranNum`).html(randomNumber);
$(`#wins`).html(wins);
$(`#loses`).html(loses);
$(`#score`).html(totalScore)


console.log(randomNumber);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);


function win(){
    alert("You Win!");        
    wins++;
    $(`#wins`).html(wins);
    resetGame();
 
}

function lose() {
    alert("You lose Sucka!");    
    loses++;
    $(`#loses`).html(loses);
    resetGame();
}

function resetGame() {
     randomNumber = Math.floor(Math.random() *((120-19)+1)+19);
     crystal1 = Math.floor(Math.random() * ((12-1)+1)+1);
     crystal2 = Math.floor(Math.random() * ((12-1)+1)+1);
     crystal3 = Math.floor(Math.random() * ((12-1)+1)+1);
     crystal4 = Math.floor(Math.random() * ((12-1)+1)+1);
     totalScore = 0;
    $(`#score`).html(totalScore);
    $(`#ranNum`).html(randomNumber); 
    console.log("New Games Total Score " + totalScore);
    console.log("this is my new random number " + randomNumber);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    
        
}




//crystal one button
$( "#C1" ).click(function(){
totalScore = totalScore + crystal1; 
$(`#score`).html(totalScore);
if(totalScore === randomNumber){
    win();
} else if( totalScore > randomNumber){
   console.log("this is the totalscore number of crystal 1" + totalScore)
   console.log("this is the value of Crystal 1 " + crystal1);
    lose();
}
});
// crystal 2 button
$( "#C2" ).click(function() {
 totalScore = totalScore + crystal2; 
$(`#score`).html(totalScore);
if(totalScore === randomNumber){
    win();    
} else if( totalScore > randomNumber){
    lose();
}
});
// crystal 3 button
$( "#C3" ).click(function() {
totalScore = totalScore + crystal3; 
 $(`#score`).html(totalScore);
 if(totalScore === randomNumber){
    win();    
} else if( totalScore > randomNumber){
    lose();
}
});

// Crystal 4 button
$( "#C4" ).click(function() {
totalScore = totalScore + crystal4; 
$(`#score`).html(totalScore);
if(totalScore === randomNumber){
    win();    
} else if( totalScore > randomNumber){
    lose();
}
});

// the game can be won by matching the total score to the random number

// the game can be lost by exceeding the random number in total score
// function gameEnd(){       



