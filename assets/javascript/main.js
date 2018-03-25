$(document).ready(function(){
    var red = Math.floor((Math.random() * 5) + 1);
    var blue = Math.floor((Math.random() * 5) + 2);
    var green = Math.floor((Math.random() * 5) + 3);
    var white = Math.floor((Math.random() * 5) + 4);
    var userScore = 0;
    var userWins = 0;
    var userLosses = 0;
    var crystals = [red, blue, green, white];

    

    noneAlike();


    var randNum = 2 * (crystals[0] + crystals[1]) + crystals[2] * crystals[3];

    $("#random-number").html(randNum);
    console.log("target number: " + randNum);


    $("#ruby").on("click", function () {

        userScore += red;
        console.log("red: " + red)
        console.log("user score: " + userScore)

    });

    $("#sapphire").on("click", function () {
        
        userScore += blue;
        console.log("blue: " + blue)
        console.log("user score: " + userScore)
    });

    $("#emerald").on("click", function () {
        userScore += green;
        console.log("green: " + green)
        console.log("user score: " + userScore)
    });

    $("#diamond").on("click", function () {
        userScore += white;
        console.log("white: " + white)
        console.log("user score: " + userScore)
    });

    $(".crystal-buttons").on("click", function(){

        if(userScore == randNum){

            alert("You won!!");
            userWins++;
            $("#user-wins").html(userWins);
        }
        else if (userScore > randNum){
            
            alert("You lost:(((((");
            userLosses++;
            $("#user-losses").html(userLosses);
        }
        
        if (userScore >= randNum) {
            red = Math.floor((Math.random() * 5) + 1);
            blue = Math.floor((Math.random() * 5) + 2);
            green = Math.floor((Math.random() * 5) + 3);
            white = Math.floor((Math.random() * 5) + 4);

            crystals = [red, blue, green, white];

            randNum = 2 * (crystals[0] + crystals[1]) + crystals[2] * crystals[3];
            console.log("target number: " + randNum);

            userScore = 0;
    
        }

        $("#user-score").html(userScore);
        $("#random-number").html(randNum);

    });

    function noneAlike(){
        if (red == blue ||
            red == green ||
            red == white){
            red += Math.floor(Math.random()) + 2;
        }
        if (blue == red ||
            blue == green ||
            blue == white){
            blue += Math.floor(Math.random()) + 2;
        }
        if (green == blue ||
            green == red ||
            green == white){
            green -= Math.floor(Math.random()) + 2;
        }
        if (white == blue ||
            white == green ||
            white == red){
            white -= Math.floor(Math.random()) + 2;
        }
    }    
});

