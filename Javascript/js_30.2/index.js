import { apiKey } from "./apiKey.js";

const movie = {
  Title: "Titanic",
  Year: "1997",
  Rated: "PG-13",
  Released: "19 Dec 1997",
  Runtime: "194 min",
  Genre: "Drama, Romance",
  Director: "James Cameron",
  Writer: "James Cameron",
  Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
  Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  Language: "English, Swedish, Italian, French",
  Country: "United States, Mexico",
  Awards: "Won 11 Oscars. 126 wins & 83 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.9/10" },
    { Source: "Rotten Tomatoes", Value: "88%" },
    { Source: "Metacritic", Value: "75/100" },
  ],
  Metascore: "75",
  imdbRating: "7.9",
  imdbVotes: "1,185,567",
  imdbID: "tt0120338",
  Type: "movie",
  DVD: "08 Jan 2002",
  BoxOffice: "$659,363,944",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

document.querySelector("#submit-btn").addEventListener("click", getProfile);

async function getProfile() {
  const inputValue = document.querySelector("input").value;
  let response = await fetch(
    `https://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`
  );
  // let response = movie;
  let data = await response.json();
  let ratingsArray = data.Ratings;
  if (ratingsArray.length < 3) {
    alert("Your movie doesn't have all the ratings!");
  }
  document.querySelector(".movie-poster").setAttribute("src", `${data.Poster}`);
  document.querySelector(".movie-title").innerText = "Title: " + data.Title;
  document.querySelector(".genre").innerText = "Genre: " + data.Genre;
  document.querySelector(".year").innerText = "Year: " + data.Year;
  document.querySelector(".plot").innerText = "Plot: " + data.Plot;
  document.querySelector(".director").innerText = "Director: " + data.Director;
  document.querySelector(".actors").innerText = "Actors: " + data.Actors;
  document.querySelector(".ratings").innerText = "Ratings: ";
  for (let i = 0; i < ratingsArray.length; i++) {
    document.querySelector(
      ".ratings"
    ).innerText += ` ${ratingsArray[i].Source}  ${ratingsArray[i].Value}`;
  }
}
