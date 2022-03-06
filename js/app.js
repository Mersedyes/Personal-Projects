const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // colors array with four colors that will be used

//
const btn = document.getElementById('btn');

//color span
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
    console.log(document.body);
    //get random number between 0 to 3 bc arrays are zero index
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length); // calls back a random number that is unique and it will never be 0
    //Math.floor will round down to the nearest whole number
}
