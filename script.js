const startButton = document.querySelector("#startbutton")
const gameContainer = document.querySelector("#game-container")
const gameover = document.querySelector("#gameover")
const restart = document.querySelector("#restart")

const trainButton = document.querySelector("#train-button")
const eatButton = document.querySelector("#eat-button")
const restButton = document.querySelector("#rest-button")

const boy = document.querySelector("#boy1")

const fitnessbar = document.querySelector("#fitness")
const hungerBar = document.querySelector("#hunger")
const energyBar = document.querySelector("#energy")

let fitnessvalue = 100
let hungervalue = 100
let energyvalue = 100

//https://chatgpt.com/share/c06a2e98-ce2f-4314-8cf6-1c9d68c3da40 : eigen onderzoek, gevraagd hoe het moet en op eigen manier uitgevoerd
const sound1 = new Audio("mp3/happy1.MP3") //https://youtu.be/cUM8OCBy6Ls?si=fG6-3QV7WVsO5B7q
const sound2 = new Audio("mp3/shocked1.MP3") //https://youtu.be/ltjT25GyXTM?si=OFGRBqttKF1ooAjy
const sound3 = new Audio("mp3/sad1.MP3") //https://youtu.be/Ncgv7ruZ6HU?si=s1TjQYzE-I-MqZ2N
const sound4 = new Audio("mp3/angry1.MP3") //https://youtu.be/UVEGnWdiPrI?si=jwQ1QkSzIcruIJgg
const sound5 = new Audio("mp3/dead1.MP3") //https://youtu.be/eXdJYdCqdgE?si=qDef2wRCxSHlmB7c
//---

//https://chatgpt.com/share/f73472a4-cafc-4eff-873f-efc23dc2e005 kennis uit les gebruikt samen met chatgpt en eerder geschreven code
function startGame() {
    gameContainer.classList.remove("hidden")
    startButton.style.display = "none"

    trainButton.classList.remove("hidden")
    eatButton.classList.remove("hidden")
    restButton.classList.remove("hidden")
    boy.classList.remove("hidden")

    const fitnessInterval = setInterval(decreaseFitness, 500)
    const hungerInterval = setInterval(decreaseHunger, 500)
    const energyInterval = setInterval(decreaseEnergy, 500)

    trainButton.addEventListener("click", increaseTrain)
    eatButton.addEventListener("click", increaseHunger)
    restButton.addEventListener("click", increaseEnergy)
}

startButton.addEventListener("click", startGame)
//---


function decreaseFitness() {
    fitnessvalue = fitnessvalue - 0.5 
    if (fitnessvalue < 0) {
        fitnessvalue = 0
    }
    fitnessbar.value = fitnessvalue 

    updateImage()
}


function increaseTrain() {
    fitnessvalue = fitnessvalue + 10
    energyvalue = energyvalue - 7.5
    hungervalue = hungervalue - 2.5
    if (fitnessvalue > 100) {
        fitnessvalue = 100
    }
    if (energyvalue < 0) {
        energyvalue = 0
    }
    if (hungervalue < 0) {
        hungervalue = 0
    }
    fitnessbar.value = fitnessvalue
    energyBar.value = energyvalue
    hungerBar.value = hungervalue

    updateImage()
}


function decreaseHunger() {
    hungervalue = hungervalue - 0.5
    if (hungervalue < 0) {
        hungervalue = 0
    }
    hungerBar.value = hungervalue

    updateImage()
}



function increaseHunger() {
    hungervalue = hungervalue + 5
    fitnessvalue = fitnessvalue - 7.5
    energyvalue = energyvalue + 5
    if (hungervalue > 100) {
        hungervalue = 100
    }
    if (fitnessvalue < 0) {
        fitnessvalue = 0
    }
    if (energyvalue > 100) {
        energyvalue = 100
    }
    hungerBar.value = hungervalue
    fitnessbar.value = fitnessvalue
    energyBar.value = energyvalue
    updateImage()
}


function decreaseEnergy() {
    energyvalue = energyvalue - 0.5
    if (energyvalue < 0) {
        energyvalue = 0
    }
    energyBar.value = energyvalue

    updateImage()
}


function increaseEnergy() {
    energyvalue = energyvalue + 10
    fitnessvalue = fitnessvalue - 5
    hungervalue = hungervalue - 2.5
    if (energyvalue > 100) {
        energyvalue = 100
    }
    if (fitnessvalue < 0) {
        fitnessvalue = 0
    }
    if (hungervalue < 0) {
        hungervalue = 0
    }
    energyBar.value = energyvalue
    fitnessbar.value = fitnessvalue
    hungerBar.value = hungervalue

    updateImage()
}


//geholpen door chatgpt https://chatgpt.com/share/176758de-5365-4677-8a30-048c0ade6d76 en https://chatgpt.com/share/c693c199-7246-4284-84fe-4e42560c0e13
function updateImage() {
    if (fitnessvalue < 0.1 || hungervalue < 0.1 || energyvalue < 0.1) {
        boy.src = "images/dead-boy.png"
        fitnessvalue = 0
        hungervalue = 0
        energyvalue = 0
        sound5.play()
        gameover.classList.remove("hidden")
        restart.classList.remove("hidden")
        trainButton.classList.add("hidden")
        eatButton.classList.add("hidden")
        restButton.classList.add("hidden")
    } else if (fitnessvalue <= 25 && fitnessvalue >= 0.1 || 
        hungervalue <= 25 && hungervalue >= 0.1 || 
        energyvalue <= 25 && energyvalue >= 0.1) {
        boy.src = "images/angry-boy.png"
        sound4.play()
    } else if (fitnessvalue <= 49.5 && fitnessvalue >= 25.5 || 
        hungervalue <= 49.5 && hungervalue >= 25.5 || 
        energyvalue <= 49.5 && energyvalue >= 25.5) {
        boy.src = "images/sad-boy.png"
        sound3.play()
    } else if (fitnessvalue <= 75 && fitnessvalue >= 50 || 
        hungervalue <= 75 && hungervalue >= 50 || 
        energyvalue <= 75 && energyvalue >= 50) {
        boy.src = "images/shocked-boy.png"
        sound2.play()
    } else {
        boy.src = "images/happy-boy.png" 
        sound1.play()
    }
}
//---

//https://chatgpt.com/share/e6e92322-0e4a-410a-8f45-1908fbe6c260
function reload(){
    location.reload()
}

restart.addEventListener("click", reload)
//---