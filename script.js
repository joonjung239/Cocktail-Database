const drinkList = document.getElementById('drink-list')
const ingredientList = document.getElementById('ingredient-list');
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
      clearDrink()
      document.querySelector("p").textContent = drink.strInstructions;
      document.querySelector("section > div > h2").textContent = drink.strDrink;
      document.querySelector("img").src =  drink.strDrinkThumb;
      const step1 = document.createElement('li')
            step1.textContent = `${drink.strIngredient1}, ${drink.strMeasure1}`

            const step2 = document.createElement('li')
            if(drink.strMeasure2 !== null) {
                step2.textContent = `${drink.strIngredient2}, ${drink.strMeasure2}`
            } else {step2.textContent = drink.strIngredient2}
            

            const step3 = document.createElement('li')
            if(drink.strIngredient3 === null || drink.strIngredient3 === "") {
                step3.style.display = "none"
            } else if(drink.strMeasure3 !== null) {
                step3.textContent = `${drink.strIngredient3}, ${drink.strMeasure3}`
            } else {step3.textContent = drink.strIngredient3}
            
            
            const step4 = document.createElement('li')
            if(drink.strIngredient4 === null || drink.strIngredient4 === "") {
                step4.style.display = "none"
            } else if(drink.strMeasure4 !== null) {
                step4.textContent = `${drink.strIngredient4}, ${drink.strMeasure4}`
            } else {step4.textContent = drink.strIngredient4}


            const step5 = document.createElement('li')
            if(drink.strIngredient5 === null || drink.strIngredient5 === "") {
                step5.style.display = "none"
            } else if(drink.strMeasure5 !== null) {
                step5.textContent = `${drink.strIngredient5}, ${drink.strMeasure5}`
            } else {step5.textContent = drink.strIngredient5}

            const step6 = document.createElement('li')
            if(drink.strIngredient6 === null || drink.strIngredient6 === "") {
                step6.style.display = "none"
            } else if(drink.strMeasure6 !== null) {
                step6.textContent = `${drink.strIngredient6}, ${drink.strMeasure6}`
            } else {step6.textContent = drink.strIngredient6}
            
            const step7 = document.createElement('li')
            if(drink.strIngredient7 === null || drink.strIngredient7 === "") {
                step7.style.display = "none"
            } else if(drink.strMeasure7 !== null) {
                step7.textContent = `${drink.strIngredient7}, ${drink.strMeasure7}`
            } else {step7.textContent = drink.strIngredient7}

            ingredientList.append(step1, step2, step3, step4, step5, step6, step7)
    })
    drinkList.append(drinkName)
  })
}

function clearDrink() {
  document.querySelector("section > div > h2").textContent = "";
  document.querySelector("img").src = "";
  document.querySelector("p").textContent = "";
  ingredientList.textContent = ""
}





