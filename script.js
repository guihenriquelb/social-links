const html = document.documentElement
const img = document.querySelector("#profile img")
let lightMode = localStorage.getItem("light-mode")

function enableLightMode() {
  html.classList.toggle("light")
  localStorage.setItem("light-mode", "enabled")
}

function disableLightMode() {
  html.classList.toggle("light")
  localStorage.setItem("light-mode", "disabled")
}

function toogleImage() {
  if (html.classList.contains("light")) {
    // se tiver lightmode, adicionar light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light, manter
    img.setAttribute("src", "./assets/avatar.png")
  }
}

if (lightMode === "enabled") {
  enableLightMode()
}

toogleImage()

function toggleMode() {
 
  if (lightMode === "disabled") {
    enableLightMode()
  } else {
    disableLightMode()
  }

  toogleImage()
  
}


