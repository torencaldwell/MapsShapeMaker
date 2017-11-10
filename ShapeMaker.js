function initMap() {
    var jbht = {lat: 36.0660869774214, lng: -94.1736827243542};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: jbht
    });

    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        },
        markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
        circleOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
        }
    });
    drawingManager.setMap(map);

    var overlayBounds = {
        north:36.066526,
        south: 36.065627,
        east: -94.173401,
        west: -94.174097,
    };
    var jbhtOverlay = new google.maps.GroundOverlay('jbht_f1.png', overlayBounds);
    jbhtOverlay.setMap(map);

    var marker = new google.maps.Marker({
        position: jbht,
        map: map
    });

}