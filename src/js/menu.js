const context = require.context("@/images/donuts", false, /\.svg$/)
const donutImages = context.keys().reduce((acc, key) => {
  const name = key.split("/").pop().replace(".svg", "")
  acc[name] = context(key)
  return acc
}, {})

function createMenu() {
  const menu = document.createElement("div")
  menu.classList.add("menu")

  menu.appendChild(createMenuItem("Brown Donut"))
  menu.appendChild(createMenuItem("Green Donut"))
  menu.appendChild(createMenuItem("Pink Donut"))
  menu.appendChild(createMenuItem("Christmas Donut"))
  menu.appendChild(createMenuItem("Plain Donut"))

  return menu
}

function createMenuItem(name) {
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item")

  const foodName = document.createElement("h3")
  foodName.textContent = name

  const foodImage = document.createElement("img")
  foodImage.src = donutImages[name]
  foodImage.alt = `${name}`

  menuItem.appendChild(foodImage)
  menuItem.appendChild(foodName)

  return menuItem
}

function loadMenu() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(createMenu())
}

export default loadMenu
