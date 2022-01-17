
const url = "http://localhost:3000/supplier";
const redirectUrl = "http://localhost:3000/admin/suppliers/index";
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
        document.getElementById("name").value=res.name;
        document.getElementById("city").value=res.city;
        document.getElementById("country").value=res.country;
        document.getElementById("number").value=res.number;
    })
    .catch(err=>console.log("Error happened",err));


    document.getElementById("submit")
    .addEventListener("click",()=>{
        let name = document.getElementById("name").value;
        let city = document.getElementById("city").value;
        let country = document.getElementById("country").value;
        let number = document.getElementById("number").value;
        if(name==""||city==""||number==""||number==""){
            const errorDiv=  document.getElementById("error");
            const errorMessage="This fields can not be empty";
            errorDiv.innerHTML = errorMessage;
            return;
        }
        let obj = {name,city,number,country,number};
    console.log(obj)
    
    fetch(url+"s/"+id,{
        method : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(obj)
    })
    .then(data=>{
        console.log("Success:",data);
        window.location.href = redirectUrl;
    })
    .catch(err=>console.log("Some error has happened",err))
    });
});