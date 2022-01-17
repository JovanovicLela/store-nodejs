
const url = "http://localhost:3000/shops";

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
        document.getElementById("location").innerHTML=res.location;
        document.getElementById("name").innerHTML=res.name;
        document.getElementById("revenue").innerHTML=res.revenue;
        document.getElementById("numberOfEmployees").innerHTML=res.numberOfEmployees;
    })
    .catch(err=>console.log("Error happened",err));


   
    
});