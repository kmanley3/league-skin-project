require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getChampionsDropdown, getChampionList, getTopChamp, addNewSkin, addNewChamp, deleteChampion} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)
app.get('/championsDD', getChampionsDropdown)
app.get('/champions', getChampionList)
app.get('/topChamp', getTopChamp)
app.put('/newSkin', addNewSkin)
app.post('/newChamp', addNewChamp)
app.delete('/champions/:id', deleteChampion)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))