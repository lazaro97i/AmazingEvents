import { createCards, createCheck, filterAll } from "../module/functions.js"
const sectionMain = document.getElementById("sectionContainer");
const checkContainer = document.getElementById("formCheck");
const searchContainer = document.getElementById("inpSearch");
const amzEvents = data.events;
let categories = Array.from(new Set(amzEvents.map(cat => cat.category)));

createCards(amzEvents, sectionMain);
createCheck(categories, checkContainer);

const search = Array.from(document.getElementsByClassName("form-control"));

console.log(search);

searchContainer.addEventListener("input", () => {
    let filterCardsBySearch = filterAll(amzEvents, search);
    if (!filterCardsBySearch) {
        sectionMain.innerHTML = 
        `<div class="card col-8 col-sm-5 col-lg-3 col-xxl-2">
            <h6 class="priceH6 card-body gap-12 text-center">EVENT NOT FOUND</h6>
        </div>`
    } else {
        createCards(filterCardsBySearch, sectionMain);
    }

});

checkContainer.addEventListener("change", () => {
    let filterCardsByCategory = filterAll(amzEvents, search);
    createCards(filterCardsByCategory, sectionMain);
});


