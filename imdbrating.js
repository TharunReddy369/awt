function fetchImdb(){
    var request=new XMLHttpRequest();
    var city=document.getElementById("temp").value;
    var url='https://imdb-api.com/en/API/Top250Movies/k_lrjn4u8s';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result)
       rank= document.getElementById("temp").value;

        for(i=0;i<250;i++){
            if(rank==result.items[i].rank)
            document.getElementById("year").value=result.items[i].year

        document.getElementById("result").value=result.items[i].title
        }

    }
    request.send()
}