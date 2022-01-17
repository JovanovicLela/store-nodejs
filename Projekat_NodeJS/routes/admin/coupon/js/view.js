
const url = "http://localhost:3000/coupons";

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
        document.getElementById("couponNumber").innerHTML=res.couponNumber;
        document.getElementById("discountValue").innerHTML=res.discountValue+"$";
        document.getElementById("isValid").innerHTML=res.isValid;
        document.getElementById("validTo").innerHTML=res.validTo.split("T")[0];
    })
    .catch(err=>console.log("Error happened",err));
});