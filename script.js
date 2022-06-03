const drinkList = document.getElementById('drink-list')
const ingredientList = document.getElementById('ingredient-list');
document.getElementById('random').addEventListener("click", randomDrink)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  findCocktail()
  document.getElementById('name').value = '';
})
function findCocktail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + document.getElementById('name').value)
  .then(response => response.json())
  .then(data => renderDrinkNames(data.drinks))
}
function randomDrink() {
  clearDrink()
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => renderDrinkNames(data.drinks))
}
function renderDrinkNames(drinks) {
  clearDrink()
  drinkList.textContent = ""
  drinks.forEach(drink => {
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
      clearDrink()
      document.querySelector("p").textContent = drink.strInstructions;
      document.querySelector("section > div > h2").textContent = drink.strDrink;
      document.querySelector("img").src =  drink.strDrinkThumb;
      document.querySelector("#ingredient-container").style.visibility ="visible"
      document.querySelector('#instructions-container').style.visibility = 'visible'
      document.querySelector('#image').style.visibility = 'visible'
      let n = 32
            for(let i = 17 ; i < 31; i++) {
                const step = document.createElement('li')
                const ingredient = Object.entries(drink)[i][1]
                const measurement = Object.entries(drink)[n][1]
                if(ingredient === null || ingredient === "") {
                    step.style.display = 'none'
                } else if (measurement === null) {
                    step.textContent = ingredient
                } else {
                    step.textContent = `${ingredient}, ${measurement}`
                }
                ingredientList.append(step)
                n++
            }
    })
    drinkList.append(drinkName)
  })
}
function clearDrink() {
  document.querySelector("section > div > h2").textContent = "";
  document.querySelector("img").src = "";
  document.querySelector("p").textContent = "";
  ingredientList.textContent = ""
  document.querySelector("#ingredient-container").style.visibility ="hidden"
  document.querySelector('#instructions-container').style.visibility = 'hidden'
  document.querySelector('#image').style.visibility = 'hidden'
}