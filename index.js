let carBrands =["BMW","Audi","Ferrari","Benz"];
let listContainerEle = document.getElementById("listContainer");

function createAppendCars(){
    for(let eachCar of carBrands){
        let listCarBrands = document.createElement("li");
        listCarBrands.textContent = eachCar;
        listContainerEle.appendChild(listCarBrands)
    }
}
createAppendCars();