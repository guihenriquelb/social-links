const html = document.documentElement
let lightMode = localStorage.getItem("light-mode")



function enableLightMode() {
  html.classList.toggle("light")
  localStorage.setItem("light-mode", "enabled")
}

function disableLightMode() {
  html.classList.toggle("light")
  localStorage.setItem("light-mode", "disabled")
}

if (lightMode === "enabled") {
  enableLightMode()
}


function toggleMode() {
 
  if (lightMode === "disabled") {
    enableLightMode()
  } else {
    disableLightMode()
  }

 



}


