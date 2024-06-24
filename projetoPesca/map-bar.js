var map = L.map("map").setView([-10.1274, -37.3042], 10);
var geoJson = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

document.addEventListener("DOMContentLoaded", init, false);

async function init() {
  mapa = await fetch("./map.geojson");
  geoJson = await mapa.json()
  mapaColorPath = L.geoJSON(geoJson,{style: style, onEachFeature: onEachFeature }).addTo(map);
  function highlightFeature(e) {
    var layer = e.target;
  
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
    });
    info.update(layer.feature.properties);
    layer.bringToFront();
  }
  
  function resetHighlight(e) {
    mapaColorPath.resetStyle(e.target);
    
    info.update();
  }
  
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());

  }
  function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
  }
  var info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Nome do Município</h4>' +  (props ?
        '<b>' + props.name + '</b><br />': 'Deslize para ver');
        console.log(props);
};

info.addTo(map);
}
function getColor(id) {
  return id == 0 ? '#785142' :
         id == 1  ? '#B39575' :
         id == 2  ? '#515F47' :
         id == 3 ? '#8F785F' :
         id == 4   ? '#1C5011' :
         id == 5   ? '#4E8443' :
         id == 6   ? '#14452C' :
         id == 7   ? '#51765B' :
         id == 8   ? '#B0A591' :
         id == 9   ? '#29391E' :
         id == 10   ? '#3A591E' :
         id == 11   ? '#8D6E4C' :
                    '#5C6B59';
}

function style(feature) {
  return {
      fillColor: getColor(feature.id),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.5
  };
}

const markers = [
  {
    city: "CanideDeSaoFrancisco",
    lat: -9.703975588848479,
    long: -37.920994794358734,
  },
  {
    city: "PocoRedondo",
    lat: -9.8214,
    long: -37.7078,
  },
  {
    city: "PortoDaFolha",
    lat: -9.9069,
    long: -37.4204,
  },
  {
    city: "Gararu",
    lat: -10.0065,
    long: -37.2106,
  },
  {
    city: "NossaSenhoraDeLourdes",
    lat: -10.0760,
    long: -37.0081,
  },
  {
    city: "Canhoba",
    lat: -10.1400,
    long: -36.9826,
  },
  {
    city: "AmparoDoSaoFrancisco",
    lat:-10.1614,
    long:-36.9175,
  },
  {
    city: "Telha",
    lat: -10.1916,
    long: -36.8831,
  },
  {
    city: "Propria",
    lat: -10.2415,
    long: -36.8125,
  },
  {
    city: "SantanaDoSaoFrancisco",
    lat: 	-10.2860,
    long: -36.6318,
  },
  {
    city: "Neopolis",
    lat: -10.3571,
    long: -36.6518,
  },
  {
    city: "ilhaDasFlores",
    lat: -10.4568,
    long: -36.5575,
  },
  {
    city: "BrejoGrande",
    lat: -10.4743,
    long: -36.4649,
  },
];

function addAllMarkers() {
  markers.forEach((marker) => {
    addMarker(marker.city, marker.lat, marker.long);
  });
}

//metodo que adiciona ícone de vara de pesca
var varaIcon = L.Icon({
  iconUrl: "my-icon.png",
  shadowUrl: "my-icon-shadow.png",

  iconSize:     [30, 30], // size of the icon
  shadowSize:   [20, 20], // size of the shadow
  iconAnchor:   [22, 20], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 20],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// metodo que adiciona os markers ao mapa( com a funcionalidade da URL)
function addMarker(name, lat, long) {
  L.marker([lat, long])
    .addTo(map)
    .on("click", function () {
      window.location.href = "/projetoPesca/municipios/" + name + ".html";
    });
}
addAllMarkers();
init();
