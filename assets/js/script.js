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
var totalScore = 0;

var genres = ["11","10","17","23", "12", "21", "14", "22"];
var tempQuizAnswers = [];

//Variables for count down bar
var divCountdownBar = document.getElementById("divCountdownBar");
var divTimeLeft = document.getElementById("divTimeLeft");
var startTimer;

$('#genre-label1').on('click', function(){

    genre = "11";
    quizQuestions();

});

$('#genre-label2').on('click', function(){

    genre = "17";
    quizQuestions();

});

$('#genre-label3').on('click', function(){

    genre = "23";
    quizQuestions();

});

$('#genre-label4').on('click', function(){

    genre = "21";
    quizQuestions();

});

$('#genre-label5').on('click', function(){

    genre = "12";
    quizQuestions();

});

$('#genre-label6').on('click', function(){

    genre = "14";
    quizQuestions();

});

$('#genre-label7').on('click', function(){

    genre = "10";
    quizQuestions();

});

$('#genre-label8').on('click', function(){

    genre = "22";
    quizQuestions();

});

function appendQuestion(data) {

var question1 = JSON.parse(localStorage.getItem('question1'));
var question2 = JSON.parse(localStorage.getItem('question2'));
var question3 = JSON.parse(localStorage.getItem('question3'));
var question4 = JSON.parse(localStorage.getItem('question4'));
var question5 = JSON.parse(localStorage.getItem('question5'));
var question6 = JSON.parse(localStorage.getItem('question6'));
var question7 = JSON.parse(localStorage.getItem('question7'));
var question8 = JSON.parse(localStorage.getItem('question8'));
var question9 = JSON.parse(localStorage.getItem('question9'));
var question10 = JSON.parse(localStorage.getItem('question10'));
var question11 = JSON.parse(localStorage.getItem('question11'));
var question12 = JSON.parse(localStorage.getItem('question12'));
var question13 = JSON.parse(localStorage.getItem('question13'));
var question14 = JSON.parse(localStorage.getItem('question14'));
var question15 = JSON.parse(localStorage.getItem('question15'));

questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15
];

// for (var i = 0; i < questions.length; i++) {
    
//     // var question = questions[i];

//     var r = Math.floor(Math.random() * (i + 1));
//     var random = questions[i];
//     questions[i] = questions[r];
//     questions[r] = random;

//     console.log(random.correct_answer);
    
// }

// question.innerHTML = data.results[nxtCount].question;
//     for (var i = 0; i < 4; i++) {
//         tempQuizAnswers = [data.results[nxtCount].incorrect_answers[0], data.results[nxtCount].incorrect_answers[1], data.results[nxtCount].incorrect_answers[2],data.results[nxtCount].correct_answer]
//             var r = Math.floor(Math.random() * (i + 1));
//             var random = tempQuizAnswers[i];
//             tempQuizAnswers[i] = tempQuizAnswers[r];
//             tempQuizAnswers[r] = random;
//         }
//             lblAnswer1.innerHTML = tempQuizAnswers[0];
//             lblAnswer2.innerHTML = tempQuizAnswers[1];
//             lblAnswer3.innerHTML = tempQuizAnswers[2];
//             lblAnswer4.innerHTML = tempQuizAnswers[3];

}

function appendQuestionMedium(data2) {

    var question1m = JSON.parse(localStorage.getItem('question1-m'));
    var question2m = JSON.parse(localStorage.getItem('question2-m'));
    var question3m = JSON.parse(localStorage.getItem('question3-m'));
    var question4m = JSON.parse(localStorage.getItem('question4-m'));
    var question5m = JSON.parse(localStorage.getItem('question5-m'));
    var question6m = JSON.parse(localStorage.getItem('question6-m'));
    var question7m = JSON.parse(localStorage.getItem('question7-m'));
    var question8m = JSON.parse(localStorage.getItem('question8-m'));
    var question9m = JSON.parse(localStorage.getItem('question9-m'));
    var question10m = JSON.parse(localStorage.getItem('question10-m'));
    var question11m = JSON.parse(localStorage.getItem('question11-m'));
    var question12m = JSON.parse(localStorage.getItem('question12-m'));
    var question13m = JSON.parse(localStorage.getItem('question13-m'));
    var question14m = JSON.parse(localStorage.getItem('question14-m'));
    var question15m = JSON.parse(localStorage.getItem('question15-m'));
    
    questions = [
        question1m,
        question2m,
        question3m,
        question4m,
        question5m,
        question6m,
        question7m,
        question8m,
        question9m,
        question10m,
        question11m,
        question12m,
        question13m,
        question14m,
        question15m
    ];
    
    console.log(questions);
    
}

function appendQuestionHard(data3) {

    var question1h = JSON.parse(localStorage.getItem('question1-h'));
    var question2h = JSON.parse(localStorage.getItem('question2-h'));
    var question3h = JSON.parse(localStorage.getItem('question3-h'));
    var question4h = JSON.parse(localStorage.getItem('question4-h'));
    var question5h = JSON.parse(localStorage.getItem('question5-h'));
    var question6h = JSON.parse(localStorage.getItem('question6-h'));
    var question7h = JSON.parse(localStorage.getItem('question7-h'));
    var question8h = JSON.parse(localStorage.getItem('question8-h'));
    var question9h = JSON.parse(localStorage.getItem('question9-h'));
    var question10h = JSON.parse(localStorage.getItem('question10-h'));
    var question11h = JSON.parse(localStorage.getItem('question11-h'));
    var question12h = JSON.parse(localStorage.getItem('question12-h'));
    var question13h = JSON.parse(localStorage.getItem('question13-h'));
    var question14h = JSON.parse(localStorage.getItem('question14-h'));
    var question15h = JSON.parse(localStorage.getItem('question15-h'));
    
    questions = [
        question1h,
        question2h,
        question3h,
        question4h,
        question5h,
        question6h,
        question7h,
        question8h,
        question9h,
        question10h,
        question11h,
        question12h,
        question13h,
        question14h,
        question15h
    ];
    
    console.log(questions);
    
}

//Clicking on the easy, medium and difficult side bars
sticky1.addEventListener("click", function(event){
    event.preventDefault;
    storeJSONData();
    appendQuestion();
    timeBarCount();
});
sticky2.addEventListener("click", function(event){
    event.preventDefault;
    storeJSONData();
    appendQuestionMedium();
    timeBarCount()
});
sticky3.addEventListener("click", function(event){
    event.preventDefault;
    storeJSONData();
    appendQuestionHard();
    timeBarCount()
});

//Clicking on first answer option
rdbAnswer1.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    clearTimer();
    timeBarCount();
    
    if (nxtCount >= 0 && nxtCount <= 15) {

        storeJSONData()

        }
});
//Clicking on second answer option
rdbAnswer2.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    clearTimer();
    timeBarCount();
    if (nxtCount >= 0 && nxtCount <= 15) {

        storeJSONData()

        }
});
//Clicking on third answer option
rdbAnswer3.addEventListener("click", function(event){
    event.preventDefault;
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    clearTimer();
    timeBarCount();
    if (nxtCount >= 0 && nxtCount <= 15) {
        storeJSONData()
        }
});
//Clicking on fourth answer option
rdbAnswer4.addEventListener("click", function(event){
    event.preventDefault;
    clearTimer();
    timeBarCount();
    userAnswerCheck(jsonData.results[nxtCount].correct_answer, lblAnswer1.textContent);
    nxtCount = nxtCount+1;
    if (nxtCount >= 0 && nxtCount <= 15) {
        storeJSONData()
        }
});

//Checking if the expected answer is equal to actual
function userAnswerCheck(expected, actual){
    console.log("expected.value: "+expected);
    console.log("actual "+actual);
    if (expected==actual){
        totalScore = totalScore+10;
        console.log ("Total score: "+totalScore);
        console.log("right answer");
    }
}

        var movieSelected = false;
        var scienceSelected = false;
        var historySelected = false;
        var sportsSelected = false;
        var musicSelected = false;
        var tvSelected = false;
        var booksSelected = false;
        var geoSelected = false;

        var genreCount = 0;

function questionCheck(data) {

    check = [movieSelected, scienceSelected, historySelected, sportsSelected, musicSelected, tvSelected, booksSelected, geoSelected];

    for (let i = 0; i < check.length; i++) {

        // console.log(check[i]);
     
        if (check[i] === true && genreCount === 1){
    
            // console.log(check);
            // console.log(genreCount);
            console.log(data);

            localStorage.setItem('question1', JSON.stringify(data.results[0]));
            localStorage.setItem('question2', JSON.stringify(data.results[1]));
            localStorage.setItem('question3', JSON.stringify(data.results[2]));
            localStorage.setItem('question4', JSON.stringify(data.results[3]));
            localStorage.setItem('question5', JSON.stringify(data.results[4]));
            localStorage.setItem('question6', JSON.stringify(data.results[5]));
            localStorage.setItem('question7', JSON.stringify(data.results[6]));
            localStorage.setItem('question8', JSON.stringify(data.results[7]));
            localStorage.setItem('question9', JSON.stringify(data.results[8]));
            localStorage.setItem('question10', JSON.stringify(data.results[9]));
            localStorage.setItem('question11', JSON.stringify(data.results[10]));
            localStorage.setItem('question12', JSON.stringify(data.results[11]));
            localStorage.setItem('question13', JSON.stringify(data.results[12]));
            localStorage.setItem('question14', JSON.stringify(data.results[13]));
            localStorage.setItem('question15', JSON.stringify(data.results[14]));
        }

        // if (check[i] === true && genreCount === 2){
    
        //     // console.log(check);
        //     // console.log(genreCount);

        //     localStorage.setItem('question9', JSON.stringify(data.results[8]));
        //     localStorage.setItem('question10', JSON.stringify(data.results[9]));
        //     localStorage.setItem('question11', JSON.stringify(data.results[10]));
        //     localStorage.setItem('question12', JSON.stringify(data.results[11]));
        //     localStorage.setItem('question13', JSON.stringify(data.results[12]));
        //     localStorage.setItem('question14', JSON.stringify(data.results[13]));
        //     localStorage.setItem('question15', JSON.stringify(data.results[14]));

        // }

        // if (check[i] === true && genreCount === 3){
    
        //     // console.log(check);
        //     // console.log(genreCount);

        //     localStorage.setItem('question6', JSON.stringify(data.results[5]));
        //     localStorage.setItem('question7', JSON.stringify(data.results[6]));
        //     localStorage.setItem('question8', JSON.stringify(data.results[7]));
        //     localStorage.setItem('question9', JSON.stringify(data.results[8]));
        //     localStorage.setItem('question10', JSON.stringify(data.results[9]));

        // }

        appendQuestion(data)
    }
}

function questionCheckMedium(data2) {

    check = [movieSelected, scienceSelected, historySelected, sportsSelected, musicSelected, tvSelected, booksSelected, geoSelected];

    for (let i = 0; i < check.length; i++) {

        // console.log(check[i]);
     
        if (check[i] === true && genreCount === 1){
    
            // console.log(check);
            // console.log(genreCount);
            console.log(data2);

            localStorage.setItem('question1-m', JSON.stringify(data2.results[0]));
            localStorage.setItem('question2-m', JSON.stringify(data2.results[1]));
            localStorage.setItem('question3-m', JSON.stringify(data2.results[2]));
            localStorage.setItem('question4-m', JSON.stringify(data2.results[3]));
            localStorage.setItem('question5-m', JSON.stringify(data2.results[4]));
            localStorage.setItem('question6-m', JSON.stringify(data2.results[5]));
            localStorage.setItem('question7-m', JSON.stringify(data2.results[6]));
            localStorage.setItem('question8-m', JSON.stringify(data2.results[7]));
            localStorage.setItem('question9-m', JSON.stringify(data2.results[8]));
            localStorage.setItem('question10-m', JSON.stringify(data2.results[9]));
            localStorage.setItem('question11-m', JSON.stringify(data2.results[10]));
            localStorage.setItem('question12-m', JSON.stringify(data2.results[11]));
            localStorage.setItem('question13-m', JSON.stringify(data2.results[12]));
            localStorage.setItem('question14-m', JSON.stringify(data2.results[13]));
            localStorage.setItem('question15-m', JSON.stringify(data2.results[14]));
        }

        appendQuestionMedium(data2)

    }
}

function questionCheckHard(data3) {

    check = [movieSelected, scienceSelected, historySelected, sportsSelected, musicSelected, tvSelected, booksSelected, geoSelected];

    for (let i = 0; i < check.length; i++) {

        // console.log(check[i]);
     
        if (check[i] === true && genreCount === 1){
    
            // console.log(check);
            // console.log(genreCount);
            console.log(data3);

            localStorage.setItem('question1-h', JSON.stringify(data3.results[0]));
            localStorage.setItem('question2-h', JSON.stringify(data3.results[1]));
            localStorage.setItem('question3-h', JSON.stringify(data3.results[2]));
            localStorage.setItem('question4-h', JSON.stringify(data3.results[3]));
            localStorage.setItem('question5-h', JSON.stringify(data3.results[4]));
            localStorage.setItem('question6-h', JSON.stringify(data3.results[5]));
            localStorage.setItem('question7-h', JSON.stringify(data3.results[6]));
            localStorage.setItem('question8-h', JSON.stringify(data3.results[7]));
            localStorage.setItem('question9-h', JSON.stringify(data3.results[8]));
            localStorage.setItem('question10-h', JSON.stringify(data3.results[9]));
            localStorage.setItem('question11-h', JSON.stringify(data3.results[10]));
            localStorage.setItem('question12-h', JSON.stringify(data3.results[11]));
            localStorage.setItem('question13-h', JSON.stringify(data3.results[12]));
            localStorage.setItem('question14-h', JSON.stringify(data3.results[13]));
            localStorage.setItem('question15-h', JSON.stringify(data3.results[14]));
        }

        appendQuestionHard(data3)

    }
}

//Getting values from the API and storing in a local json object
function quizQuestions(){
    var apiUrl = "https://opentdb.com/api.php?amount=15&category="+genre+"&difficulty=easy&type=multiple";
    var apiUrl2 = "https://opentdb.com/api.php?amount=15&category="+genre+"&difficulty=medium&type=multiple";
    var apiUrl3 = "https://opentdb.com/api.php?amount=15&category="+genre+"&difficulty=hard&type=multiple";
    var options = [];
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        storingQuizData = JSON.stringify(data);
        jsonData = JSON.parse(storingQuizData);
        
        if (data.results[0].category === "Entertainment: Film") {
            if (movieSelected === true){
                genreCount = genreCount;
            } else {
                movieSelected = true;
                genreCount++;
            }

            questionCheck(data);
            
        }

        if (data.results[0].category === "Science & Nature") {
            
            if (scienceSelected === true){
                genreCount = genreCount;
            } else {
                scienceSelected = true;
                genreCount++;
            }

            questionCheck(data);

        }

        if (data.results[0].category === "History") {
            
            if (historySelected === true){
                genreCount = genreCount;
            } else {
                historySelected = true;
                genreCount++;
            }

            questionCheck(data);
        }

        if (data.results[0].category === "Sports") {

            if (sportsSelected === true){
                genreCount = genreCount;
            } else {
                sportsSelected = true;
                genreCount++;
            }
            
            questionCheck(data);

        }

        if (data.results[0].category === "Entertainment: Music") {
            if (musicSelected === true){
                genreCount = genreCount;
            } else {
                musicSelected = true;
                genreCount++;
            }

            questionCheck(data);
        }

        if (data.results[0].category === "Entertainment: Television") {
            if (tvSelected === true){
                genreCount = genreCount;
            } else {
                tvSelected = true;
                genreCount++;
            }

            questionCheck(data);
        }

        if (data.results[0].category === "Entertainment: Books") {
            if (booksSelected === true){
                genreCount = genreCount;
            } else {
                booksSelected = true;
                genreCount++;
            }

            questionCheck(data);
        }

        if (data.results[0].category === "Geography") {
            if (geoSelected === true){
                genreCount = genreCount;
            } else {
                geoSelected = true;
                genreCount++;
            }

            questionCheck(data);

        }

        // console.log(data);

        if (nxtCount >= 0 && nxtCount <= 15) {

        storeJSONData()

        }

        return fetch (apiUrl2)

        .then(function(response){
            return response.json(response);
        })

        .then(function(data2){
            console.log(data2);

            if (data.results[0].category === "Entertainment: Film") {
                if (movieSelected === true){
                    genreCount = genreCount;
                } else {
                    movieSelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
                
            }
    
            if (data.results[0].category === "Science & Nature") {
                
                if (scienceSelected === true){
                    genreCount = genreCount;
                } else {
                    scienceSelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
    
            }
    
            if (data.results[0].category === "History") {
                
                if (historySelected === true){
                    genreCount = genreCount;
                } else {
                    historySelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
            }
    
            if (data.results[0].category === "Sports") {
    
                if (sportsSelected === true){
                    genreCount = genreCount;
                } else {
                    sportsSelected = true;
                    genreCount++;
                }
                
                questionCheckMedium(data2);
    
            }
    
            if (data.results[0].category === "Entertainment: Music") {
                if (musicSelected === true){
                    genreCount = genreCount;
                } else {
                    musicSelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
            }
    
            if (data.results[0].category === "Entertainment: Television") {
                if (tvSelected === true){
                    genreCount = genreCount;
                } else {
                    tvSelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
            }
    
            if (data.results[0].category === "Entertainment: Books") {
                if (booksSelected === true){
                    genreCount = genreCount;
                } else {
                    booksSelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
            }
    
            if (data.results[0].category === "Geography") {
                if (geoSelected === true){
                    genreCount = genreCount;
                } else {
                    geoSelected = true;
                    genreCount++;
                }
    
                questionCheckMedium(data2);
    
            }

            return fetch (apiUrl3)

        .then(function(response){
            return response.json(response);
        })

        .then(function(data3){
            console.log(data3);

            if (data.results[0].category === "Entertainment: Film") {
                if (movieSelected === true){
                    genreCount = genreCount;
                } else {
                    movieSelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
                
            }
    
            if (data.results[0].category === "Science & Nature") {
                
                if (scienceSelected === true){
                    genreCount = genreCount;
                } else {
                    scienceSelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
    
            }
    
            if (data.results[0].category === "History") {
                
                if (historySelected === true){
                    genreCount = genreCount;
                } else {
                    historySelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
            }
    
            if (data.results[0].category === "Sports") {
    
                if (sportsSelected === true){
                    genreCount = genreCount;
                } else {
                    sportsSelected = true;
                    genreCount++;
                }
                
                questionCheckHard(data3);
    
            }
    
            if (data.results[0].category === "Entertainment: Music") {
                if (musicSelected === true){
                    genreCount = genreCount;
                } else {
                    musicSelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
            }
    
            if (data.results[0].category === "Entertainment: Television") {
                if (tvSelected === true){
                    genreCount = genreCount;
                } else {
                    tvSelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
            }
    
            if (data.results[0].category === "Entertainment: Books") {
                if (booksSelected === true){
                    genreCount = genreCount;
                } else {
                    booksSelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
            }
    
            if (data.results[0].category === "Geography") {
                if (geoSelected === true){
                    genreCount = genreCount;
                } else {
                    geoSelected = true;
                    genreCount++;
                }
    
                questionCheckHard(data3);
    
            }

        })

        })

    });

}

//display the questions and answer options to the front end from JSON object
function storeJSONData(){
    question.innerHTML = jsonData.results[nxtCount].question;
    for (var i = 0; i < 4; i++) {
        tempQuizAnswers = [jsonData.results[nxtCount].incorrect_answers[0], jsonData.results[nxtCount].incorrect_answers[1], jsonData.results[nxtCount].incorrect_answers[2],jsonData.results[nxtCount].correct_answer]
            var r = Math.floor(Math.random() * (i + 1));
            var random = tempQuizAnswers[i];
            tempQuizAnswers[i] = tempQuizAnswers[r];
            tempQuizAnswers[r] = random;
        }
            lblAnswer1.textContent = tempQuizAnswers[0];
            lblAnswer2.textContent = tempQuizAnswers[1];
            lblAnswer3.textContent = tempQuizAnswers[2];
            lblAnswer4.textContent = tempQuizAnswers[3];
}

function timeBarCount(){
startTimer = setInterval(barCount,20);
function barCount(){
    if (divTimeLeft.clientWidth < divCountdownBar.clientWidth){
        divTimeLeft.style.width = divTimeLeft.clientWidth + 1 +"px";
}
    else{
        divTimeLeft.style.width = divCountdownBar.clientWidth + "px";
        clearInterval(startTimer);
    }
}
}

function clearTimer(){
    clearInterval(startTimer);
    divTimeLeft.style.width = "0px";
}