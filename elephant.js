const elephantInfo = document.querySelector('.elephant-info')
const elephantList = document.querySelector('.elephant-list')
const elephantHero = document.querySelector('.elephant-hero')
let stateElephants = {}

fetchElephants()
  .then(results => updateState('elephants', results))
  .then(filterAllElephants)
  .then(addElephantInfo)
  .then(sortElephantsByDOB)
  .then(displayAllElephants)
  .then(addOnClickHandler)

function addOnClickHandler(event) {
  elephantList.addEventListener('click', showElephantImage)
}

function showElephantImage(event) {
  elephantHero.innerHTML = ''
  const currentElephant = stateElephants.elephants.find(elephant => elephant.name === event.target.innerText)
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const a = document.createElement('a')
  h2.innerText = currentElephant.name
  img.src = currentElephant.image
  a.innerText = `Click here to learn more`
  a.href = currentElephant.wikilink
  elephantHero.append(h2, img, a)
}

function sortElephantsByDOB() {
  const sortedElephants = stateElephants.elephants.sort((a, b) => b.dob - a.dob)
  stateElephants.elephants = sortedElephants
}

function displayAllElephants() {
  stateElephants.elephants.map(elephant => {
    const li = document.createElement('li')
    li.innerText = elephant.name
    elephantList.appendChild(li)
  })
}

async function fetchElephants() {
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants")
  return response.json()
}

function addElephantInfo() {
  addHowManyElephants()
  addElephantsByGender('male')
  addElephantsByGender('female')
}
function filterAllElephants() {
  filterByGender(stateElephants.elephants, 'male')
  filterByGender(stateElephants.elephants, 'female')
}

function filterByGender(elephants, sex) {
  if(sex === 'male') {
    const maleElephants = elephants.filter(elephant => elephant.sex === 'Male')
    updateState('male', maleElephants)
  } else if ( sex === 'female' ) {
    const femaleElephants = elephants.filter(elephant => elephant.sex === 'Female')
    updateState('female', femaleElephants)
  }
}

function addHowManyElephants() {
  const h2 = document.createElement('h2')
  h2.innerText = `There are ${stateElephants.elephants.length} Elephants`
  elephantInfo.appendChild(h2)
}


function addElephantsByGender(gender) {
  const h2 = document.createElement('h2')
  h2.innerText = `There are ${stateElephants[gender].length} ${gender} elephants`
  elephantInfo.appendChild(h2)
}

function updateState(key, value) {
  return stateElephants[key] = value
}
