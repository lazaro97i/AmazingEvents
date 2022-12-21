const eventStats = document.getElementById("eventStats");
const ueStats = document.getElementById("ueStats");
const peStats = document.getElementById("peStats");
let amzEvents;
let cardsUpcomingE;
let cardsPastE;

fetch("https://amazing-events.onrender.com/api/events")
    .then(res => res.json())
    .then(data => {
        amzEvents = data.events;
        cardsUpcomingE = amzEvents.filter(eventData => new Date(eventData.date).getFullYear() >= 2022);
        cardsPastE = amzEvents.filter(eventData => new Date(eventData.date).getFullYear() < 2022);
        eventsStatistics(amzEvents, eventStats);
        ueAndpeStatistics(cardsUpcomingE, ueStats);
        ueAndpeStatistics(cardsPastE, peStats);
    })
    .catch(err => console.log(err))

function eventsStatistics(data, container) {
    let auxMax1 = -1;
    let eventMax;
    let auxMin1 = 9999999;
    let eventMin;
    let auxCap = -1;
    let eventCap;
    for (let event of data) {
        let auxMax2 = (event.assistance * 100) / event.capacity;
        if(auxMax2 > auxMax1){
            auxMax1 = auxMax2;
            eventMax = event;
        }
        let auxMin2 = (event.assistance * 100) / event.capacity;
        if(auxMin2 < auxMin1){
            auxMin1 = auxMin2;
            eventMin = event;
        }
        if(event.capacity > auxCap){
            auxCap = event.capacity;
            eventCap = event;
        }
    }
    container.innerHTML =
        `<td>${eventMax.name} - ${auxMax1.toFixed(2)} %</td>
        <td>${eventMin.name} - ${auxMin1.toFixed(2)} %</td>
        <td>${eventCap.name} - Capacity: ${auxCap}</td>`
}

function ueAndpeStatistics(data, container) {
    let fragment = document.createDocumentFragment();
    for (let event of data) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = event.category;
        let td2 = document.createElement("td");
        if(!event.assistance){
            td2.textContent = `$ ${event.estimate * event.price}`;
        }else{
            td2.textContent = `$ ${event.assistance * event.price}`;
        }
        let td3 = document.createElement("td");
        if(!event.assistance){
            td3.textContent = `${((event.estimate * 100) / event.capacity).toFixed(2)} %`;
        }else{
            td3.textContent = `${((event.assistance * 100) / event.capacity).toFixed(2)} %`;
        }
        tr.append(td, td2, td3);
        fragment.appendChild(tr);
    }
    container.appendChild(fragment);
}