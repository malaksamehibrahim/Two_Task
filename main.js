let slider =document.querySelector(".slider")
let currentSlider=0
let totalSlider=slider.querySelectorAll(".wrapper .left > div").length - 1
slider.querySelector(".contros  .up") .addEventListener("click",function(){
    if(currentSlider==0){
        return
    }
    currentSlider--
    slider.querySelector(".wrapper .left div").style.marginTop=`${currentSlider*-100}vh`
    slider.querySelector(".wrapper .right div").style.marginTop=`${(totalSlider-currentSlider)*-100}vh`

})


slider.querySelector(".contros  .dwon") .addEventListener("click",function(){
    if(currentSlider==totalSlider){
        return
    }
    currentSlider++
    slider.querySelector(".wrapper .left div").style.marginTop=`${currentSlider*-100}vh`
    slider.querySelector(".wrapper .right div").style.marginTop=`${(totalSlider-currentSlider)*-100}vh`

})