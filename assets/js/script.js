// Fetches from the OPENTDB API
// var getApi1 = function (user) {
//     var apiUrl = "https://opentdb.com/api.php?amount=50";
//     fetch(apiUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// };

var sticky1 = document.getElementById("sticky-1");
var sticky2 = document.getElementById("sticky-2");
var sticky3 = document.getElementById("sticky-3");
var sticky4 = document.getElementById("sticky-4");
var question = document.getElementById("question");
var lblAnswer1 = document.getElementById("lblAnswer1");
var lblAnswer2 = document.getElementById("lblAnswer2");
var lblAnswer3 = document.getElementById("lblAnswer3");
var lblAnswer4 = document.getElementById("lblAnswer4");

var genre = "17";
var level = "easy";

var getApi1 = function (user) {

sticky1.addEventListener("click", function(event){
    event.preventDefault;
    console.log(event.target);
    console.log("button clicked");
    var apiUrl = "https://opentdb.com/api.php?amount=15&category="+genre+"&difficulty="+level+"&type=multiple";
    console.log(apiUrl);
    var options = [];
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (i=0;i<10;i++){
            question.textContent = i+"."+data.results[i].question;
            lblAnswer1.textContent = data.results[i].incorrect_answers[0];
            lblAnswer2.textContent = data.results[i].incorrect_answers[1];
            lblAnswer3.textContent = data.results[i].incorrect_answers[2];
            lblAnswer4.textContent = data.results[i].incorrect_answers[3];
        }
    });
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
getApi1();
//getApi2();