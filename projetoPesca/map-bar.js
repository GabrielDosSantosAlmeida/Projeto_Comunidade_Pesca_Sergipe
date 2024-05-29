var map = L.map('map').setView([-10.393, -37.365],9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-9.641944, -37.787778]).addTo(map);  //Canidé
var marker = L.marker([-9.805833, -37.685]).addTo(map);  //Poço redondo
var marker = L.marker([-9.916944, -37.277778]).addTo(map);  //Porto da folha
var marker = L.marker([-9.967778, -37.082778]).addTo(map);  //Gararu
var marker = L.marker([-10.078889, -37.057778]).addTo(map);  //Nossa senhora de lourdes
var marker = L.marker([-10.138056, -36.972778]).addTo(map);  //Canhoba
var marker = L.marker([-10.207778, -36.883889]).addTo(map);  //Telha
var marker = L.marker([-10.210833, -36.84]).addTo(map);  //Propriá
var marker = L.marker([-10.290833, -36.607778]).addTo(map);  //Santana de São Francisco
var marker = L.marker([-10.317115, -36.577005]).addTo(map);  //Neopolis
var marker = L.marker([-10.435833, -36.54]).addTo(map);  //Ilha das flores
var marker = L.marker([-10.424444, -36.462222]).addTo(map);  //brejo grande