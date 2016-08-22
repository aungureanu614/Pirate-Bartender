//questions object
var questionJson = {
    strong: "Do ye like yer drinks strong?",
    salty: "Do ye like it with a salty tang?",
    bitter: "Are ye a lubber who likes it bitter?",
    sweet: "Would ye like a bit of sweetness with yer poison?",
    fruity: "Are ye one for a fruity finish?"

};

//questions constructor
var Questions = function(questionItems) {
    this.question = questionItems;
};

var questions = new Questions(questionJson); //creates mew instance of questions to ask 

//ingredients constructor
var Ingredients = function(items) {
    this.items = items;
};

//pantry constructor
var Pantry = function(strong, salty, bitter, sweet, fruity) {

    this.strong = strong;
    this.salty = salty;
    this.bitter = bitter;
    this.sweet = sweet;
    this.fruity = fruity;
};

//creates new instance of each of the types of ingredients
var strongIngredients = new Ingredients(["glug of rum", "slug of whisky", "splash of gin"]);
var saltyIngredients = new Ingredients(["olive on a stick", "salt-dusted rim", "rasher of bacon"]);
var bitterIngredients = new Ingredients(["shake of bitters", "splash of tonic", "twist of lemon peel"]);
var sweetIngredients = new Ingredients(["sugar cube", "spoonful of honey", "splash of cola"]);
var fruityIngredients = new Ingredients(["slice of orange", "dash of cassis", "cherry on top"]);

var newPantry = new Pantry(strongIngredients, saltyIngredients, bitterIngredients, sweetIngredients, fruityIngredients); //add all ingredients to pantry

//Preferences constructor and initialize everything with false
var Preferences = function() {
    this.strong = false;
    this.salty = false;
    this.bitter = false;
    this.sweet = false;
    this.fruity = false;
};

var prefs = new Preferences(); //create new instance of Preferences which will get input from the customer


var Bartender = function() {

};

var Jibbers = new Bartender();


var Drink = function(ingredient) {
    //this.ingredients.push(ingredient);
    this.ingredient = ingredient;
};

Bartender.prototype.createDrink = function(preferences) {
    var finalDrink = [];
    if (preferences.strong === true) {
        var randomStrong = Math.floor(Math.random() * newPantry.strong.items.length);
        var strongIngredient = newPantry.strong.items[randomStrong];
        finalDrink.push(strongIngredient);
    }
    if (preferences.salty === true) {
        var randomSalty = Math.floor(Math.random() * newPantry.salty.items.length);
        var saltyIngredient = newPantry.salty.items[randomSalty];
        finalDrink.push(saltyIngredient);
    }
    if (preferences.bitter === true) {
        var randomBitter = Math.floor(Math.random() * newPantry.bitter.items.length);
        var bitterIngredient = newPantry.bitter.items[randomBitter];
        finalDrink.push(bitterIngredient);
    }
    if (preferences.sweet === true) {
        var randomSweet = Math.floor(Math.random() * newPantry.sweet.items.length);
        var sweetIngredient = newPantry.sweet.items[randomSweet];
        finalDrink.push(sweetIngredient);
    }
    if (preferences.fruity === true) {
        var randomFruity = Math.floor(Math.random() * newPantry.fruity.items.length);
        var fruityIngredient = newPantry.fruity.items[randomFruity];
        finalDrink.push(fruityIngredient);
    }

    var newDrink = new Drink(finalDrink);
    console.log(newDrink.ingredient);

};


$(function() {

    bartenderAsk(questions.question);

});

function bartenderAsk(questions) {
    //bartender asks questions and they are displayed in the UI
    $.each(questions, function(index, question) {
        $('.q-a').append("<ul class='styling'><li>" + question + "</li><br><li><input type='radio' name='question-" + index + "'value='true'>Yarr!</li><li><input type='radio' name='question-" + index + "'value='false'>No</li></ul>");
    });

    $('#submit').on('click', function(event) {
        event.preventDefault();
        //gets the value of the customer answers 
        var radioStrong = $("input[name='question-strong']:checked").val();
        var radioSalty = $("input[name='question-salty']:checked").val();
        var radioBitter = $("input[name='question-bitter']:checked").val();
        var radioSweet = $("input[name='question-sweet']:checked").val();
        var radioFruity = $("input[name='question-fruity']:checked").val();
        //sets Preferences object properties to true or false based on if customer answered yes or no
        if (radioStrong === "true") {
            prefs.strong = true;
        } else {
            prefs.strong = false;
        }

        if (radioSalty === "true") {
            prefs.salty = true;
        } else {
            prefs.salty = false;
        }

        if (radioBitter === "true") {
            prefs.bitter = true;
        } else {
            prefs.bitter = false;
        }

        if (radioSweet === "true") {
            prefs.sweet = true;
        } else {
            prefs.sweet = false;
        }

        if (radioFruity === "true") {
            prefs.fruity = true;
        } else {
            prefs.fruity = false;
        }


        Jibbers.createDrink(prefs);
    });

}
