function createMenu() {
  const menu = document.createElement("div")

  menu.appendChild(createMenuItem("Almond crunch"))

  return menu
}

function createMenuItem(name) {
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item")

  const foodName = document.createElement("h3")
  foodName.textContent = name

  // const foodImage = document.createElement("img")
  // foodImage.src = `images/pizzas/${name.toLowerCase()}.png`
  // foodImage.alt = `${name}`

  // menuItem.appendChild(foodImage)
  menuItem.appendChild(foodName)

  return menuItem
}

function loadMenu() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(createMenu())
}

export default loadMenu
