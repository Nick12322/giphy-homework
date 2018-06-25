$(document).ready(function() {

var animals = ["Dogs", "Cats", "Birds", "Lions", "Tigers"];




function renderButtons() {

    $("#animals-list").empty();
    for (var i = 0; i < animals.length; i++) {
        $("#animals-list").append("<button id="+animals[i]+" class='animal-button'>" + animals[i] + "</button>");
    };
};



$("#add-animal").on("click", function (event) {
    
    var animalChosen = $("#animal-input").val();
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalChosen + "&api_key=P2zGaYjlUtwPSQZ3tbioUt0FAo6es3mA&limit=10";

    $("#gifsGoHere").html("");
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
          var results = response.data;
          for (var i = 0; i <= results.length; i++) {
          $("#gifsGoHere").append("<p>Rating: "+results[i].rating+"</p><br><img src="+results[i].images.fixed_height.url+"><br>");
        }
    });

    event.preventDefault();
    var userInput = $("#animal-input").val();
    animals.push(userInput);
    $("#animal-input").val("");
    renderButtons();
});

renderButtons();

$(document).on("click", ".animal-button", function() {
    console.log(this.id);
    var animalChosen = this.id;
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalChosen + "&api_key=P2zGaYjlUtwPSQZ3tbioUt0FAo6es3mA&limit=10";

    $("#gifsGoHere").html("");
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
          var results = response.data;
          for (var i = 0; i <= results.length; i++) {
          $("#gifsGoHere").append("<p>Rating: "+results[i].rating+"</p><br><img src="+results[i].images.fixed_height.url+"><br>");
        };
    });
    

});
});
