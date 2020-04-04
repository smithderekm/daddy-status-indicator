var available = 1;
var occupied = 0;

var apiUrl = "https://api.particle.io/v1/devices/events";
var token = "[[insert Particle access Token here]]";

function UpdateAvailability(state) {
    var data = {
        name: "daddy/status",
        data: state ? "available" : "occupied",
        private: "false",
        ttl: "60"
    };

    fetch(apiUrl, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            WriteSuccess(state);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function WriteSuccess(state) {
    var feed = document.querySelector("#messages");

    let newEl = document.createElement('li');
    newEl.classList.add('list-group-item', 'text-white');
    newEl.classList.add(state ? 'bg-success' : 'bg-danger');
    newEl.innerText = 'Status set to ' + (state ? 'available' : 'occupied') + ' at ' + new Date().toLocaleString();
    feed.prepend(newEl);
}