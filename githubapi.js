function github(){
    var request=new XMLHttpRequest();
    var url='https://api.github.com/users/TharunReddy369/repos';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
     //   document.querySelector("input").value=result[0].name;
        var ele="";
        for(var i=0;i<result.length;i++){
        ele+=(result[i].name)+" ";
        }
        document.write(ele);
    }

    request.send();
}
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="githubapi.js"></script>
</head>
<body>
    
    <button onclick="github()">submit</button>
</body>
</html>
*/