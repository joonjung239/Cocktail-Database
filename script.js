let drink = {
  name: document.querySelector("section > div > h2"),
  photo: document.querySelector("img"),
  instructions: document.querySelector("p"),
}
const drinkList = document.getElementById('drink-list')
document.getElementById('name-btn').addEventListener("click", findCocktail)
document.getElementById('random').addEventListener("click", randomDrink)

function drinkUpdate(data, info) {
  drink.instructions.textContent = data.drinks[info].strInstructions;
  drink.name.textContent = data.drinks[info].strDrink;
  drink.photo.src =  data.drinks[info].strDrinkThumb;
}

function newDrink(data, info) {
  return function() {
      if (info < data.drinks.length - 1) info++
      drinkUpdate(data, info)
  }
}

function findCocktail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + document.getElementById('name').value)
  .then(response => response.json())
  .then(data => {console.log(data) 
    drinkUpdate(data, 0)
      document.getElementById('newCocktail').addEventListener("click", newDrink(data, 0))
      renderDrinkNames(data.drinks)
  })
}
 
function randomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => {console.log(data) 
          drinkUpdate(data, 0)
      })
}

function renderDrinkNames(drinks) {
  drinkList.textContent = ""
  drinks.forEach(drink => {
    console.log(drink)
    const drinkName = document.createElement('li')
    drinkName.textContent = drink.strDrink
    drinkList.append(drinkName)
  })
}