const properties = JSON.parse(localStorage.getItem("property"));
const propertiesBox= document.querySelector(".boxes")

createHTML(properties);

function createHTML(props){
    propertiesBox.innerHTML = '';
    
    props.forEach(sales => {
        propertiesBox.innerHTML +=`    
        <div class="col-md-1">${sales.id}</div>
        <div class="col-md-2">${sales.address}</div>
        <div class="col-md-1">
        <div>
        <img src="./image/${sales.image}" style="height: 50px; width:100px">
        </div>
        </div>
        <div class="col-md-1">$${sales.price}</div>
        <div class="col-md-2">${sales.}</div>
        <div class="col-md-2"></div>
        <div class="col-md-1"></div>
        <div class="col-md-2"></div>
 `   
    });
}