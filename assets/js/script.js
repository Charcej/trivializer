// Fetches from the OPENTDB API
var getApi1 = function (user) {
    var apiUrl = "https://opentdb.com/api.php?amount=50";
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

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
getApi2();


