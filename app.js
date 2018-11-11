var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=&q=taco&limit=5&offset=0&rating=R&lang=en";

// Perfoming an AJAX GET request to our queryURL
$.ajax({
    url: queryURL,
    method: "GET"
})