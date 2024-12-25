var locations = [ 
  [51.5067585,-0.0107938],   
  [52.0693386,4.3138546],
  [39.4715556,-106.0364808], 
  [35.8381653,-115.2710775],    
  [44.3793452,-73.2280265],   
  [37.6832003,129.0429085],
  [45.5225, -122.6786],
  [43.968142, -90.7815533],   
  [43.968142, -90.7815533],  
  [10.5742511,-71.5873818],   
  [40.4246578,-3.6911148], 
  [35.9634505,-80.0084572], 
  [37.8022765, -122.418022],  
  [42.2682109,2.9588391],   
  [37.6832003,129.0429085], 
 
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
showMap(locations[0][0], locations[0][1])
function randomLoc(){
    
  var random = Math.floor(Math.random() * 15)
  console.log(locations[random][0], locations[random][1])
  showMap(locations[random][0], locations[random][1])

}
randomLoc()