const ingredientInput = document.getElementById('ingredient')
const ingredientBtn = document.getElementById('ingredient-button')
ingredientBtn.addEventListener('click', function getData() {
    const ingredient = ingredientInput.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(data => logDrinkNames(data.drinks))
  })

function logDrinkNames(drinks) {
  drinks.forEach(drink => console.log(drink))
  drinks.forEach(drink => console.log(drink.strDrink))
  drinks.forEach(drink => console.log(drink.strDrinkThumb))
}

const cocktailNameInput = document.getElementById('name')
const nameBtn = document.getElementById('name-btn')
nameBtn.addEventListener('click', () => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailNameInput.value}`)
  .then(res => res.json())
  .then(data => console.log(data.drinks))
})