
const url = "http://localhost:3000/products";
const redirectUrl = "http://localhost:3000/admin/products/index";
window.addEventListener("DOMContentLoaded",()=>{


    document.getElementById("submit")
    .addEventListener("click",()=>{
    
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let price = Number.parseInt(document.getElementById("price").value);
    let numberLeft = Number.parseInt(document.getElementById("numberLeft").value);
    const errorDiv=  document.getElementById("error");
    if(name==""||type==""){
        errorDiv.innerHTML = "This fields can not be empty";
        return;
    }
    if(isNaN(price) || isNaN(numberLeft)){
        errorDiv.innerHTML = "Invalid value for the number";
        return;
    }
    if(price <= 0 ){
        errorDiv.innerHTML = "Price must be greater than zero";
        return;
    }
    if(numberLeft<0){
        errorDiv.innerHTML = "Number of products left must be grater than zero";
        return;
    }
    let obj = {name,type,price,numberLeft};
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

