const req = new XMLHttpRequest();

req.open("GET", "https://ll.thespacedevs.com/2.2.0/launch/upcoming/");
req.send();

req.onreadystatechange = getJSON;

function getJSON(){
    if (req.readyState == 4 && req.status == 200){
        var res = req.responseText;

        var launches = JSON.parse(res);
        console.log(launches);
    }
}