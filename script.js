var home=document.querySelector("#log11");
home.style.color="red";
home.style.fontFamily="arial";
home.innerHTML="<i> Click</i>";
home.innerHTML="<b>Login</b>"






//var home=document.querySelector("#log111");
//home.style.color="red";
//home.style.backgroundColor="white";



// adding listeners
home.addEventListener('mouseenter', function(){
    home.style.color="red";

})
home.addEventListener('mouseleave', function(){
    home.style.color="black";

})
