async function getResponse (blockNum){
   
    let num = blockNum
  let response = await fetch(`https://examserverapp.herokuapp.com/users/${num}`)
  let content = await response.json()
  console.log(content[0].name)
  let strtitle = ".title" + num
  let strdisc =".disc" + num
  let strimg =".img" + num
  let title1= document.querySelector(strtitle)
  let disc= document.querySelector(strdisc)
  let img= document.querySelector(strimg)
 
  
  
  
  title1.innerHTML=`${content[0].title1} `
  disc.innerHTML=` ${content[0].disc} `
  img.innerHTML=`  <img src="${content[0].img}" alt="" class="w-100">`
  
  
  }

function getr(){
  element = document.getElementById("c1");
// let sub = document.getElementsById('c1');
element.addEventListener('click', function(){
console.log("e")
alert( 'home' );


})
element = document.getElementById("c2");
// let sub = document.getElementsById('c1');
element.addEventListener('click', function(){
console.log("e")
alert( 'about' );


})
element = document.getElementById("c3");
// let sub = document.getElementsById('c1');
element.addEventListener('click', function(){
console.log("e")
alert( 'Our History' );


})
element = document.getElementById("c4");
// let sub = document.getElementsById('c1');
element.addEventListener('click', function(){
console.log("e")
alert( 'groups' );


})
element = document.getElementById("c5");
// let sub = document.getElementsById('c1');
element.addEventListener('click', function(){
console.log("e")
alert( 'gallery' );


})}
// sub.addEventListener('click', function(){
    
//     for(i=0;i<=sub.length; i++)
//      {console.log("e")
//     alert( 'Всем привет!' );
//      }
// })
// butcl.addEventListener('click', function(){
//     for(i=0;i<=sub.length; i++)
//      {
//      sub[i].style.display = 'none';
//      }
//      }
    

let t1 = 1
let t2 = 2
let t3 = 3

///////////////////////////////////////////////////////////////
function getNum(){
  element1 = document.getElementById("t1");

element1.addEventListener('click', function(){
  if(t2 == 1){
    t1=1
    t2=2
  }
  if(t3 == 1){
    t2=1
    t3=3
  }
})
element2 = document.getElementById("t2");

element2.addEventListener('click', function(){
  if(t1 == 1){
    t2=1
    t1=2
  }
  if(t3 == 1){
    t2=1
    t3=2
  }
})
element3 = document.getElementById("t3");

element3.addEventListener('click', function(){
  if(t1 == 1){
    t3=1
    t1=3
  }
  if(t2 == 1){
    t3=1
    t2=3
  }
})
}