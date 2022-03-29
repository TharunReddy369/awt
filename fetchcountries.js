function fetchCountry(){
    var request=new XMLHttpRequest()
    var country=document.getElementById("temp").value;
    var url="https://restcountries.com/v2/name/"+country+"?fullText=true"
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
        console.log(result);
        document.getElementById("currency").value=result[0].currencies[0].name;
        document.getElementById("neighbour").value=result[0].borders;

        
    }
request.send()
}