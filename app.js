function initMap() {
    const myLatLng = { lat: 40.655507, lng: -74.240713 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });

    const image = "https://i.ibb.co/2tT7qXc/Bird-icon.pngg"
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
      icon: image,
    });
  }
  
  window.initMap = initMap;