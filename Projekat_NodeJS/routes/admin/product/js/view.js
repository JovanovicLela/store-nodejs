
const url = "http://localhost:3000/products";

window.addEventListener("DOMContentLoaded",()=>{

    const currentUrl = window.location.href;
    var id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    fetch(url+"/"+id,{
        method : 'GET',
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .then(res=>res.json())
    .then(res=>{
        document.getElementById("id").innerHTML=res["_id"];
        document.getElementById("name").innerHTML=res.name;
        document.getElementById("type").innerHTML=res.type;
        document.getElementById("price").innerHTML=res.price;
        document.getElementById("numberLeft").innerHTML=res.numberLeft;
    })
    .catch(err=>console.log("Error happened",err));
});