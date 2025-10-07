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
document.addEventListener("DOMContentLoaded", function() {
if(document.querySelector(`tr-tos-src`).innerHTML!=="removedFeature002"){
 if($ui_RU !== undefined){
 document.querySelector(`tr-tos-src`).innerHTML=$ui_RU 
 }
 else{
 document.querySelector(`tr-tos-src`).innerHTML=`
 <strong>Version 1.0st </strong><br>
 by using any of the documents you agree to this terms of service. these terms excist to prevent misuse of this tool. Do not use this tool to spy* on anyone if you don't have their permission. Do not use this tool as spyware, any type of malware nor for any illegal activity. If you don't have the permission from the owner of the device, do not attempt to steal others information with this tool. Unathorized use of this tool may violate local laws in your area. we are not liable for any damages, claims, or consequences arising from misuse. You are solely responsible for how you use this tool. This tool is provided "AS IS," without warranty of any kind. By running, installing, or distributing this tool, you confirm that you have read, understood, and agreed to these Terms of Service and accept full responsibility for your actions.
 `
 let v = "1.0st"
 console.warn(`
    SM.$PY
    Terms of service is on fallback mode. Version ${v}. Unable to fetch 'Tos-req.jsssssssssssssss' from 'https://tromosm.github.io/SM.S-PY/Assets/Tos-req.js' `)
 }
}
else{
console.error("SM.css-EMMET JS: innerHTML must be null for tos fill")
}
})
document.querySelector(`donate`).innerHTML="Donate🡥"
document.querySelector(`donate`).setAttribute(`onclick`,`window.open("https://buymeacoffee.com/tromosm","_blank");`)
document.querySelector(`donate`).setAttribute(`tromoSM`,`link-attr`)
document.querySelector(`donate`).style.padding="0px 4px"
document.querySelector(`donate`).insertAdjacentText("afterend","to keep us free.")
