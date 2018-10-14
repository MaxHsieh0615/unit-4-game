// global variables
//===================================================
var brand = {
    adidas: {
        name: "adidas",
        value: 0,
    },
    jordan: {
        name: "jordan",
        value: 0,
    },
    underArmour: {
        name: "underArmour",
        value: 0,
    },
    puma: {
        name: "puma",
        value: 0,
    },
};


var targetScore = 0;
var userScore = 0;


var wins = 0;
var losses = 0;



// fuctions
//===================================================
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    userScore = 0;
    targetScore = random(19, 120);
    brand.adidas.value = random(1, 12);
    brand.jordan.value = random(1, 12);
    brand.underArmour.value = random(1, 12);
    brand.puma.value = random(1, 12);

    $("#targetScore").text(targetScore);
    $("#userScore").text(userScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    console.log("----------------------");
    console.log("target score: " + targetScore);
    console.log("adidas: " + brand.adidas.value + " | jordan: " + brand.jordan.value + " | underArmour: " + brand.underArmour.value + " | puma: " + brand.puma.value);
    console.log("----------------------");
}

function addUp(brand) {
    userScore = userScore + brand.value;
    $("#userScore").text(userScore);
    console.log(userScore);
    if(userScore === targetScore){
        alert("Congrats!");
        wins++;
        startGame();
    }
    else if(userScore > targetScore){
        alert("You lost!");
        losses++;
        startGame();
    }
}



// main process
//===================================================

$("#adidas").click(function () {
    addUp(brand.adidas);
});
$("#jordan").click(function () {
    addUp(brand.jordan);
});
$("#underArmour").click(function () {
    addUp(brand.underArmour);
});
$("#puma").click(function () {
    addUp(brand.puma);
});

startGame();