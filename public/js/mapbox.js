const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);


mapboxgl.accessToken = 'pk.eyJ1IjoiZG9udHJlbGx0aGVkZXZlbG9wZXIiLCJhIjoiY2toNXUwaGp3MGp3bTJ0b3kyYnkweTk3dyJ9.g1wEhgwp8wBnFzPVw5o2ew';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dontrellthedeveloper/ckh5uffzy05f519quflw1s6pb',
  scrollZoom: false
  // center: [-118.113491,34.111745],
  // zoom: 10,
  // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Add Marker
  const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
      bottom: 150,
      left: 100,
      right:100,
  }

});
