let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "50000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "400000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "500000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]

  const keys = Object.keys(arr[0]);
  

var cardsahir =document.getElementById("d0");

// var kk =Object.keys.arr[0]
console.log(keys)

cardsahir.innerHTML += `
<select class="form-control"  name="s1" id="s1">

<option value="${keys[0]}">${keys[0]}</option>
<option value="${keys[1]}">${keys[1]}</option>
<option value="${keys[2]}">${keys[2]}</option>
<option value="${keys[3]}">${keys[3]}</option>
<option value="${keys[4]}">${keys[4]}</option>
<option value="${keys[5]}">${keys[5]}</option>


</select>
`;



function lookme(){

// alert ("hi")



const keys1 = Object.keys(arr[0]);
  

var sss =document.getElementById("s1");

var ss=sss.value
// console.log(ss)




const check_obj=keys1.filter((e)=>{

   

    if (e === ss){
   
        return e
}





})









var cardsahir =document.getElementById("d1");



cardsahir.innerHTML = ""
 


var ppp =arr


const newArr = ppp.map((ppp1) => {

// console.log(ppp)


var iii =document.getElementById("i1");

var ii=iii.value


// const {check_obj}=ppp1[check_obj]



    // console.log(ppp1);
//   console.log(ii);
//   console.log(check_obj);
  



  if (ppp1[check_obj] === ii){
   
 
    
    var {brand,model,price,ram,rom}=ppp1
    
    
    cardsahir.innerHTML += `
    <div class="card m-2" style="width: 18rem">
       
          <div class="card-body">
            <h5 class="card-title">${model} ${brand}</h5>
            <h5 class="card-title">Price: ${price}</h5>
            
            
            <p class="card-text">
             Ram: ${ram}
            </p>

            
            <p class="card-text">
             Rom: ${rom}
            </p>
          
          </div>
        </div>
    `;
    


}


       
   
    

// var ttt = ppp1.price ===ii ? "true": "false"

// console.log(ttt)

})



console.log(newArr)





   



}













