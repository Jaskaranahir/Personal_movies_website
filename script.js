const API_KEY = "api_key=4464e83d7d1cd44a144df05fe34e4315";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + '/search/movie?' +API_KEY;

const main = document.getElementById("start");
const form = document.getElementById("main");
const search = document.getElementById("search");
getfilms(API_URL);

function getfilms(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = '';

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    console.log(overview);
    movieEl.innerHTML = `
        <div class="film">
         <img src="${IMG_URL+poster_path}" alt="${title}">

        <div class="film-info">
          <h3>${title}</h3>
          <span style = "padding:5px;color:white;background-color:${getColor(vote_average)}">${vote_average}</span>  
        </div>

        <div class="outline">
          <h3>Overview</h3>
          ${overview}

          

        </div>
        <?film>

      `

      main.appendChild(movieEl);


  })
}

function getColor(vote){
  if (vote>=8){
    return 'green'
  }else if (vote>=5){
    return 'orange'
  }else{
    return 'red'
  }
}

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const searchTerm = search.value;

      if(searchTerm){
          getfilms(searchURL+'&query='+searchTerm);

      }else{
        getfilms(API_URL);
      }


  })



