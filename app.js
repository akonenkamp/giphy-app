function searchGiphys(){
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=&q=taco&limit=5&offset=0&rating=R&lang=en";

// Perfoming an AJAX GET request to our queryURL
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
    console.log(queryURL);


// pull info from search form 


//assign result of search to html elements and appends to page
var giphy = $("<img>").attr("src", response.#PLACEHOLDERFORJSON);
var rating = $("<h3>").text(response.#PLACEHOLDERJSON);

$(".theGiph").empty();
$(".theGiph").append(giphy, rating);
});
}

//search for text entered in box and when button is pressed 
$(".search").on("click", function(event){
    event.preventDefault();
    var giphInput = $(".form-control").val().trim();
    searchGiphys(giphInput);
});