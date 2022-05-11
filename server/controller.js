require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getChampionsDropdown: (req, res) => {
        sequelize.query(`SELECT * FROM champions ORDER BY champ_name ASC;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    getChampionList: (req, res) => {
        sequelize.query(`SELECT * FROM champions ORDER BY last_skin ASC;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    getTopChamp: (req, res) => {
        sequelize.query(`SELECT * FROM champions ORDER BY last_skin ASC;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    addNewSkin: (req, res) => {
        const {champId, lastSkin} = req.body
       
        sequelize.query(`UPDATE champions
        SET last_skin = '${lastSkin}'
        WHERE champion_id = ${champId};
        
        UPDATE champions
        SET skin_count = skin_count + 1
        WHERE champion_id = ${champId};
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    addNewChamp: (req, res) => {
        const {name, date, skins, picture} = req.body

        sequelize.query(`INSERT INTO champions (champ_name, last_skin, skin_count, picture)
            VALUES ('${name}', '${date}', ${skins}, '${picture}')
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    deleteChampion: (req, res) => {
        const {id} = req.params

        sequelize.query(`
            DELETE
            FROM champions
            WHERE champion_id = ${id};
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
    }
}