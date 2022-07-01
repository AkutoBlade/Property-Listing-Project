
// const property = [{
//     id: 1,
//     address: "960 Kolokolo Place",
//     image: "1.jpg",
//     price: 1450000,
//     bedroom: 4,
//     bathroom: 3,
//     land_size_ft: 5431
// },
// {
//     id: 2,
//     image: "2.jpg",
//     address: "1220 Mokuhano Street",
//     price: 1525000,
//     bedroom: 4,
//     bathroom: 2,
//     land_size_ft: 5500
// },
// {
//     id: 3,
//     address: "709 Hahaione Street",
//     image: "3.jpg",
//     price: 1612000,
//     bedroom: 4,
//     bathroom: 3,
//     land_size_ft: 6540
// },
// {
//     id: 4,
//     address: "741 Kapulena Loop",
//     image: "4.jpg",
//     price: 1850000,
//     bedroom: 5,
//     bathroom: 3,
//     land_size_ft: 8117
// },
// {
//     id: 5,
//     address: "775 Ainapo Street",
//     image: "5.jpg",
//     price: 1850000,
//     bedroom: 4,
//     bathroom: 2,
//     land_size_ft: 5929
// },
// {
//     id: 6,
//     address: "775 Ainapo Street",
//     image: "6.jpg",
//     price: 1875000,
//     bedroom: 4,
//     bathroom: 3,
//     land_size_ft: 7508
// },
// {
//     id: 7,
//     address: "1106 Kaluanui Road",
//     image: "7.jpg",
//     price: 1900000,
//     bedroom: 5,
//     bathroom: 4,
//     land_size_ft: 6157
// },
// {
//     id: 8,
//     address: " 1020 Hoa Street",
//     image: "8.jpg",
//     price: 2368000,
//     bedroom: 3,
//     bathroom: 2,
//     land_size_ft: 12200
// },git
// {
//     id: 9,
//     address: "280 Poipu Drive",
//     image: "9.jpg",
//     price: 11900000,
//     bedroom: 6,
//     bathroom: 5,
//     land_size_ft: 21539
// },
// {
//     id: 10,
//     address: "6721 Hawaii Kai Drive",
//     image: "10.jpg",
//     price: 2588000,
//     bedroom: 4,
//     bathroom: 2,
//     land_size_ft: 8951
// },
// {
//     id: 11,
//     address: "1220 Mokuhano Street",
//     image: "11.jpg",
//     price: 1850000,
//     bedroom: 4,
//     bathroom: 2,
//     land_size_ft: 19215
// },
// {
//     id: 12,
//     address: " 124 Hanohano Place",
//     image: "12.jpg",
//     price: 3388000,
//     bedroom: 5,
//     bathroom: 3,
//     land_size_ft: 11857
// }
// ]

// localStorage.setItem("property", JSON.stringify(property));

const properties = JSON.parse(localStorage.getItem("property"));
const propertiesBox = document.getElementById("properties")

createHTML(properties);

function createHTML(props) {
    propertiesBox.innerHTML = '';
    props.forEach(sales => {
        propertiesBox.innerHTML += `
         <div class="row" id="row">
        <div id="${sales.id}" style="background:url(./image/${sales.image}) no-repeat center center/cover" class="sizes">
         <div class="text">
         <label class="sales">F0R SALE</label>
         <h5 class="address">${sales.address}</h5>
         <h6 class="price">$${sales.price}</h6>
         <div class="text-light icon">
        <i class="fa-solid fa-bed"></i> ${sales.bedroom}
        <i class="fa-solid fa-bath"></i> ${sales.bathroom}
        <i class="fa-solid fa-map"></i> ${sales.land_size_ft} sq ft
         </div>
         </div>
        </div>
        </div>`
    });
}

function bedrooms(value1) {
    let filteredItems = properties.filter(x => {
        if (x >= 5) {
            return x.bedroom >= value1
        } else {
            return x.bedroom == value1
        }

    });
    createHTML(filteredItems);

}

function bathrooms(value2) {

    let filteredItems = properties.filter(x => {
        return x.bathroom == value2
        // if(x>=5){
        //     return   x.bathroom >= value
        //    }
        //    else{

        //    }
    });
    createHTML(filteredItems);
}

function price(value3) {
    let filteredItems = properties.filter(x => {
        return x.price <= value3
    });
    createHTML(filteredItems);
}