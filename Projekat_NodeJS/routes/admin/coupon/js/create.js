
const url = "http://localhost:3000/coupons";
const redirectUrl = "http://localhost:3000/admin/coupons/index";
const returnTodayDate=()=>{
    let q = new Date();
let m = q.getMonth();
let d = q.getDay();
let y = q.getFullYear();
return  new Date(y,m,d);
};
window.addEventListener("DOMContentLoaded",()=>{


    document.getElementById("submit")
    .addEventListener("click",()=>{
    
    let couponNumber = document.getElementById("couponNumber").value;
    let validTo = new Date(document.getElementById("validTo").value);
    let discountValue = Number.parseInt(document.getElementById("discountValue").value);
    let isValid = document.getElementById("isValid").checked;

    const errorDiv=  document.getElementById("error");

    if(couponNumber==""){
        errorDiv.innerHTML = "This fields can not be empty";
        return;
    }
    if(isNaN(discountValue) || discountValue <= 0 ){
        errorDiv.innerHTML = "Discount value must be greater than zero";
        return;
    }
    if(returnTodayDate().getTime() > validTo.getTime() ){
        errorDiv.innerHTML = "You can not chooes date in the past";
        return;
    }
    let obj = {validTo,discountValue,couponNumber,isValid};
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

