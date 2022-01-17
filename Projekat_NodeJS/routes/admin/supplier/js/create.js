
const url = "http://localhost:3000/suppliers";
const redirectUrl = "http://localhost:3000/admin/suppliers/index";
window.addEventListener("DOMContentLoaded",()=>{


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
    fetch(url,{
        method : 'POST',
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

