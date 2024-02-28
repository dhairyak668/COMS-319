/**
    Author: Dhairya Kachalia
    NetId : dhairyak@iastate.edu
    Date  : 27 February, 2024 
*/

fetch("./dhairyak_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var CardMovie = document.getElementById("col");

    var checkboxes = [];
    var cards = [];

    for (let i = 0; i < myMovies.movies.length; i++) {
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;

        let checkbox = "checkbox" + i.toString();
        let card = "card" + i.toString();
        let mytr = document.createElement("div");
        mytr.classList.add("col");

        mytr.innerHTML = `
        <input type = "checkbox" id=${checkbox} class "form-check-input" checked>
        <label for = ${checkbox} class="form-check-label">Show Image ${i}</label>
        
        <div id=${card} class="card shadow-sm">
        <img src="${url} class="card-img-top" width="200px" alt=movieimg">
        <div class="card-body">
            <p class="card-text"> <strong>${title}</strong>, ${year}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-body-secondary">9 mins</small>
            </div>
        </div>
        </div> `;

        CardMovie.appendChild(mytr);

        let cbox = document.getElementById(checkbox);
        checkboxes.push(cbox);
        // let cd = document.getElementById(card);
        // cards.push(cd);
    }
}