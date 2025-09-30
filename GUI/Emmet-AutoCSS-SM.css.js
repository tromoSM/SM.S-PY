document.querySelectorAll(`tromoSM-head-main`).forEach(fuh=>{
    fuh.insertAdjacentHTML(`afterend`,"<br>")
    fuh.style.fontWeight="700"
    fuh.style.fontSize="28px"
    fuh.style.textAlign="center"
    fuh.style.lineHeight="2"
})
document.querySelectorAll(`tr-norm`).forEach(fuh=>{
    fuh.insertAdjacentHTML(`afterend`,"<br>")
    fuh.style.fontWeight="400"
    fuh.style.fontSize="16px"
    fuh.style.textAlign="justify"
})
function Func_display_temp_privacy(){
 document.querySelector(`[tromoSM=rr-temp-notifcation-warr]`).style.animation="far 1s 0ms forwards ease 1"
}
document.querySelectorAll(`tromoSM-ui-close`).forEach(fuh=>{
   fuh.innerHTML="×"
   const $uiR = fuh.getAttribute(`ui-r`);
   fuh.setAttribute("onclick" , `Func_display_temp_privacy()`) 
   //just a use like a if else thing with a custom attribute when u got like more bcloise buttons for tos of smth
   //i didnt do the relative ahh path function trhing
})
if(document.querySelector(`tr-tos-src`).innerHTML=!""){
document.querySelector(`tr-tos-src`).innerHTML=$ui_RU 
}
else{
console.error("SM.css-EMMET JS: innerHTML must be null for tos fill")
}
