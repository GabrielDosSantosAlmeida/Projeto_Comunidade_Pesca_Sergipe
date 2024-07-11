var map = L.map("map").setView([-10.0574, -37.3142], 10);
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
        fillOpacity: 0.8
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
    setTimeout(() => {window.location.href = "/projetoPesca/municipios/" + e.target.feature.properties.html + ".html";}, 500);
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
  this._div.innerHTML = 
      '<h4>Nome do Município</h4>' +  
      (props ?  
          `<b id="${props.name}"> ${props.name} </b><br />` +`</b><br />`+
          `<img src="${props.imageUrl}"  alt="${props.name}" height="48" width="64"s /><br />`
          : 'Deslize para ver');
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
      fillOpacity: 0.7
  };
}