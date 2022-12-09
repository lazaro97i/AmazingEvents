const sectionMain = document.getElementById("sectionContainer");
const fragment = document.createDocumentFragment();


for (let element of data.events) {

    const eventDate = new Date(element.date);

    if (eventDate.getFullYear() < 2022) {
        const divContainer = document.createElement("div");
        divContainer.classList.add("card", "col-8", "col-sm-5", "col-lg-3", "col-xxl-2");
        let imgDiv = document.createElement("img");
        imgDiv.classList.add("align-self-center", "card-img-top");
        imgDiv.src = element.image;
        const divChild = document.createElement("div");
        divChild.classList.add("card-body");
        let h5Div = document.createElement("h5");
        h5Div.classList.add("card-title");
        h5Div.textContent = element.name;
        let pDiv = document.createElement("p");
        pDiv.classList.add("card-text");
        pDiv.textContent = element.description;
        const divChild2 = document.createElement("div");
        divChild2.classList.add("card-body", "d-flex", "justify-content-evenly", "align-items-center", "gap-2");
        let h6Div2 = document.createElement("h6");
        h6Div2.classList.add("priceH6");
        h6Div2.textContent = `Price: $ ${element.price}`;
        let aDiv2 = document.createElement("a");
        aDiv2.classList.add("card-link");
        aDiv2.textContent = "View More"
        aDiv2.href = "./details.html";
        divChild2.append(h6Div2, aDiv2);
        divChild.append(h5Div, pDiv);
        divContainer.append(imgDiv, divChild, divChild2)
        fragment.appendChild(divContainer);
    }

}
sectionMain.appendChild(fragment);