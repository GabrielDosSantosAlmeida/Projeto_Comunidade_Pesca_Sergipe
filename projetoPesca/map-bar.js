var map = L.map('map').setView([-10.393, -37.365], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markers = [
    {
       "city": "CanideDeSaoFrancisco",
         "lat": -9.641944,
            "long": -37.787778
    },
    {
       "city": "PocoRedondo",
         "lat": -9.805833,
            "long": -37.685
    },
    {
       "city": "PortoDaFolha",
         "lat": -9.916944,
            "long": -37.277778
    },
    {
       "city": "Gararu",
         "lat": -9.967778,
            "long": -37.082778
    },
    {
       "city": "NossaSenhoraDeLourdes",
         "lat": -10.078889,
            "long": -37.057778
    },
    {
       "city": "Canhoba",
         "lat": -10.138056,
            "long": -36.972778
    },
    {
       "city": "Telha",
         "lat": -10.207778,
            "long": -36.883889
    },
    {
       "city": "Propria",
         "lat": -10.210833,
            "long": -36.84
    },
    {
       "city": "SantanaDoSaoFrancisco",
         "lat": -10.290833,
            "long": -36.607778
    },
    {
       "city": "Neopolis",
         "lat": -10.317115,
            "long": -36.577005
    },
    {
       "city": "ilhaDasFlores",
         "lat": -10.435833,
            "long": -36.54
    },
    {
       "city": "BrejoGrande",
         "lat": -10.424444,
            "long": -36.462222
    }
] 

function addAllMarkers() {
    markers.forEach(marker => {
        addMarker(marker.city, marker.lat, marker.long);
    });
}

// Method to add a marker to the map:
function addMarker(name, lat, long) {
    L.marker([lat, long]).addTo(map).on('click', function() {
        window.location.href ="/projetoPesca/municipios/" + name + ".html" ;
    });
}

addAllMarkers();