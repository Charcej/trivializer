var sticky1 = document.getElementById("sticky-1");
var sticky2 = document.getElementById("sticky-2");
var sticky3 = document.getElementById("sticky-3");

var question = document.getElementById("question");
var lblAnswer1 = document.getElementById("lblAnswer1");
var lblAnswer2 = document.getElementById("lblAnswer2");
var lblAnswer3 = document.getElementById("lblAnswer3");
var lblAnswer4 = document.getElementById("lblAnswer4");
var rdbAnswer1 = document.getElementById("answer-1");
var rdbAnswer2 = document.getElementById("answer-2");
var rdbAnswer3 = document.getElementById("answer-3");
var rdbAnswer4 = document.getElementById("answer-4");
var quizCorrectAnswer = "";
var storingQuizData = [];

var genre = "17";
var level = "easy";
var count = 0;
var nxtCount = 0;

sticky1.addEventListener("click", function(event){
    event.preventDefault;
    quizQuestions();
    
});
sticky2.addEventListener("click", function(event){
    event.preventDefault;
    quizQuestions();
    
});
sticky3.addEventListener("click", function(event){
    event.preventDefault;
    quizQuestions();
    
});

rdbAnswer1.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(lblAnswer1, lblAnswer1.textContent);
    nxtCount = count +1;
    quizQuestions()
});

function userAnswerCheck(expected, actual){
    console.log("expected.value: "+quizCorrectAnswer);
    console.log("actual "+actual);
    if (quizCorrectAnswer==actual){
        console.log("right answer");
    }
}

function quizQuestions(){
    var apiUrl = "https://opentdb.com/api.php?amount=15&category="+genre+"&difficulty="+level+"&type=multiple";
    console.log(apiUrl);
    var options = [];
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if (nxtCount==5){
            console.log("You have successfully completed the quiz");
        }
            question.textContent = count+"."+data.results[count].question;
            //lblAnswer1.textContent = data.results[count].correct_answer[0];
            quizCorrectAnswer = data.results[count].correct_answer;
            lblAnswer1.textContent = data.results[count].incorrect_answers[0];
            lblAnswer2.textContent = data.results[count].incorrect_answers[1];
            lblAnswer3.textContent = data.results[count].incorrect_answers[2];
            lblAnswer4.textContent = data.results[count].incorrect_answers[3];
    });

}

// Fetches from the WILLFRY API
var getApi2 = function (user) {
    var apiUrl = "https://api.trivia.willfry.co.uk/questions?limit=50";
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

// Function calls to get both APIS
//getApi1();
//getApi2();