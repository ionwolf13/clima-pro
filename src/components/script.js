let weatherObj = {
    url: `https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={APIkey}`,
    weatherAPI: '985c23bf757403c5103151e3f2b02265',
    fetchWeather: function (){
        fetch(this.url.replace('{APIkey}',this.weatherAPI))
        .then(res => res.json())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => console.log(data))
    },
    displayWeather: function (data){

    }
    
}
debugger
export default weatherObj;