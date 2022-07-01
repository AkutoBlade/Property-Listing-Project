
//Create Function
const properties = JSON.parse(localStorage.getItem("property"));
const propertiesBox= document.querySelector(".boxes")

createHTML(properties);

function createHTML(props){
    propertiesBox.innerHTML = '';
    
    props.forEach((sales,index=0)=> {
        propertiesBox.innerHTML +=`    
        <div class="col-md-1">${sales.id}</div>
        <div class="col-md-2">${sales.address}</div>
        <div class="col-md-1">
        <div>
        <img src="./image/${sales.image}" style="height: 50px; width:100px">
        </div>
        </div>
        <div class="col-md-1">$${sales.price}</div>
        <div class="col-md-2 text-center">${sales.bedroom}</div>
        <div class="col-md-2 text-center">${sales.bathroom}</div>
        <div class="col-md-1">${sales.land_size_ft}</div>
        <div class="col-md-2"><i class="fa-regular fa-pen-to-square" onclick="editRecord(${index})" data-bs-toggle="modal" data-bs-target="#Modal2"></i>  <i class="fa-regular fa-trash-can" Onclick="deleteRecord(${index})"></i></div>
 `    
    });

   
}

const record =document.querySelector('#record');

//Add Function
document.getElementById("count").innerHTML= properties.length;

function add(){
    let street = document.querySelector('#street').value;
    let image = document.querySelector('#urlimg').value;
    let beds = document.querySelector('#bedNumb').value;
    let baths = document.querySelector('#bathNumb').value;
    let price = document.querySelector('#price').value;
    let landsize = document.querySelector('#landsize').value;

    properties.push(
        {
            id: properties.length+1,
            address: street,
            image: image,
            price: price,
            bedroom: beds,
            bathroom: baths,
            land_size_ft: landsize
        }
    )
    localStorage.setItem("property", JSON.stringify(properties));
    createHTML(properties);
}
record.addEventListener('click',add);

//Delete Function
function deleteRecord(id) {
    if(id > -1) {
        properties.splice(id, 1);
        for (let i = 0; i < properties.length; i++) {
            properties[i].id = i+1;
        }
        localStorage.setItem("property",JSON.stringify(properties))
    }
        createHTML(properties);

        console.log(properties)
}

//Sort Function

let asc = true;

function sortByAddress(){
    asc = !asc;
    let sortBy= properties.sort((a,b)=>{
        let f1 = a.address;
        let f2= b.address;

        console.log(f1)
        if(f1 < f2){
            return -1;
        }
        if(f1 > f2){
        return 1
        }
        return 0;
    });

    if (asc == false) {
        document.querySelector("#icSort").innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
        createHTML(sortBy);
      } else if (asc == true) {
        document.querySelector("#icSort").innerHTML = `<i class="fa-solid fa-arrow-down-z-a"></i>`;
        sortBy.reverse();
        createHTML(sortBy);
      }
}

//Edit Function

let ids= 0;
function editRecord(id){
    let newland = properties.find(edt => edt.id -1 === id)
    document.querySelector('#street2').value = newland.address;
    document.querySelector('#urlimg2').value = newland.image;
    document.querySelector('#bedNumb2').value = newland.bedroom;
    document.querySelector('#bathNumb2').value = newland.bathroom;
    document.querySelector('#price2').value = newland.price;
    document.querySelector('#landsize2').value = newland.land_size_ft;
    ids = id;
}
function editAdd(){
    let newProp = JSON.parse(localStorage.getItem('property'));
    let newland = newProp.find(edt => edt.id -1 === ids)
    let street = document.querySelector('#street2').value;
    let image = document.querySelector('#urlimg2').value;
    let beds = document.querySelector('#bedNumb2').value;
    let baths = document.querySelector('#bathNumb2').value;
    let price = document.querySelector('#price2').value;
    let landsize = document.querySelector('#landsize2').value;
    newland.address = street;
    newland.image = image;
    newland.bedroom = beds;
    newland.bathroom = baths;
    newland.price = price;
    newland.land_size_ft = landsize;
    properties[ids] = newland;
    localStorage.setItem('property',JSON.stringify(properties));
    createHTML(properties);
}
document.querySelector('#editProperty').addEventListener('click',editAdd);

