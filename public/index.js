const champSelect = document.querySelector('#champ-select')
const champList = document.querySelector('#champ-list')
const topChamp = document.querySelector('#top-champ')
const skinRelease = document.querySelector('#skin-release')
const skinForm = document.querySelector('#add-skin-form')
const champForm = document.querySelector('#add-champ-form')
const champName = document.querySelector('#champ-add')
const champRelease = document.querySelector('#champ-release')
const champSkins = document.querySelector('#skin-number')
const champBtn = document.querySelector('#add-champ-btn')
const skinBtn = document.querySelector('#add-skin-btn')
const exitSkin = document.querySelector('#exit-skin')
const exitChamp = document.querySelector('#exit-champ')
const skinFormDiv = document.querySelector('#add-skin-container')
const champFormDiv = document.querySelector('#add-champ-container')
const champPic = document.querySelector('#pic-link')

const getTopChamp = () => {
    axios.get('http://localhost:4014/topChamp')
    .then(res => {
        topChamp.innerHTML = `<div class="big-pic-border"></div>
        <img src= ${res.data[0].picture} id="big-pic">
        <h1 id="top-champ-text">${res.data[0].champ_name}</h1>`
    })
}

const getChampionList = () => {
    axios.get('http://localhost:4014/champions')
    .then(res => {
        champList.innerHTML = ''
        
        res.data.forEach(elem => {
            let date = elem.last_skin.split('-')
            if(date[1] === '01'){
                date.push(date[0])
                date.splice(0,3,'January')
                date = date.join(', ')
            }else if(date[1] === '02'){
                date.push(date[0])
                date.splice(0,3,'February')
                date = date.join(', ')
            }else if(date[1] === '03'){
                date.push(date[0])
                date.splice(0,3,'March')
                date = date.join(', ')
            }else if(date[1] === '04'){
                date.push(date[0])
                date.splice(0,3,'April')
                date = date.join(', ')
            }else if(date[1] === '05'){
                date.push(date[0])
                date.splice(0,3,'May')
                date = date.join(', ')
            }else if(date[1] === '06'){
                date.push(date[0])
                date.splice(0,3,'June')
                date = date.join(', ')
            }else if(date[1] === '07'){
                date.push(date[0])
                date.splice(0,3,'July')
                date = date.join(', ')
            }else if(date[1] === '08'){
                date.push(date[0])
                date.splice(0,3,'August')
                date = date.join(', ')
            }else if(date[1] === '09'){
                date.push(date[0])
                date.splice(0,3,'September')
                date = date.join(', ')
            }else if(date[1] === '10'){
                date.push(date[0])
                date.splice(0,3,'October')
                date = date.join(', ')
            }else if(date[1] === '11'){
                date.push(date[0])
                date.splice(0,3,'November')
                date = date.join(', ')
            }else if(date[1] === '12'){
                date.push(date[0])
                date.splice(0,3,'December')
                date = date.join(', ')
            }

            let champCard = `<div class="champ-list-item">
            <div class="border-box">
                <button class="delete" onclick ="deleteChamp(${elem['champion_id']})">x</button>
            </div>
            <div class= "img-container">
                        <img src=${elem.picture} class="list-picture">
                    </div>
            <div class="champ-card">
                    <div class="c-info">
                        <h2 class="release-date">${date}</h2>
                        <h2 class="champ-name">${elem.champ_name}</h2>
                        <h2 class="skin-count">Number of Skins (${elem.skin_count})</h2>
                </div>
                
                </div>
                `
            champList.innerHTML += champCard
        })
    })
}
const getChampionsDropdown = () => {
    axios.get('http://localhost:4014/championsDD')
        .then(res => {
            res.data.forEach(champions => {
                const option = document.createElement('option')
                option.setAttribute('value', champions['champion_id'])
                option.textContent = champions.champ_name
                champSelect.appendChild(option)
            })
        })
}

const handleSubmit = event => {
    event.preventDefault()
   

    if(skinRelease.value < 1){
        alert('Please enter a release date for this skin!')
        return
    }
    
    let body = {
        champId: champSelect.value,
        lastSkin: skinRelease.value
    }

    axios.put('http://localhost:4014/newSkin', body)
        .then(() => {
            champSelect.value = 1
            skinRelease.value = ''
            getChampionList()
            getTopChamp()
        })
        
}

const handleSubmit2 = event => {
    event.preventDefault()

    exitChamp.addEventListener('click', (event) =>{
        event.preventDefault()
        champFormDiv.setAttribute('hidden')
    })

    let newName = champName.value
    newName = newName.replaceAll("'", "")

    let body = {
        name: newName,
        date: champRelease.value,
        skins: champSkins.value,
        picture: champPic.value
    }

    axios.post('http://localhost:4014/newChamp', body)
        .then(() => {
            champName.value = ''
            champRelease.value = ''
            champSkins.value = 0
            champPic.value = ''
            getChampionList()
            getChampionsDropdown()
        })
}

const deleteChamp = (id) => {
    axios.delete(`http://localhost:4014/champions/${id}`)
        .then(() => {
            getChampionList() 
            getChampionsDropdown()
        })
        .catch(err => console.log(err))
}



getTopChamp()
getChampionsDropdown()
getChampionList()
skinForm.addEventListener('submit', handleSubmit)
champForm.addEventListener('submit', handleSubmit2)
champBtn.addEventListener('click', (event) => {
    event.preventDefault()
    champFormDiv.removeAttribute('hidden')

})
skinBtn.addEventListener('click', (event) => {
    event.preventDefault()
    skinFormDiv.removeAttribute('hidden')
})
exitSkin.addEventListener('click', (event) =>{
    event.preventDefault()
    skinFormDiv.hidden = true
})
exitChamp.addEventListener('click', (event) =>{
    event.preventDefault()
    champFormDiv.hidden = true
})