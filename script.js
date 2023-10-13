const images = document.getElementsByClassName('dataImg');
const titles = document.getElementsByClassName('dataName');
const describe = document.getElementsByClassName('dataDesc');
const facts = document.getElementsByClassName('dataFact');

const req = new XMLHttpRequest();

window.addEventListener('load', function(){
    getLaunchData();
});

function getLaunchData() {
    req.open("GET", "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=true&limit=4");
    req.send();

    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200) {
            let res = req.responseText;
    
            let obj = JSON.parse(res);
            displayLaunches(obj);
        }
    }; 
}

function getAstronautData() {
    req.open("GET", "https://ll.thespacedevs.com/2.2.0/astronaut/?is_human=true&limit=4");
    req.send();

    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200) {
            let res = req.responseText;
    
            let obj = JSON.parse(res);
            displayAstronauts(obj);
        }
    };
}

function displayAstronauts(obj) {
    for (let i = 0; i < obj.results.length; i++) {
        images[i].src = obj.results[i].profile_image;
        titles[i].textContent = obj.results[i].name;
        describe[i].textContent = obj.results[i].bio;
        facts[i].textContent = `Spacewalks: ${obj.results[i].spacewalks_count}`;
    }
}

function displayLaunches(obj){
    for (let i = 0; i < obj.results.length; i++) {
        images[i].src = obj.results[i].image;
        titles[i].textContent = obj.results[i].name;
        describe[i].textContent = obj.results[i].mission.description;
        facts[i].textContent = `Launch Pad: ${obj.results[i].pad.name}`;
    }
}