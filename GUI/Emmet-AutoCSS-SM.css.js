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
document.querySelectorAll(`tr-norms`).forEach(fuh=>{
    fuh.insertAdjacentHTML(`afterend`,"<br>")
    fuh.style.fontWeight="410"
    fuh.style.fontSize="15px"
    fuh.style.textAlign="justify"
})

function Func_display_temp_privacy(){
 document.querySelectorAll(`[ui-display=tos]`).forEach(fuh=>{fuh.style.animation="far 1s 0ms forwards ease 1"})
}

function Func_display_temp_tos(){
 document.querySelectorAll(`[ui-display=Privacy]`).forEach(fuh=>{fuh.style.animation="far 1s 0ms forwards ease 1"})
}
document.querySelectorAll(`tromoSM-ui-close`).forEach(fuh=>{
  if(fuh.getAttribute("ui-r")=="tos"){
   fuh.setAttribute("onclick" , `Func_display_temp_tos()`) 
  }
  else{
   const $uiR = fuh.getAttribute(`ui-r`);
   fuh.setAttribute("onclick" , `Func_display_temp_privacy()`) 
  }
   fuh.innerHTML="×"

})
if(document.querySelector(`tr-tos-src`).innerHTML=!""){
document.querySelector(`tr-tos-src`).innerHTML=$ui_RU 
}
else{
console.error("SM.css-EMMET JS: innerHTML must be null for tos fill")
}
document.querySelector(`donate`).innerHTML="Donate"
document.querySelector(`donate`).setAttribute(`onclick`,`window.open("https://buymeacoffee.com/tromosm","_blank");`)
document.querySelector(`donate`).setAttribute(`tromoSM`,`link-attr`)
document.querySelector(`donate`).style.padding="0px 4px"
document.querySelector(`donate`).insertAdjacentText("afterend","to keep us free.")
document.querySelector(`donate`).insertAdjacentText("beforeend","🡥")
