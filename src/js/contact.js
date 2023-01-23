import location from "@/images/location.png"

function createContact() {
  const contact = document.createElement("div")
  contact.classList.add("contact")

  const phoneNumber = document.createElement("p")
  phoneNumber.textContent = "📞 123 456 789"

  const address = document.createElement("p")
  address.textContent = "🏠 V6, UTP , Perak, Malaysia"

  const shopLocation = document.createElement("img")
  shopLocation.src = location
  shopLocation.alt = "D'Lebai location"

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(shopLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(createContact())
}

export default loadContact
