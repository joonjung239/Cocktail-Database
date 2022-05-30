let drink = {
  name: document.querySelector("section > div > h2"),
  photo: document.querySelector("img"),
  instructions: document.querySelector("p"),
}
document.getElementById('name').addEventListener("click", findCocktail)
document.getElementById('name').addEventListener("change", findCocktail)
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
  })
}
 
function randomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => {console.log(data) 
          drinkUpdate(data, 0)
      })
}