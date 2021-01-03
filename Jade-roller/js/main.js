function getDisc(class_button,class_block){
    let num = 0;
    let button1 = document.getElementById(class_button)
    let block = document.getElementById(class_block)
    button1.addEventListener("click",()=>{    
        if(num == 1){
            block.style.display="none";
            num = 0 
        }
        else{
            block.style.display="block";
            num = 1 
        }  
    })
}
getDisc("button__q1","block__q1")
getDisc("button__q2","block__q2")
getDisc("button__q3","block__q3")
getDisc("button__q4","block__q4")
getDisc("button__q5","block__q5")
getDisc("button__q6","block__q6")
getDisc("button__q7","block__q7")
getDisc("button__q8","block__q8")
getDisc("button__q9","block__q9")
getDisc("button__q10","block__q10")
let getPhone = document.getElementById("get__phone")
let getPhoneBut = document.getElementById("phone__phone") 
let delPhone = document.getElementById("del__phone") 
let phoneSection = document.getElementById("phone__section") 

getPhoneBut.addEventListener("click",()=>{
    phoneSection.style.display = "flex"
    })
getPhone.addEventListener("click",()=>{
phoneSection.style.display = "flex"
})
delPhone.addEventListener("click",()=>{
phoneSection.style.display = "none"
})


let getOrder = document.getElementsByClassName("get__order") 
let delOrder = document.getElementById("del__order") 
let orderSection = document.getElementById("order__section") 


delOrder.addEventListener("click",()=>{
orderSection.style.display = "none"
})


let roller = document.getElementById("roller") 
let skrebok = document.getElementById("skrebok") 
let jade = document.getElementById("jade") 
let rollerButton = document.getElementById("roller__button") 
let skrebokButton = document.getElementById("skrebok__button") 
let jadeButton = document.getElementById("jade__button") 
let rollerButtonMain = document.getElementById("roller__main") 
let rollerButtonBlock4 = document.getElementById("roller__block4") 

rollerButton.addEventListener("click",()=>{
orderSection.style.display = "flex"
roller.style.display = "flex"
skrebok.style.display = "none"
jade.style.display = "none"
    })

skrebokButton.addEventListener("click",()=>{
    orderSection.style.display = "flex"
    skrebok.style.display = "flex"
    roller.style.display = "none"
    jade.style.display = "none"
    })

jadeButton.addEventListener("click",()=>{
    orderSection.style.display = "flex"
    jade.style.display = "flex"
    roller.style.display = "none"
    skrebok.style.display = "none"
    })

    rollerButtonMain.addEventListener("click",()=>{
        orderSection.style.display = "flex"
        jade.style.display = "none"
        roller.style.display = "flex"
        skrebok.style.display = "none"
        })
        rollerButtonBlock4.addEventListener("click",()=>{
            orderSection.style.display = "flex"
            jade.style.display = "none"
            roller.style.display = "flex"
            skrebok.style.display = "none"
            })

        let phoneMenu = document.getElementById("phone__menu") 
        let menuChild = document.getElementById("menu__child")
        
        let numMenu = 0;
        phoneMenu.addEventListener("click",()=>{
            
            
                
                if(numMenu == 1){
                    menuChild.style.display="none";
                    numMenu = 0 
                }
                else{
                    menuChild.style.display = "block"
            menuChild.style.position ="absolute"
            numMenu = 1 
                }  



            
            })