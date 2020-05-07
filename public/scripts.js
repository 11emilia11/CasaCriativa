//import { Database } from "sqlite3"

function onOff(){
    document
    .querySelector("#modal")
        .classList
        .toggle("hide")

    document.querySelector("body")
            .classList
            .toggle("hideScroll")

    document.querySelector("#modal")
            .classList
            .toggle("addScroll")
}



//let ID = " "
function checkId(event,id) {   

    console.log("id passado:")
    console.log(id)
    event.target['idtosend'].value = parseInt(id) 
    console.log("event value")
    console.log(event.target['idtosend'].value)
    
}
function checkFields(event) {

    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]
    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    }) 
    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")

    }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
