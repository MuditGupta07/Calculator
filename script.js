let x=document.querySelector(".btn")
let y=document.getElementById("dis")
let z=''
let b1=document.getElementById("one")
b1.addEventListener("click",function(){
    z+=b1.innerHTML
    y.value=z
})

let b2=document.getElementById("two")
b2.addEventListener("click",function(){
    z+=b2.innerHTML
    y.value=z
})
let b3=document.getElementById("three")
b3.addEventListener("click",function(){
    z+=b3.innerHTML
    y.value=z
})
let b4=document.getElementById("four")
b4.addEventListener("click",function(){
    z+=b4.innerHTML
    y.value=z
})
let b5=document.getElementById("five")
b5.addEventListener("click",function(){
    z+=b5.innerHTML
    y.value=z
})
let b6=document.getElementById("six")
b6.addEventListener("click",function(){
    z+=b6.innerHTML
    y.value=z
})
let b7=document.getElementById("seven")
b7.addEventListener("click",function(){
    z+=b7.innerHTML
    y.value=z
})
let b8=document.getElementById("eight")
b8.addEventListener("click",function(){
    z+=b8.innerHTML
    y.value=z
})
let b9=document.getElementById("nine")
b9.addEventListener("click",function(){
    z+=b9.innerHTML
    y.value=z
})
let b10=document.getElementById("zero")
b10.addEventListener("click",function(){
    z+=b10.innerHTML
    y.value=z
})
let b11=document.getElementById("plus")
b11.addEventListener("click",function(){
    z+=b11.innerHTML
    y.value=z
})
let b12=document.getElementById("minus")
b12.addEventListener("click",function(){
    z+=b12.innerHTML
    y.value=z
})
let b13=document.getElementById("mul")
b13.addEventListener("click",function(){
    z+=b13.innerHTML
    y.value=z
})
let b14=document.getElementById("div")
b14.addEventListener("click",function(){
    z+=b14.innerHTML
    y.value=z
})
let b15=document.getElementById("equal")
b15.addEventListener("click",function(){
    let r=eval(z)
    y.value=r
    z=''
})
let b16=document.getElementById("deci")
b16.addEventListener("click",function(){
    z+=b16.innerHTML
    y.value=z
})
let b17=document.getElementById("back")
b17.addEventListener("click",function(){
    z=z.slice(0,-1)
    y.value=z
})
let b18=document.getElementById("clear")
b18.addEventListener("click",function(){
    z=''
    y.value=z
})