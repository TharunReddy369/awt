function fetchWeather(){
    var request=new XMLHttpRequest();
    var city=document.getElementById("temp").value 
    var url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=7b2981b6322e3fe79cb9e625ca6868b7'
    request.open('GET',url,true)
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result);
        document.getElementById("result").value=result.main.temp;
    }
    request.send();
}