//Declaring or Initilializing the variables (JS)
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

//Declaring or Initilializing the variables (JQ)
var qColor = $('.q-icon');

var quizCorrectAnswer = "";
let storingQuizData;
let jsonData;
var count = 0;
var nxtCount = 0;
var totalScore = 0;
var genre=0;
var genreName = "";
var difficulty = "";
var tempQuizAnswers = [];

//variables for the local storage
var questionsLocalStorage = [];

//Variables for count down bar
var divCountdownBar = document.getElementById("divCountdownBar");
var divTimeLeft = document.getElementById("divTimeLeft");
var startTimer;
var timeLeft = 10;

//variables for the dashboard page
var dasbQuestion

//Clicking the genre in Home page
$('#genre-label1').on('click', function () {

    genre = "11";
    genreName = "Movies";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');

    qColor.addClass('red');
    $('#genre-icons').html('<span class="red"><i class="fas fa-film"></i></span>');

});

$('#genre-label2').on('click', function () {

    genre = "17";
    genreName = "Science";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');

    qColor.addClass('green');
    $('#genre-icons').html('<span class="green"><i class="fas fa-atom"></i></span>');

});

$('#genre-label3').on('click', function () {

    genre = "23";
    genreName = "History";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');

    qColor.addClass('blue');
    $('#genre-icons').html('<span class="blue"><i class="fas fa-history"></i></span>');

});

$('#genre-label4').on('click', function () {

    genre = "21";
    genreName = "Sports";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');
    
    qColor.addClass('orange');
    $('#genre-icons').html('<span class="orange"><i class="fas fa-baseball-ball"></i></span>');

});

$('#genre-label5').on('click', function () {

    genre = "12";
    genreName = "Music";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');

    qColor.addClass('purple');
    $('#genre-icons').html('<span class="purple"><i class="fas fa-music"></i></span>');

});

$('#genre-label6').on('click', function () {

    genre = "14";
    genreName = "Television";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');

    qColor.addClass('yellow');
    $('#genre-icons').html('<span class="yellow"><i class="fas fa-tv"></i></span>');

});

$('#genre-label7').on('click', function () {

    genre = "10";
    genreName = "Books";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');

    qColor.addClass('cyan');
    $('#genre-icons').html('<span class="cyan"><i class="fas fa-book"></i></span>');

});

$('#genre-label8').on('click', function () {

    genre = "22";
    genreName = "Geography";

    qColor.removeClass('red');
    qColor.removeClass('green'); 
    qColor.removeClass('blue');
    qColor.removeClass('orange');
    qColor.removeClass('purple');
    qColor.removeClass('yellow');
    qColor.removeClass('cyan');
    qColor.removeClass('pink');
    
    qColor.addClass('pink');
    $('#genre-icons').html('<span class="pink"><i class="fas fa-globe"></i></span>');

});

//Clicking on the easy, medium and difficult side bars
sticky1.addEventListener("click", function (event) {
    event.preventDefault;
    complexity = "easy";
    quizQuestions();
});
sticky2.addEventListener("click", function (event) {
    event.preventDefault;
    complexity = "medium";
    quizQuestions();
});
sticky3.addEventListener("click", function (event) {
    event.preventDefault;
    complexity = "hard";
    quizQuestions();
});

//Clicking on first answer option
rdbAnswer1.addEventListener("click", function (event) {
    event.preventDefault;
    timeLeft = 10;
    if (nxtCount == 14) {
        dashboardPage();
    }
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer1.textContent);
    nxtCount = nxtCount + 1;
    clearTimer();
    storeJSONData()
    timeBarCount();
    // countdown();
});

//Clicking on second answer option
rdbAnswer2.addEventListener("click", function (event) {
    event.preventDefault;
    timeLeft = 10;
    if (nxtCount == 14) {
        dashboardPage();
    }
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer2.textContent);
    nxtCount = nxtCount + 1;
    clearTimer();
    storeJSONData()
    timeBarCount();
    // countdown();
});

//Clicking on third answer option
rdbAnswer3.addEventListener("click", function (event) {
    event.preventDefault;
    timeLeft = 10;
    if (nxtCount == 14) {
        dashboardPage();
    }
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer3.textContent);
    nxtCount = nxtCount + 1;
    clearTimer();
    storeJSONData()
    timeBarCount();
    // countdown();
});
//Clicking on fourth answer option
rdbAnswer4.addEventListener("click", function (event) {
    event.preventDefault;
    timeLeft = 10;
    if (nxtCount == 14) {
        dashboardPage();
    }
    clearTimer();
    storeJSONData()
    timeBarCount();
    // countdown();
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer4.textContent);
    nxtCount = nxtCount + 1;
});

//Checking if the expected answer is equal to actual
function userAnswerCheck(expected, actual) {
    if (expected == actual) {
        totalScore = totalScore + 1;
    }
}


//Getting values from the API and storing in a local json object and local storage
function quizQuestions() {

    var apiUrl = "https://opentdb.com/api.php?amount=15&category=" + genre + "&difficulty=" + complexity + "&type=multiple";
    var options = [];
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            difficulty = data.results[0].difficulty;
            storingQuizData = JSON.stringify(data);
            jsonData = JSON.parse(storingQuizData);
            questionsLocalStorage = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", "question11", "question12", "question13", "question14", "question15"];
            for (var i = 0; i < 15; i++) {
                localStorage.setItem(questionsLocalStorage[i], JSON.stringify(data.results[i].question));
            }
            storeJSONData();
            timeBarCount();
        });
}

//display the questions and answer options to the front end from JSON object
function storeJSONData() {
    var quesProperty = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10", "#q11", "#q12", "#q13", "#q14", "#q15"]
    question.innerHTML = jsonData.results[nxtCount].question;

        var answer1 = $(quesProperty[nxtCount]).parent().parent().find('.a1');
        var answer2 = $(quesProperty[nxtCount]).parent().parent().find('.a2');
        var answer3 = $(quesProperty[nxtCount]).parent().parent().find('.a3');
        var answer4 = $(quesProperty[nxtCount]).parent().parent().find('.a4');

        var qHeader = $('#quiz').find('.header');
        var qHeadText = qHeader.find('h2');

        addOne = nxtCount +1;

    for (var i = 0; i < 4; i++) {
        tempQuizAnswers = [jsonData.results[nxtCount].incorrect_answers[0], jsonData.results[nxtCount].incorrect_answers[1], jsonData.results[nxtCount].incorrect_answers[2], jsonData.results[nxtCount].correct_answer]


        //Randomizing the answer options
        var r = Math.floor(Math.random() * (i + 1));
        var random = tempQuizAnswers[i];
        tempQuizAnswers[i] = tempQuizAnswers[r];
        tempQuizAnswers[r] = random;

    }

    qHeadText.text('Question' + ' ' + addOne );

    lblAnswer1.innerHTML = tempQuizAnswers[0];
    lblAnswer2.innerHTML = tempQuizAnswers[1];
    lblAnswer3.innerHTML = tempQuizAnswers[2];
    lblAnswer4.innerHTML = tempQuizAnswers[3];

    if (tempQuizAnswers[0] === jsonData.results[nxtCount].correct_answer){

        answer1.html("<p>" + tempQuizAnswers[0] + "</p>" + '<span class="green"></span>');

    } else {
        answer1.html("<p>" + tempQuizAnswers[0] + "</p>" + '<span></span>');
    }

    if (tempQuizAnswers[1] === jsonData.results[nxtCount].correct_answer){

        answer2.html("<p>" + tempQuizAnswers[1] + "</p>" + '<span class="green"></span>');

    } else {
        answer2.html("<p>" + tempQuizAnswers[1] + "</p>" + '<span></span>');
    }

    if (tempQuizAnswers[2] === jsonData.results[nxtCount].correct_answer){

        answer3.html("<p>" + tempQuizAnswers[2] + "</p>" + '<span class="green"></span>');

    } else {
        answer3.html("<p>" + tempQuizAnswers[2] + "</p>" + '<span></span>');
    }

    if (tempQuizAnswers[3] === jsonData.results[nxtCount].correct_answer){

        answer4.html("<p>" + tempQuizAnswers[3] + "</p>" + '<span class="green"></span>');

    } else {
        answer4.html("<p>" + tempQuizAnswers[3] + "</p>" + '<span></span>');
    }

}

function countdown() {

    timerID = $('#timer').find('h2');

    timeInterval = setInterval(function () {
            timerID.text(timeLeft);
            timeLeft--;
        if (timeLeft==1){timerID.text('1')}
        if (timeLeft<1){
            timeLeft = 9;
            timerID.text('0');
            if (nxtCount == 14) {
                dashboardPage();
            }
            nxtCount = nxtCount + 1;
            clearInterval(timeInterval);
            clearTimer();
            storeJSONData()
            timeBarCount();
            
        }

    }, 1000);

}

//Handling the time bar in the quiz page
function timeBarCount() {

    countdown();

    startTimer = setInterval(barCount, 20);
    function barCount() {
        if (divTimeLeft.clientWidth < divCountdownBar.clientWidth) {
            divTimeLeft.style.width = divTimeLeft.clientWidth + 1 + "px";
        }
        else {
            divTimeLeft.style.width = divCountdownBar.clientWidth + "px";
            clearInterval(startTimer);
        }
    }
}

//reset timer
function clearTimer() {
    timeLeft = 9;
    clearInterval(startTimer);
    clearInterval(timeInterval);
    divTimeLeft.style.width = "0px";
}

//display the contents in dashboard page
function dashboardPage() {
    callDashboardPage();
    $("#score-final").text(totalScore);
    var quesProperty = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10", "#q11", "#q12", "#q13", "#q14", "#q15"]
    for (var i = 0; i < 15; i++)
        $(quesProperty[i]).html(JSON.parse(localStorage.getItem(questionsLocalStorage[i])));
}

function loadScores(){

    var highScores =[ $('#score-1'), $('score-2'), $('score-3'), $('score-4') ]

    for (var i = 0; i < highScores.length; i++ ){

        var name = $('#score-'+ [i+1]).find('td:nth-child(1)');
        var score = $('#score-'+ [i+1]).find('td:nth-child(2)');
        var genre = $('#score-'+ [i+1]).find('td:nth-child(3)');
        var diff = $('#score-'+ [i+1]).find('td:nth-child(4)');

        name.text(window.data[i].name)
        score.text(window.data[i].score + '/15')

        if (window.data[i].genre === "Movies"){

        genre.html('<span class="red"></span>')

        }

        else{}

        if (window.data[i].genre === "Science"){

            genre.html('<span class="green"></span>')
    
        }
    
        else{}

        if (window.data[i].genre === "History"){

            genre.html('<span class="blue"></span>')
    
        }
    
        else{}

        if (window.data[i].genre === "Sports"){

            genre.html('<span class="orange"></span>')
    
        }
    
        else{}

        if (window.data[i].genre === "Music"){

            genre.html('<span class="purple"></span>')
    
        }
    
        else{}

        if (window.data[i].genre === "Television"){

            genre.html('<span class="yellow"></span>')
    
        }
    
        else{}

        if (window.data[i].genre === "Books"){

            genre.html('<span class="cyan"></span>')
    
        }
    
        else{}

        if (window.data[i].genre === "Geography"){

            genre.html('<span class="pink"></span>')
    
        }
    
        else{}

        diff.text(window.data[i].difficulty)

    }

}
