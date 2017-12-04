ymaps.ready(init);

var placemarks = [
    {
        latitude: 45.33067030,
        longitude: 36.45486001,
        hintContent: '<div class="map__hint">ш. Героев Сталинграла, 23 Б1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt=""/>',
            'Тут находится наш офис!','<br>', 'Заходите по адресу: ш. Героев Сталинграла, 23 Б1','<br>',
            '<a href="http://ditect.ru/">','www.ditect.ru','</a>',
            '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [45.33039030, 36.45483855],
        zoom: 15,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon-map-marker.svg',
                iconImageSize: [27, 27]
            });
    }

    var clusterer = new ymaps.Clusterer({
    clusterIcons: [
        {
            href: 'img/burger.png',
            size: [100, 100],
            offset: [-50, -50]
        }
    ],
    clusterIconContentLayout: null
});

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}
