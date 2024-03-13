//https://superheroapi.com/api/access-token/character-id
const SUPERHERO_TOKEN = '122096134094058178'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


//Ransom Hero Generation :->
const randomHero = () =>{
    const noOfHero = 731
    return Math.floor((Math.random() * noOfHero) + 1)
}

//btn : RandomHero-btn
let RandomHeroBtn = document.getElementById('RandomHero-btn')
// console.log(RandomHeroBtn)

// *onclick property:->
RandomHeroBtn.onclick = () =>getSuperHero(randomHero())
//div : heroImage
const heroImageDiv = document.getElementById('heroImage')

//Get Ramdom SuperHero  Fxn:
const getSuperHero = (id,name) => {
    //id 👉 base_url/id
    // json.image.url
    fetch(`${BASE_URL}/${id}`)
    .then(Response => Response.json())
    .then(json => {
        console.log(json)
        const stats = showHeroInfo(json)
        const name =  `<h2>${json.name}</h2>`
        heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=200 width=200/>${stats}`

    })
}


const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }
  
  const showHeroInfo = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    return stats
  }


// btn : search
const searchBtn = document.getElementById('search-btn')
// *onclick property:->
searchBtn.onclick = () =>getSearchSuperHero(searchInput.value)
// input tag :
const searchInput = document.getElementById('searchInput')

//Get Search SuperHero  Fxn:
const getSearchSuperHero = (name) => {
    console.log()
    // name 👉 base_url/search/name
    //json.results[0].image.url
    fetch(`${BASE_URL}/search/${name}`)
    .then(Response => Response.json())
    .then(json => {
        // console.log(json)
        const hero = json.results[0]
        const stats = showHeroInfo(hero)
        const name =  `<h2>${hero.name}</h2>`
        heroImageDiv.innerHTML = `${name}<img src="${hero.image.url}" height=200 width=200/>${stats}`


    })
}






