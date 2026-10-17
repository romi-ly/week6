const userInputField =document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const heroesDisplay = document.querySelector(".outputlist");
let heroes = [];

addBtn.addEventListener("click", (event) => {
    const userHero = userInputField.value;

    if(userHero != "") {
       heroes.push(userHero);

        userInputField.value = "";
        heroesDisplay.innerHTML = "";


        heroes.forEach((hero) => {
            const heroListElement = document.createElement("li");
            heroListElement.innerHTML = hero;
            heroesDisplay.appendChild(heroListElement);
        });
    } else {
        console.log("Error. Blank Input.");
    }


    
    
    console.log(heroes);
    event.preventDefault();
});

