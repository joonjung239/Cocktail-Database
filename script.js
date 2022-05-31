const drinkList = document.getElementById('drink-list')
document.getElementById('random').addEventListener("click", randomDrink)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  findCocktail()  
})

function findCocktail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + document.getElementById('name').value)
  .then(response => response.json())
  .then(data => {console.log(data) 
      renderDrinkNames(data.drinks)
  })
}
 
function randomDrink() {
  clearDrink()
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => {renderDrinkNames(data.drinks)
      })
}

function renderDrinkNames(drinks) {
  clearDrink()
  drinkList.textContent = ""
  drinks.forEach(drink => {
    console.log(drink)
    const drinkName = document.createElement('li')
    drinkName.textContent = drink.strDrink
    drinkName.addEventListener('mouseenter', () => {
      drinkName.style.fontWeight = 'bold'
      drinkName.style.cursor = 'pointer'
    })
    drinkName.addEventListener('mouseleave', () => {
      drinkName.style.fontWeight = 'normal'
    })
    drinkName.addEventListener('click', () => {
      document.querySelector("p").textContent = drink.strInstructions;
      document.querySelector("section > div > h2").textContent = drink.strDrink;
      document.querySelector("img").src =  drink.strDrinkThumb;
    })
    drinkList.append(drinkName)
  })
}

function clearDrink() {
  document.querySelector("section > div > h2").textContent = "";
  document.querySelector("img").src = "";
  document.querySelector("p").textContent = "";
}





