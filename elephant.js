const elephantInfo = document.querySelector('.elephant-info')
const elephantList = document.querySelector('.elephant-list')
let stateElephants = {}

fetchElephants()
  .then(setElephants)
  .then(addHowManyElephants)
  .then(() => getMaleElephants(stateElephants.elephants))
  .then(addMaleElephants)
  .then(() => getFemaleElephants(stateElephants.elephants))
  .then(addFemaleElephants)
  .then(sortElephantsByDOB)
  .then(displayAllElephants)
  .then(() => elephantList.addEventListener('click', showElephantImage))

function showElephantImage(event) {
  const currentElephant = stateElephants.elephants.find(elephant => elephant.name === event.target.innerText)
  const img = document.createElement('img')
  img.src = currentElephant.image
  event.target.appendChild(img)
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

function setElephants(elephants) {
  return stateElephants = {elephants}
}

function addHowManyElephants() {
  const h2 = document.createElement('h2')
  h2.innerText = `There are ${stateElephants.elephants.length} Elephants`
  elephantInfo.appendChild(h2)
}

function getMaleElephants(elephants) {
  const maleElephants = elephants.filter(elephant => {
    return elephant.sex === 'Male'
  })
  updateState(maleElephants)
}

function getFemaleElephants(elephants) {
  const femaleElephants = elephants.filter(elephant => {
    return elephant.sex === 'Female'
  })
  updateState(femaleElephants)
}

function addMaleElephants() {
  const h2 = document.createElement('h2')
  h2.innerText = `There are ${stateElephants.elephantArray.length} Male Elephants`
  elephantInfo.appendChild(h2)
}

function addFemaleElephants(elephants) {
  const h2 = document.createElement('h2')
  h2.innerText = `There are ${stateElephants.elephantArray.length} female Elephants`
  elephantInfo.appendChild(h2)
}

function updateState(keyValue) {
  return stateElephants = {
    ...stateElephants,
    elephantArray: keyValue 
  }
}
