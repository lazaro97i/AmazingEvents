
export function filterAll(dataList, searchValue){
    let filterCardsByCategory = filterByCategory(dataList);
    let filterCardsBySearch = filterBySearch(filterCardsByCategory, searchValue);
    return filterCardsBySearch;
}

export function createCheck(categoriesList, contain) {
    contain.innerHTML = "";
    let checks="";
    categoriesList.forEach(cat => {
        checks += `<label class="form-check form-check-inline form-check-label">
        <input class="form-check-input" type="checkbox" value="${cat}" name="${cat}">
        ${cat}
        </label>`
    });
    contain.innerHTML = checks;
}

export function createCards(dataList, contain) {
    let cards="";
        dataList.forEach(element => {
            cards += `<div class="card col-8 col-sm-5 col-lg-3 col-xxl-2">
            <img class="align-self-center card-img-top" src="${element.image}" alt="Lupa">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            </div>
            <div class="card-body d-flex justify-content-evenly align-items-center gap-2">
            <h6 class="priceH6">Price: $ ${element.price}</h6>
            <a class="card-link" href="./details.html?id=${element._id}">View More</a>
            </div>
            </div>`;
        });
    contain.innerHTML = cards;
}

export function filterByCategory(dataList){
    let inpChecked = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map( inp => inp.value);
    if(!inpChecked.length){
        return dataList;
    }else{
        return dataList.filter( dataElement => inpChecked.includes(dataElement.category));
    }
}

export function filterBySearch(dataList, valueSearch){
    let aux ="";
    aux = dataList.filter( element => element.name.toLowerCase().includes(valueSearch.toLowerCase()));
    if(!aux.length){
        return false;
    }else{
        return aux;
    }
}

