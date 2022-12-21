import { createCards, createCheck, filterAll } from "../module/functions.js";
const sectionMain = document.getElementById("sectionContainer");
const checkContainer = document.getElementById("formCheck");
const searchContainer = document.getElementById("inpSearch");
let amzEvents;
let cardsPastE;

fetch("https://amazing-events.onrender.com/api/events")
    .then(res => res.json())
    .then(data => {
        amzEvents = data.events;
        let categories = Array.from(new Set(amzEvents.map(cat => cat.category)));
        cardsPastE = amzEvents.filter(eventData => new Date(eventData.date).getFullYear() < 2022);
        createCards(cardsPastE, sectionMain);
        createCheck(categories, checkContainer);
    })
    .catch(err => console.log(err))

const search = document.getElementById("inpText");

searchContainer.addEventListener("input", () => {
    let filterCardsBySearch = filterAll(cardsPastE, search.value);
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
    let filterCardsByCategory = filterAll(cardsPastE, search.value);
    if (!filterCardsByCategory) {
        sectionMain.innerHTML =
            `<div class="card col-8 col-sm-5 col-lg-3 col-xxl-2">
            <h6 class="priceH6 card-body gap-12 text-center">EVENT NOT FOUND</h6>
        </div>`
    } else {
        createCards(filterCardsByCategory, sectionMain);
    }
});
