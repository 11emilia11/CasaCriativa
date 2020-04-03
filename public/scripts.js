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


function darkOn(){
    document.querySelector("body").classList.toggle("dark")
    document.querySelector("#lgt").classList.toggle("#hide")
    
    
   
    
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
