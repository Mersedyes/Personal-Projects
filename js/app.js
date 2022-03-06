const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // colors array with four colors that will be used

//btn target
const btn = document.getElementById('btn');

//color span
const color = document.querySelector(".color");

//event listener for click events, everytime the btn is clicked this will change the color bc of the color function
btn.addEventListener('click', function (){
    //body is the target of the document object
    console.log(document.body); // check it out in the console
    //get random number between 0 to 3 bc arrays are zero index
    //goal is to get a number that is between 0 and 3, but then changed it to the range of 0-4 but it will never go past 4
    const randomNumber = getRandomNumber(); // invoking get random function
    console.log(randomNumber); // this is to check the value you are getting in the console log

    //used document object, then body, then style and then background color
    //this was set up to equal the array in line 1
    document.body.style.backgroundColor = colors[randomNumber];
    //display the background color for the body
    color.textContent = colors[randomNumber];
});

//this function generates a number between 0 and 4 to be able to access the random number method to use the array
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length); // calls back a random number that is unique and it will never be 0
    //Math.random generates random numbers between 0 and 1
    //can multiply Math.random by colors.length since the length is 4, we will get numbers between 0 and numbers less than 4
    //Math.floor will round down to the nearest whole number
}
