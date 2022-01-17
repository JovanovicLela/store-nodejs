
const url = "http://localhost:3000/supplier";
console.log("Super")
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
console.log(res)
        document.getElementById("id").innerHTML=res["_id"];
        document.getElementById("name").innerHTML=res.name;
        document.getElementById("city").innerHTML=res.city;
        document.getElementById("country").innerHTML=res.country;
        document.getElementById("number").innerHTML=res.number;
    })
    .catch(err=>console.log("Error happened",err));


   
    
});