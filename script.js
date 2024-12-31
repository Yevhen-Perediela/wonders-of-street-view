var locations = [ 
  [51.5067585,-0.0107938, 1],   
  [52.0693386,4.3138546, 2],
  // [39.4715556,-106.0364808, 3], 
  [35.8381653,-115.2710775, 4],    
  [44.3793452,-73.2280265, 5],   
  [37.6832003,129.0429085, 6],
  [45.5225, -122.6786, 7],
  [43.968142, -90.7815533, 8],   
  [43.968142, -90.7815533, 9],  
  // [10.5742511,-71.5873818, 10],   
  [40.4246578,-3.6911148,11], 
  [35.9634505,-80.0084572,12], 
  [37.8022765, -122.418022, 13],  
  [42.2682109,2.9588391, 14],   
  [37.6832003,129.0429085, 15], 
 
]



console.log(locations[1][0]);



function showMap(x, y) {
  const location = { lat: x, lng: y }; 
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: location,
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
    }
  );
}
// showMap(locations[0][0], locations[0][1])
function randomLoc(){
    
  var random = Math.floor(Math.random() * 15)
  console.log(random);
  
  console.log(locations[random][0], locations[random][1])
  showMap(locations[random][0], locations[random][1])

}
randomLoc()