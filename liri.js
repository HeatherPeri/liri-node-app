require("dotenv").config();
const fs = require("fs");
const keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


//@link https://www.npmjs.com/package/axios
const axios = require("axios");


function which(){
    .prompt([
    {
        type: "list",
        message: "What are you looking for? ",
        choices: [
            "spotify-this-song",
            "concert-this",
            "movie-this",
            "do-what-it-says"
        ],
    ])    
}
}

.then(function (answers) {

}

function spotifyAPI() {

    var song = [
        "Artist: " +
        "Song Name: " +
        "Album: " +
    ].join("\n");
}

  
    axios.get("http://www.omdbapi.com/?t=" + movieSearch +
    "&y=&plot=short&apikey=trilogy").then(
    function(response) {
      var Movie = response.data;

      var movie = [
          "Title: " + Movie.Title,
          "Year: " + Movie.Year,
          "Filmed In: " + Movie.Country,
          "Summary: " + Movie.Plot,
          "Starring: " + Movie.Actors
      ].join("\n");
    },
  
    axios.get(     "https://rest.bandsintown.com/artists/" + bandSearch +
    "/events?app_id=codingbootcamp").then(
    function(response) {
      var concert = result.venue;
      var date = moment(result.datetime).format("MM/DD/YYYY");

      var Concert = [
          "Venue: " + Concert.name,
          "Location: " + Concert.city,
          "Date: " + date
      ].join("\n");
    },



//   function(error) {
//     if (error.response) {

//     }};


