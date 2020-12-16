async function getResponse (){
   
    let num = localStorage.getItem("id")
  let response = await fetch(`https://examserverapp.herokuapp.com/users/${num}`)
  let content = await response.json()
  console.log(content[0].name)
  
  
  let name= document.querySelector('.name')
  let size= document.querySelector('.size')
  let color= document.querySelector('.color')
  let disc= document.querySelector('.disc')
  let img= document.querySelector('.img')
  let cost= document.querySelector('.cost')
  
  
  
  name.innerHTML=`<h1>${content[0].name} </h1>`
  size.innerHTML=`<h1>Розмір: ${content[0].size} </h1>`
  color.innerHTML=`<h1>Колір: ${content[0].color} </h1>`
  disc.innerHTML=`<h1>Відгуки: ${content[0].disc} </h1>`
  img.innerHTML=`  <img src="${content[0].img}" alt="img">`
  cost.innerHTML=`<h1> Ціна: ${content[0].cost} грн</h1>`
  
  }


  function getColor(){
    return "#"+(Math.floor(Math.random()*16777215)).toString(16);
   }
function getBody(){
console.log("click");
this.style.backgroundColor = getColor(); 
this.style.transition = "4s" ;
}
//document.body.addEventListener("click",getBody);
//document.body.addEventListener("mouseover",getDiv);
function getDiv(){
let div  = document.createElement("div"); 
div.style.borderRadius = "50%";
div.style.margin = "5%";
div.style.float = "left";
div.style.backgroundColor = getColor(); 
document.body.appendChild(div);
div.style.width = "100px";
div.style.height = "100px";
}



function example(){
let sub = document.getElementsByClassName('main');
let but = document.getElementById("lapup");
let butcl = document.getElementById("lapclose");
let h=0;
but.addEventListener('click', function(){
    
    for(i=0;i<=sub.length; i++)
     {
     sub[i].style.display = 'block';}
})
butcl.addEventListener('click', function(){
    for(i=0;i<=sub.length; i++)
     {
     sub[i].style.display = 'none';
     }
     }
    

)
}
///////////////////////////////////////////////////////////////