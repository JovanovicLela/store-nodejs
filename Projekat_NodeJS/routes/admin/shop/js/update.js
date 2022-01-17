
const url = "http://localhost:3000/shops";
const redirectUrl = "http://localhost:3000/admin/shops/index";

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
        document.getElementById("location").value=res.location;
        document.getElementById("name").value=res.name;
        document.getElementById("revenue").value=res.revenue;
        document.getElementById("numberOfEmployees").value=res.numberOfEmployees;
    })
    .catch(err=>console.log("Error happened",err));


    document.getElementById("submit")
    .addEventListener("click",()=>{
        let name = document.getElementById("name").value;
        let location = document.getElementById("location").value;
        let revenue =Number.parseInt(document.getElementById("revenue").value) ;
        let numberOfEmployees = Number.parseInt(document.getElementById("numberOfEmployees").value);
        const errorDiv=  document.getElementById("error");
        let errorMessage = "";
        if(name==""||location==""){
            errorDiv.innerHTML="This fields can not be empty";
            return;
        }
        if(isNaN(revenue) || isNaN(numberOfEmployees)){
            errorDiv.innerHTML="Invalid argument for number";
            return;
        }
        if(revenue < 0 || numberOfEmployees < 0){
            errorDiv.innerHTML="Number can not be negative";
            return;
        }
        if(numberOfEmployees > 1000){
            errorDiv.innerHTML="Number of employees is too large";
            return;
        }
        let obj = {name,location,revenue,numberOfEmployees};
    console.log(obj)
    fetch(url+"/"+id,{
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