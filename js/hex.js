//this will help generate a random hex number to make it a little spicy

//#f15025
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//need to set up a loop that will change the color, background and add value
btn.addEventListener('click', function (){
    let hexColor = '#' // variable that holds the hashtag if used const would have gotten error
    for (let i = 0; i <6; i++){ //the argument will run form 0 to 5 and will increment
        hexColor += hex[getRandomNumber()]; // += is needed otherwise it would just be a background color of the hastag and 0
        //calling out the getRandomNumber then generates random hex color
    }

    //set a loop that runs six times to get a random from the array
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//need to set up function to generate random?
function  getRandomNumber(){
    return Math.floor(Math.random() * hex.length) //length is different
}