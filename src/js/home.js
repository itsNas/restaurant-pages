import chef from "@/images/chef.png"

function createHome() {
  const home = document.createElement("div")
  home.classList.add("home")

  const chefImage = document.createElement("img")
  chefImage.src = chef
  chefImage.alt = "Chef"

  home.appendChild(createParagraph("Best donut in your country"))
  home.appendChild(createParagraph("Made with passion since WW3"))
  home.appendChild(chefImage)
  home.appendChild(createParagraph("Order online or visit us!"))

  return home
}

function createParagraph(text) {
  const paragraph = document.createElement("p")
  paragraph.textContent = text
  return paragraph
}

function loadHome() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(createHome())
}

export default loadHome
