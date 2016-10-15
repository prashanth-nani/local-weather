var lat, lon, tempc, weather;

$(function(){
  $.getJSON("http://ip-api.com/json", function(data){
    $('#loc').html("<b>City:</b> "+data.city+", "+data.country);

    lat = data.lat;
    lon = data.lon;
    getWeather({
      'lat':lat,
      'lon': lon,
      'units': 'metric'
    });
  });
});

function getWeather(param){
  var p = "?appid=063074ab2c77550a4c1acd464414ecde";

  keys = Object.keys(param);
  keys.forEach(function(key){
    p += "&"+key+"="+param[key];
  });

  var url = "http://api.openweathermap.org/data/2.5/weather"+p;

  console.log(url);
  $.getJSON(url, function(data){

    tempc = data.main.temp;
    weather = data.weather[0].main;
    iconlink = "http://openweathermap.org/img/w/"+data.weather[0].icon + ".png";

    $('#temp').html("<b>Temperature:</b> "+tempc+" &deg;C");
    $('#weather').html("<b>Weather:</b> "+weather);
    $('#icon').attr('src', iconlink);
  });
}
