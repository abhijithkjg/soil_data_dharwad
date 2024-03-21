var popup = L.popup().setContent(""); // Create an empty popup

map.on("mousemove", function(e) {
    var lat = e.latlng.lat.toFixed(4); // Format latitude to 4 decimals
    var lng = e.latlng.lng.toFixed(4); // Format longitude to 4 decimals
    popup.setContent("Lat: " + lat + ", Lng: " + lng); // Update popup content
    popup.setLatLng(e.latlng); // Set popup position
    popup.show(map); // Display the popup
});
