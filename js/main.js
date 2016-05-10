$("#commentForm").validate({
      rules:{
            name:{
                  required: true,
                  minlength: 3,
                  maxlength: 16
            },
            email:{
                  required: true,
                  email:true
            },
            tel:{
                  number:true
            },
            comment:{
                  maxlength: 100
            }
      }
});

var map;
map = new GMaps({
      el: '#map',
      lat: 55.779000,
      lng: 37.617877,
      zoom: 14,
      zoomControl : true,
      zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
      },
      panControl : true,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
});
map.addMarker({
      lat: 55.777951,
      lng: 37.617877,
      title: 'ул.Самотечная1/15',
});
map.drawOverlay({
      lat: 55.777951,
      lng: 37.617877,
      verticalAlign: 'top',
      horizontalAlign: 'center',
      verticalOffset: -20,
      horizontalOffset: -15,
      content: '<div class="overlay"><img src="images/адрес.png" alt="adress" class=""></div>'
});