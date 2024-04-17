/**
 * Author: Haad Cheema
 * ISU Netid : haad736@iastate.edu
 * Date :  4/16/2024
 */


fetch("http://localhost:8081/listRobots")
  .then((response) => response.json())
  .then((myRobots) => loadRobots(myRobots));

function loadRobots(myRobots) {
  var CardMovie = document.getElementById("col");
  var checkboxes = [];
  var cards = [];

  for (var i = 0; i < myRobots.length; i++) {
    let card = "card" + i.toString();

    let id = myRobots[i].id;
    let name = myRobots[i].name;
    let price = myRobots[i].price;
    let url = myRobots[i].imageUrl;
    let description = myRobots[i].description;

    // create a new HTML div division
    let AddCardRobots = document.createElement("div");
    // add class = “col” to new division for Bootstrap
    AddCardRobots.classList.add("col");
    // create Bootstrap card
    AddCardRobots.innerHTML = `
    

            <div id=${card} class="card shadow-sm">

                <div class="card shadow-sm">

                    <img src=${url} class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> ${id} <strong>${name}</strong>, $${price}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-body-secondary">${description}</small>
                        </div>
                    </div>
                </div>
            </div>
                `;

    CardMovie.appendChild(AddCardRobots);
  }
}
function getInputValue() {
  fetch("http://localhost:8081/listRobots")
    .then((response) => response.json())
    .then((myRobots) => loadRobots(myRobots));

  let robotName = document.forms["my_form"]["inputRobotName"];
  let inputRobotName = robotName.value;

  function loadRobots(myRobots) {
    var mainContainer = document.getElementById("goodRobots");
    for (var i = 0; i < myRobots.length; i++) {
      if (myRobots[i].id == inputRobotName) {
        let id = myRobots[i].id;
        let name = myRobots[i].name;

        console.log(name);

        let price = myRobots[i].price;
        let url = myRobots[i].imageUrl;
        let description = myRobots[i].description;
        let division = document.createElement("div");
        // the space between words matters
        division.innerHTML = `
                <div class="album py-5 bg-body-tertiary">
                    <div class="container">
                        <div id="col" class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">

                            <div class="card shadow-sm">
                                <img src=${url} class="card-img-top" alt="...">
                                     <div class="card-body">
                                        <p class="card-text"> ${id} <strong>${name}</strong>, $${price}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-body-secondary">${description}</small>
                                        </div>
                                    </div>
                            </div>
                         </div>
                    </div>
                </div>
                
                `;
      mainContainer.appendChild(division);
      }
    }
  }
}
