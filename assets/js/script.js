//Declaring or Initilializing the variables
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
let storingQuizData;
let jsonData;
var genre = "17";
var level = "easy";
var count = 0;
var nxtCount = 0;

//Clicking on the easy, medium and difficult side bars
sticky1.addEventListener("click", function(event){
    event.preventDefault;
    storeJSONData();
});
sticky2.addEventListener("click", function(event){
    event.preventDefault;
    storeJSONData();
    
});
sticky3.addEventListener("click", function(event){
    event.preventDefault;
    storeJSONData();
    
});

//Clicking on first answer option
rdbAnswer1.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(lblAnswer4.textContent, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    storeJSONData();
});
//Clicking on second answer option
rdbAnswer2.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(lblAnswer4.textContent, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    storeJSONData();
});
//Clicking on third answer option
rdbAnswer3.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(lblAnswer4.textContent, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    storeJSONData();
});
//Clicking on fourth answer option
rdbAnswer4.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(lblAnswer4.textContent, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    storeJSONData();
});

//Checking if the expected answer is equal to actual
function userAnswerCheck(expected, actual){
    console.log("expected.value: "+expected);
    console.log("actual "+actual);
    if (expected==actual){
        console.log("right answer");
    }
}

//Getting values from the API and storing in a local json object
function quizQuestions(){
    var apiUrl = "https://opentdb.com/api.php?amount=15&category="+genre+"&difficulty="+level+"&type=multiple";
    console.log(apiUrl);
    var options = [];
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        storingQuizData = JSON.stringify(data);
        jsonData = JSON.parse(storingQuizData);
        storeJSONData()
    });

}

//display the questions and answer options to the front end from JSON object
function storeJSONData(){
    if (nxtCount==15){
        console.log("You have successfully completed the quiz");
        //Call the dashboard page here
    }
    //For now, the correct answer is hard coded to Option 4 and we need to randomize this
    question.textContent = jsonData.results[nxtCount].question;
    lblAnswer1.textContent = jsonData.results[nxtCount].incorrect_answers[0]
    lblAnswer2.textContent = jsonData.results[nxtCount].incorrect_answers[1];
    lblAnswer3.textContent = jsonData.results[nxtCount].incorrect_answers[2];
    lblAnswer4.textContent = jsonData.results[nxtCount].correct_answer;
}

//First method to call and invoke the API
quizQuestions();
