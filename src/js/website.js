import loadHome from "@/js/home"
import loadMenu from "@/js/menu"

function createHeader() {
  const header = document.createElement("header")
  header.classList.add("header")

  const restaurantName = document.createElement("h1")
  restaurantName.classList.add("restaurant-name")
  restaurantName.textContent = "D'Lepai Donut"

  header.appendChild(restaurantName)
  header.appendChild(createNav())

  return header
}

function createNav() {
  const nav = document.createElement("nav")

  const homeButton = document.createElement("button")
  homeButton.classList.add("button-nav")
  homeButton.textContent = "Home"
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    setActiveButton(homeButton)
    loadHome()
    console.log("this is home button")
  })

  const menuButton = document.createElement("button")
  menuButton.classList.add("button-nav")
  menuButton.textContent = "Menu"
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    setActiveButton(menuButton)
    loadMenu()
    console.log("this is menu button")
  })

  const contactButton = document.createElement("button")
  contactButton.classList.add("button-nav")
  contactButton.textContent = "Contact"
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    setActiveButton(contactButton)
    // loadContact();
    console.log("this is contact button")
  })

  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(contactButton)

  return nav
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav")

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active")
    }
  })

  button.classList.add("active")
}

function createMain() {
  const main = document.createElement("main")
  main.classList.add("main")
  main.setAttribute("id", "main")
  return main
}

function loadWebsite() {
  const content = document.getElementById("content")

  content.appendChild(createHeader())
  content.appendChild(createMain())
}

export default loadWebsite
