const req = new XMLHttpRequest();

function getLaunchData() {
    req.open("GET", "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=true&limit=4");
    req.send();

    req.onreadystatechange = getJSON;
}

function getAstronautData() {
    req.open("GET", "https://ll.thespacedevs.com/2.2.0/astronaut/?is_human=false&limit=4");
    req.send();

    req.onreadystatechange = getJSON;
}

function getJSON() {
    if (req.readyState == 4 && req.status == 200) {
        var res = req.responseText;

        var obj = JSON.parse(res);
        console.log(obj);
    }
}
