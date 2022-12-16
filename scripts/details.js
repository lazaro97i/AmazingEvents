
const amzEvents = data.events;
const queryStrign = location.search
const params = new URLSearchParams(queryStrign);
const id = params.get("id");

console.log([id]);

const idEvent = amzEvents.find( aEvent => aEvent._id == id );

console.log(idEvent);

const detailContainer = document.getElementById("detailCard");

detailContainer.innerHTML = 
`<img class="imgDetail col-12 col-md-6 col-xl-4" src="${idEvent.image}" alt="image ${idEvent.name}">
<section class="sectionDetail col-md-6 col-xl-4">
    <div class="text-center">
        <h2>${idEvent.name}</h2>
        <h6>${idEvent.description}</h6>
    </div>
    <ul>
        <li><span class="fw-semibold text-decoration-underline">Date:</span> ${idEvent.date}</li>
        <li><span class="fw-semibold text-decoration-underline">Category:</span> ${idEvent.category}</li>
        <li><span class="fw-semibold text-decoration-underline">Place:</span> ${idEvent.place}</li>
        <li><span class="fw-semibold text-decoration-underline">Capacity:</span> ${idEvent.capacity}</li>
        <li><span class="fw-semibold text-decoration-underline">Assistance:</span> ${idEvent.assistance}</li>
        <li><span class="fw-semibold priceH6">Price: $ ${idEvent.price}</span></li>
    </ul>
</section>`