<?php
  $env = file_get_contents('.env');
  preg_match('/API_KEY=(.+)/', $env, $matches);
  $apiKey = trim($matches[1]);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Street View</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
        <img src="logo.svg" style="height: 5vh; margin: 1.5vh;">
        <img src="title.svg" style="height: 3.5vh; margin: 1.5vh auto;">
        <button><img src="refresh.svg" onclick="randomLoc()">Random</button>
    </header>
    <div id='likes'></div>
    <div id="street-view" style="height: 92vh; width: 100%;"></div>
    
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $apiKey ?>&callback=initMap&loading=async" defer></script>

    <script src="script.js"></script>
  </body>
</html>