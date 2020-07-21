import locationSearch from 'test/scripts.js';
function initMap(){
      // Map Settings
      var options = {
        zoom:12,
        center:{lat:30.2672,lng:-97.7431},
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: true,
        rotateControl: true,
        styles:[
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#d8def3"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c8caea"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#afb1de"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#8092db"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#a9b1da"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#adb7e1"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      }
      // New Map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // icons
      var zeroMarker = {
        url:'https://i.imgur.com/B9SCCwI.png',
        scaledSize: new google.maps.Size(30,40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(15, 40
      )
      }
      var fifteenMarker = {
        url:'https://i.imgur.com/A8uLfBU.png',
        scaledSize: new google.maps.Size(30,40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(15, 40
      )
      }
      var thirtyMarker = {
        url:'https://i.imgur.com/NeyO5g7.png',
        scaledSize: new google.maps.Size(30,40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(15, 40
      )
      }
      var sixtyMarker = {
        url:'https://i.imgur.com/gAdgfIe.png',
        scaledSize: new google.maps.Size(30,40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(15, 40
      )
      }

      // Add Marker
      // var marker = new google.maps.Marker({
      //   position:{lat:29.4241,lng:-98.4936},
      //   map:map,
      //   icon:covid
      // });
      //
      // //infoWindows
      // var infoWindow =  new google.maps.InfoWindow({
      //   content:'<h1>Testing Center 1</h1>'
      // });
      //
      // marker.addListener('click',function(){
      //   infoWindow.open(map, marker);
      // });

      //Marker Array
			var markers = [
        {
          coords:{lat:30.341720,lng:-97.967400},
          iconImage:zeroMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">FastMed Urgent Care</h1>' +
            '<div id="bodyContent">' +
            "<p><b>FastMed Urgent Care</b> is located at <b>2303 Ranch Rd 620 S #210, Lakeway, TX 78734 </b></p>" +
            "<p>No appointment, No referral, Testing for all.</p>" +
            '<p>Website: <a href="https://www.fastmed.com/urgent-care-centers/lakeway-tx-walk-in-clinic/"target="_blank">' +
            "https://www.fastmed.com/urgent-care-centers/lakeway-tx-walk-in-clinic/</a> </p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.226410,lng:-97.891457},
          iconImage:thirtyMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Ascension Seton Southwest</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Ascension Seton Southwest</b> is located at <b>7900 Farm to Market Rd 1826, Austin, TX 78737 </b></p>" +
						"<p>No appointment, Referral required, Limited testing.</p>" +
            '<p>Website: <a href="https://healthcare.ascension.org/Locations/Texas/TXAUS/Austin-Ascension-Seton-Southwest"target="_blank">' +
            "https://healthcare.ascension.org/Locations/Texas/TXAUS/Austin-Ascension-Seton-Southwest</a> </p>" +
            "</div>" +
            "</div>"
        },
				{
          coords:{lat:30.228270,lng:-97.862980},
          iconImage:fifteenMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">NextCare Urgent Care</h1>' +
            '<div id="bodyContent">' +
            "<p><b>NextCare Urgent Care</b> is located at <b>6001 W William Cannon Dr #302, Austin, TX 78749 </b></p>" +
            "<p>No appointment, No referral, Testing for all.</p>" +
            '<p>Website: <a href="https://nextcare.com/locations/tx/austin-william-cannon/"target="_blank">' +
            "https://nextcare.com/locations/tx/austin-william-cannon/</a> </p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.322380,lng:-97.699890},
          iconImage:sixtyMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Baylor Scott & White Medical Center</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Baylor Scott & White Medical Center</b> is located at <b>5245 W US Hwy 290 Service Rd, Austin, TX 78735 </b></p>" +
            "<p>Appointment required, Referral required, Testing for all, Drive through.</p>" +
            '<p>Website: <a href="https://my.bswhealth.com"target="_blank">' +
            "https://my.bswhealth.com</a> (Requires an account)</p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.233497,lng:-97.824390},
          iconImage:thirtyMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">CareNow Urgent Care</h1>' +
            '<div id="bodyContent">' +
            "<p><b>CareNow Urgent Care</b> is located at <b>5033 US-290, Austin, TX 78746 </b></p>" +
            "<p>No appointment, No referral, Testing for all.</p>" +
            '<p>Website: <a href="https://CareNow.com"target="_blank">' +
            "https://CareNow.com</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.281677,lng:-97.775086},
          iconImage:fifteenMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">MinuteClinic (CVS)</h1>' +
            '<div id="bodyContent">' +
            "<p><b>MinuteClinic (CVS)</b> is located at <b>2610 Lake Austin Blvd, Austin, TX 78703 </b></p>" +
            "<p>Appointment required, No referral, Limited testing, Drive-through.</p> <p>Requirements: 18 years or older, Legally reside in-state.</p>" +
            '<p>Website: <a href="https://www.cvs.com/minuteclinic/clinic-locator/tx/austin/6964.html"target="_blank">' +
            "https://www.cvs.com/minuteclinic/clinic-locator/tx/austin/6964.html</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.500060,lng:-97.777228},
          iconImage:sixtyMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Urgent And Family Care Avery Ranch</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Urgent And Family Care Avery Ranch</b> is located at <b>10625 Parmer Lane Suite D 400 Austin Texas 78717 </b></p>" +
            "<p>Appointment required, Referral required, Testing for all.</p> <p>Check-in using telemed forms on website.</p>" +
            '<p>Website: <a href="https://austinurgentcare.com/"target="_blank">' +
            "https://austinurgentcare.com/</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.229612,lng:-97.808863},
          iconImage:zeroMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Remedy</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Remedy</b> is located at <b>3200 Jones Road Austin, Texas 78745 </b></p>" +
            "<p>Appointment required, Referral required, Testing for all, Drive through.</p> <p>Online screening: Video visit with provider to determine what to do and if to get tested.</p>" +
            '<p>Website: <a href="https://myremedy.com/"target="_blank">' +
            "https://myremedy.com/</a></p><p>Phone Number: <a href='tel:8447363395'>(844) 736-3395</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.301999,lng:-97.744712},
          iconImage:thirtyMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Fastmed Urgent Care</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Fastmed Urgent Care</b> is located at <b>3311 N Lamar Blvd, Austin, TX 78705 </b></p>" +
            "<p>No appointment, No referral, Testing for all, Recommendeded to check-in online and complete e-registration.</p>" +
            '<p>Website: <a href="https://www.fastmed.com/urgent-care-centers/austin-tx-walk-in-clinic-lamar-boulevard/"target="_blank">' +
            "https://www.fastmed.com/urgent-care-centers/austin-tx-walk-in-clinic-lamar-boulevard/</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.171178,lng:-97.823623},
          iconImage:fifteenMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Austin Regional Clinic: ARC Southwest</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Austin Regional Clinic: ARC Southwest</b> is located at <b>1807 W Slaughter Ln Suite 490, Austin, TX 78748 </b></p>" +
            "<p>Appointment required, Must see provider before testing, Costs $201, Insurance not required.</p> <p>Drive Through: Monday through Friday 5PM-7PM, Saturday and Sunday 8AM to 5PM.</p>" +
            '<p>Website: <a href="https://mychart.austinregionalclinic.com/mychart/openscheduling"target="_blank">' +
            "https://mychart.austinregionalclinic.com/mychart/openscheduling</a></p><p>Phone Number: <a href='tel:866453452'>(866) 453-452</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.187574,lng:-97.741932},
          iconImage:zeroMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Southeast Branch Library</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Southeast Branch Library</b> is located at <b>5803 Nuckols Crossing, Austin, TX, 78744 </b></p>" +
            "<p>No appointment, No referral, Free.</p> " +
            '<p>Website: <a href="https://www.austintexas.gov/covid19"target="_blank">' +
            "https://www.austintexas.gov/covid19</a></p><p>Phone Number: <a href='tel:5129742000'>(512) 974-2000</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.227328,lng:-97.769560},
          iconImage:fifteenMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Austin Regional Clinic: ARC South 1st</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Austin Regional Clinic: ARC South 1st</b> is located at <b>3828 S 1st St, Austin, TX 78704 </b></p>" +
            "<p>Appointment Necessary.</p> " +
            '<p>Website: <a href="https://mychart.austinregionalclinic.com/mychart/openscheduling"target="_blank">' +
            "https://mychart.austinregionalclinic.com/mychart/openscheduling</a></p><p>Phone Number: <a href='tel:866453452'>(866) 453-452</a></p>" +
            "</div>" +
            "</div>"
        },
        {
          coords:{lat:30.255866,lng:-97.762532},
          iconImage:fifteenMarker,
          content:
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Kalologie MedSpa Austin</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Kalologie MedSpa Austin</b> is located at <b>1100 S. Lamar Blvd Suite 2120, Austin, TX 78704 </b></p>" +
            "<p>No appointment, Must see provider before testing, Costs $119.</p><p>Walk-in, Tuesday and Wednesday 10AM - 5PM.</p> " +
            '<p>UPDATE Website: <a href="https://www.austintexas.gov/covid19"target="_blank">' +
            "https://www.austintexas.gov/covid19</a></p><p>Phone Number: <a href='tel:7377810391'>737-781-0391</a></p>" +
            "</div>" +
            "</div>"
        },
      ];
      var markerArray = []
      var infoWindowArray = []
      //Loop through markers
      for(let i = 0;i < markers.length;i++){
        addMarker(markers[i]);
      }

      // addMarker({
      //   coords:{lat:29.4241,lng:-98.4936},
      //   iconImage:covid,
      //   content:'<h1>San Antonio</h1>'
      // });
      // addMarker({
      //   coords:{lat:30.224630,lng:-97.785000},
      //   iconImage:covid,
      //   content:'<h1>My House</h1>'
      // });
      // Add Marker function
      // var infoWindowArray = []
      var locationInfowindow = new google.maps.InfoWindow();
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          icon:props.iconImage
        });

          var content = props.content;

    google.maps.event.addListener(marker,'click', (function(marker,content){
      return function() {
          locationInfowindow.setContent(content);
	  locationInfowindow.setOptions({maxWidth:250});
          locationInfowindow.open(map,marker);
      };
     })(marker,content));
        }
	function openInfoWindow(props){
    		locationInfowindow.setContent(props.content);
   		locationInfowindow.setOptions({maxWidth:250, pixelOffset:new google.maps.Size(0, -40)});
    		locationInfowindow.open(map);
    		locationInfowindow.setPosition(props.coords);
  };
	if(locationSearch != ''){
	openInfoWindow(markers[parseInt(locationSearch)]);
}
}
