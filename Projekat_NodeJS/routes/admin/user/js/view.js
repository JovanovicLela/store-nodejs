
const url = "http://localhost:3000/users";

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
        document.getElementById("email").innerHTML=res.email;
        document.getElementById("username").innerHTML=res.username;
        document.getElementById("is_admin").innerHTML=res.is_admin;
    })
    .catch(err=>console.log("Error happened",err));
});