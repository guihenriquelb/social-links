function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lightmode, adicionar light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light, manter
    img.setAttribute("src", "./assets/avatar.png")
  }
}
