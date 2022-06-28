/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="weather.js"></script>
</head>
<body>
    <input type="text" id="test">
    <button onclick="weather()">submit</button>
    <div id="val"></div>
</body>
</html>*/


async function weather(){
    let x=document.getElementById("test").value;
    let url='https://api.openweathermap.org/data/2.5/weather?q='+x+'&appid=7b2981b6322e3fe79cb9e625ca6868b7';
    let resp=await fetch(url)
    let data=await resp.json()
    document.getElementById("val").innerHTML+=`Temp${data.main.temp}<br>`

}