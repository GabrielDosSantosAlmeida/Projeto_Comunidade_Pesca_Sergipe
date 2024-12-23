var map = L.map("map").setView([-10.0574, -37.3142], 10);
var geoJson = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

document.addEventListener("DOMContentLoaded", init, false);

async function init() {

  mapaEstados = await fetch(`./pesca/Mapa/estados.geojson`);
  mapaEstadosGeoJson = await mapaEstados.json();

  estadosColorPath = L.geoJSON(mapaEstadosGeoJson, {
    style: style,
  }).addTo(map);

  mapa = await fetch(`./pesca/Mapa/map.geojson`);
  geoJson = await mapa.json();
  mapaColorPath = L.geoJSON(geoJson, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.8,
    });
    info.update(layer.feature.properties);
    layer.bringToFront();
  }

  function resetHighlight(e) {
    estadosColorPath.resetStyle(e.target);
    mapaColorPath.resetStyle(e.target);

    info.update();
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    setTimeout(() => {
      window.location.href =
        "./pesca/municipios/" +
        e.target.feature.properties.html +
        "/" +
        e.target.feature.properties.html +
        ".html";
    }, 500);
  }
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }
  var info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
    this.update();
    return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
    this._div.innerHTML =
      "<h4>Nome do Município</h4>" +
      (props
        ? `<b id="${props.name}" style="font-size: xx-large;">${props.name}</b><br />` +
          `<img src="${props.imageUrl}" alt="bandeira de ${props.name}" height="200" width="258"/><br />`
        : "Deslize para ver");
  };

  info.addTo(map);
}
function getColor(id) {
  return id == 0
    ? "#785142"
    : id == 1
    ? "#B39575"
    : id == 2
    ? "#515F47"
    : id == 3
    ? "#8F785F"
    : id == 4
    ? "#1C5011"
    : id == 5
    ? "#4E8443"
    : id == 6
    ? "#14452C"
    : id == 7
    ? "#51765B"
    : id == 8
    ? "#B0A591"
    : id == 9
    ? "#29391E"
    : id == 10
    ? "#3A591E"
    : id == 11
    ? "#5C6B59"
    : id == 12
    ? "#8D6E4C"
    : id == 20
    ? "#E5B502"
    : id == 21
    ? "#D63E4D"
    : id == 22
    ? "#D63E4D"
    : "#D63E4D";
}

function style(feature) {
  return {
    fillColor: getColor(feature.id),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

function style(feature) {
  return {
    fillColor: getColor(feature.id),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}
