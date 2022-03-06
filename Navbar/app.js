// classList - shows/gets all classes
// contains - checks classList for specific class (method)
// add - add class (add method)
// remove - remove class (remove method)
// toggle - toggles class (will do this the long way for understanding and then use one liner)

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
   //console.log(links.classList); //shows in console
    //console.log(links.classList.contains("random"));// passing class we are checking for --> got response of false
    //console.log(links.classList.contains("links")); // shows true in console log
    // if (links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
});