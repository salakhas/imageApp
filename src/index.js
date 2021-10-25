import Navbar from "./navbar.js";
import commomFetchFunction from "./fetch.js";

const navbar = Navbar();
const navbarContainer = document.getElementById("navbarContainer");
navbarContainer.innerHTML = navbar;

window.addEventListener("load",function() {
    var inputBox = document.getElementById('searchBox');
    
    inputBox.addEventListener('input',handleDebounce)//adding an event to call function handleDebounce on input.
})



function handleDebounce(){
    const nameOfImage  = document.getElementById("searchBox").value;
    console.log("nameOfImage=>",nameOfImage)
    debounceFunction(getFetch(nameOfImage),3000)
}

const debounceFunction = (func, delay) => {
   // console.log(this)
    let debounceTimer;
    return function() {
        const context = this //this points to "window"
        const args = arguments//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
        console.log(typeof arguments)
            clearTimeout(debounceTimer)//clearing the setTimeout delay if it is clicked again.
            debounceTimer = setTimeout(function(){
                func(value)
            }, delay);//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    }
} 


function getFetch(value){
    
    commomFetchFunction(value)
    .then((res) => res.json())
    .then((res) => {
        console.log("res.results=>",res.results)
        displayImage(res.results);
    })
    .catch((res) =>{
       invalidImage();
    })
}

function displayImage(data){
    
    console.log("Welcome to displayImage Function");
    const container = document.getElementById("searchResultsContainer");
    container.innerHTML = "";


    var innerDiv = document.createElement("div");
      
        for(var i=0; i<data.length; i++){
        
            let images = document.createElement("img")
            console.log(`data${i}.urls=>`,data[i].urls)
            console.log("data.url.regular?=>",data[i].urls.small)
            images.src = data[i].urls.small;
            images.setAttribute("class", "myImage")
            innerDiv.append(images)
        }
      
        innerDiv.setAttribute("class", "column text-center  ml-5")
        
        
        container.append(innerDiv)
    
}