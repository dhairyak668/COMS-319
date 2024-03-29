/**
    Author: Dhairya Kachalia
    NetId : dhairyak@iastate.edu
    Date  : 27 February, 2024 
*/

fetch("./dhairyak_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var mainContainer = document.getElementById("goodmovies");
    console.log(mainContainer);

    for(let i = 0; i<myMovies.movies.length;i++){
        let movieTitle = myMovies.movies[i].title;
        let movieYear = myMovies.movies[i].year;
        let movieimg = myMovies.movies[i].url;
        
        let mytr = document.createElement("div");

        mytr.innerHTML = `
        <div>
            <h3>${movieTitle}</h3>
            <p>${movieYear}</p>
            <img src ="${movieimg}" width="200px">
        </div> `;
        mainContainer.appendChild(mytr);
    }
}