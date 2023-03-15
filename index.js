

// const image = document.querySelector("div img#photo");
// image.addEventListener('click', function(){
//     alert('Hey! Don\'t click me!')
// });

const bikes = document.querySelector("ul li.cycling");
bikes.addEventListener('click', clickbttn)


function clickbttn(){
    console.log("clicked")
    fetch("https://bikeindex.org/api/v3/bikes/660092")
    // .then((response) => console.log("res:",response.json()))
    .then((response) => response.json())
    .then((bikeInfo) => {
        // console.log (bikeInfo.bike.manufacturer_name)

     const field = document.querySelector("div.text-box");
    
     field.textContent = bikeInfo.bike.manufacturer_name
    })  
};




