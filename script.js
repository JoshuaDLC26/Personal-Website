let hobbies = document.querySelector("#hobbiesButton");
let contact = document.querySelector("#contactButton");
let hobbiesDiv= document.querySelector("#hobbies")
let contactDiv = document.querySelector("#contact")
let HomeDiv= document.querySelector("#Homepage")
let HomeButton= document.querySelector("#Home")


hobbiesDiv.style.display = "none";
HomeDiv.style.display = "block";
contactDiv.style.display = "none";


HomeButton.onclick = function(event){

event.preventDefault();
hobbiesDiv.style.display = "none";
HomeDiv.style.display = "block";
contactDiv.style.display = "none";
}

contact.onclick = function(event) {
    event.preventDefault();
    console.log("HI I WORK");
    hobbiesDiv.style.display = "none";
    HomeDiv.style.display = "none";
    contactDiv.style.display = "block";
    contactDiv.style.fontSize= "45px"
}

hobbies.onclick = function(event){
    event.preventDefault();
    hobbiesDiv.style.display = "block"
    HomeDiv.style.display = "none"
    contactDiv.style.display ="none"


}

