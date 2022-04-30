"use strict"

var form = document.querySelector("form")
var prideti = document.querySelectorAll("input[type=submit")[0]
var panaikintiPirma = document.querySelectorAll("input[type=submit")[1]
var panaikintiPaskutini = document.querySelectorAll("input[type=submit")[2]
var vardas = document.querySelectorAll("input[type=text")[0]
var pavarde = document.querySelectorAll("input[type=text")[1]
var amzius = document.querySelector("input[type=number")
var rows = document.getElementsByTagName("tr")
var table = document.querySelector("table")

prideti.addEventListener("click", pridejimas)

function pridejimas(e) {
    e.preventDefault()
    if(vardas.value == 0 || pavarde.value == 0 || amzius.value == "" || amzius.value <= 0){
        alert("Įveskite duomenis")
    } else {
        var row = table.insertRow(rows.lenght)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        cell1.innerHTML = vardas.value
        cell2.innerHTML = pavarde.value
        cell3.innerHTML = amzius.value
        vardas.value = ""
        pavarde.value = ""
        amzius.value = ""
    }
}

panaikintiPirma.addEventListener("click", atemimasPirmo)

function atemimasPirmo(e) {
    e.preventDefault()
    if(rows.length > 1){
        var row = table.deleteRow(1)
    } else {
        alert("Nebėra ką trinti")
    }
}

panaikintiPaskutini.addEventListener("click", atemimasPaskutinio)

function atemimasPaskutinio(e) {
    e.preventDefault()
    if(rows.length > 1){
        var row = table.deleteRow(rows.length - 1) 
    } else {
        alert("Nebėra ką trinti")
    }
}