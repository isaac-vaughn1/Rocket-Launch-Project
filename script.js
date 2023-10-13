// Name: Isaac Vaughn
// Class: Web Dev II
// Date: 10/16/23


// arrays holding the data display elements
const images = document.getElementsByClassName('dataImg');
const titles = document.getElementsByClassName('dataName');
const describe = document.getElementsByClassName('dataDesc');
const facts = document.getElementsByClassName('dataFact');

const req = new XMLHttpRequest();  // object to handle API requests

window.addEventListener('load', function(){  // load event to initialize the page with some data from the API
    getLaunchData();
});

function getLaunchData() {  // function that calls the API and gathers launch data

    req.open("GET", "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=true&limit=4");  // tells the XMLHttpRequest object which API part to pull from as well as providing some params and type of request
    req.send();  // sends the request for data

    req.onreadystatechange = function(){  // anonymous function used to check whether the request is completed an every ready state change
        if (req.readyState == 4 && req.status == 200) {  // if the request is completed and the status is of the response is 200, then...

            let res = req.responseText;  // stored the response JSON string provided by the API
    
            let obj = JSON.parse(res);  // parses the JSON into a JavaScript object
            displayLaunches(obj);  // calls function to display launch data because we pulled from the launch part of the API
        }
    }; 
}

function getAstronautData() {  // function that calls the API and gathers astronaut data
    // initializes and sends a GET request to the astronaut part of the API
    req.open("GET", "https://ll.thespacedevs.com/2.2.0/astronaut/?is_human=true&limit=4");
    req.send();

    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200) {
            let res = req.responseText;
    
            let obj = JSON.parse(res);
            displayAstronauts(obj);  // calls function to display astronaut data
        }
    };
}

function displayLaunches(obj) {  // function used to display select launch data pulled from the API

    for (let i = 0; i < obj.results.length; i++) { // loops through each element in the array for HTML elements and fills them with data selected from obj.results (the API results)
        images[i].src = obj.results[i].image;
        titles[i].textContent = obj.results[i].name;
        describe[i].textContent = obj.results[i].mission.description;
        facts[i].textContent = `Launch Pad: ${obj.results[i].pad.name}`;
    }
}

function displayAstronauts(obj) {  // function used to display select astronaut data pulled from the API

    for (let i = 0; i < obj.results.length; i++) {  // loops through each element in the array for HTML elements and fills them with data selected from obj.results (the API results)
        images[i].src = obj.results[i].profile_image;
        titles[i].textContent = obj.results[i].name;
        describe[i].textContent = obj.results[i].bio;
        facts[i].textContent = `Spacewalks: ${obj.results[i].spacewalks_count}`;
    }
}