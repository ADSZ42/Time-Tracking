document.getElementById('dayBtn').addEventListener('click', dayBtn);
document.getElementById('weekBtn').addEventListener('click', weekBtn);
document.getElementById('monthBtn').addEventListener('click', monthBtn);

let WorkC = document.getElementById("WorkC");
let WorkP = document.getElementById("WorkP");

let PlayC = document.getElementById("PlayC");
let PlayP = document.getElementById("PlayP");

let StudyC = document.getElementById("StudyC");
let StudyP = document.getElementById("StudyP");

let ExerC = document.getElementById("ExerC");
let ExerP = document.getElementById("ExerP");

let SociC = document.getElementById("SociC");
let SociP = document.getElementById("SociP");

let SelfC = document.getElementById("SelfC");
let SelfP = document.getElementById("SelfP");

let data;

function apiCall() {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
        })
}

function updateUI(timeFrame) {
    data.forEach(item => {
        let currentData = item.timeframes[timeFrame].current;
        let previousData = item.timeframes[timeFrame].previous;

        if (item.title === "Work") {
            WorkC.innerText = currentData + " hrs";
            WorkP.innerText = "Last Week - " + previousData + " hrs";
        }
        if (item.title === "Play") {
            PlayC.innerText = currentData + " hrs";
            PlayP.innerText = "Last Week - " + previousData + " hrs";
        }
        if (item.title === "Study") {
            StudyC.innerText = currentData + " hrs";
            StudyP.innerText = "Last Week - " + previousData + " hrs";
        }
        if (item.title === "Exercise") {
            ExerC.innerText = currentData + " hrs";
            ExerP.innerText = "Last Week - " + previousData + " hrs";
        }
        if (item.title === "Social") {
            SociC.innerText = currentData + " hrs";
            SociP.innerText = "Last Week - " + previousData + " hrs";
        }
        if (item.title === "Self Care") {
            SelfC.innerText = currentData + " hrs";
            SelfP.innerText = "Last Week - " + previousData + " hrs";
        }
    });
}

function dayBtn() {
    updateUI('daily');
}

function weekBtn() {
    updateUI('weekly');
}

function monthBtn() {
    updateUI('monthly');
}

apiCall();
