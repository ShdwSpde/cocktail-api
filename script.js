/*

API pt. 2

some api's need query parameters to return the correct data

look at the search parameter identified below, margarita


*/
document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){
  let drink = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) //parse response as json
    .then(data => {
         console.log(data.drinks[0].strDrinkThumb)
          document.querySelector('img').src=data.drinks[0].strDrinkThumb
          document.querySelector('h3').innerText = data.drinks[0].strDrink
          document.querySelector('p').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}