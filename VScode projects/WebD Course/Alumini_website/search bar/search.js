const alumini_card_temp = document.querySelector("[alumini-card-template]")
const card_container = document.querySelector("[data-user-cards-container]")
const search_input = document.querySelector("[data-search]")

let users = []

search_input.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    users = data.map(user => {
      const card = alumini_card_temp.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")

      header.textContent = user.name
      body.textContent = user.email

      card_container.append(card);

      return {name: user.name, email: user.email, element: card}
      })
  })

//   const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let users = []

// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   users.forEach(user => {
//     const isVisible =
//       user.name.toLowerCase().includes(value) ||
//       user.email.toLowerCase().includes(value)
//     user.element.classList.toggle("hide", !isVisible)
//   })
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => {
//     users = data.map(user => {
//       const card = userCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("[data-header]")
//       const body = card.querySelector("[data-body]")
//       header.textContent = user.name
//       body.textContent = user.email
//       userCardContainer.append(card)
//       return { name: user.name, email: user.email, element: card }
//     })
//   })