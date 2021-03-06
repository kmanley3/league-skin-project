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
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE champions; 

            CREATE TABLE champions (
                champion_id SERIAL PRIMARY KEY,
                champ_name VARCHAR(20),
                last_skin DATE,
                skin_count INT,
                picture VARCHAR(255)
            );


INSERT INTO champions (champ_name, last_skin, skin_count, picture)
VALUES ('Aatrox', '2022-04-28', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/cc/AatroxSquare.png'), 
('Ahri', '2022-04-14', 15, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/18/AhriSquare.png'), 
('Akali', '2021-08-26', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a5/AkaliSquare.png'),
('Akshan', '2022-02-10', 2, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3b/AkshanSquare.png'),
('Alistar', '2021-02-04', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/34/AlistarSquare.png'),
('Amumu', '2022-01-26', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/26/AmumuSquare.png'),
('Anivia', '2021-09-02', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/01/AniviaSquare.png'),
('Annie', '2021-12-02', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6f/AnnieSquare.png'),
('Aphelios', '2022-05-05', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/13/ApheliosSquare.png'),
('Ashe', '2021-08-12', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4a/AsheSquare.png'),
('Aurelion Sol', '2020-10-01', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Aurelion_SolSquare.png'),
('Azir', '2020-12-10', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f7/AzirSquare.png'),
('Bard', '2021-12-02', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/69/BardSquare.png'),
('Blitzcrank', '2021-11-16', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/BlitzcrankSquare.png'),
('Brand', '2021-12-09', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ab/BrandSquare.png'),
('Braum', '2021-06-09', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b6/BraumSquare.png'),
('Caitlyn', '2021-11-22', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e6/CaitlynSquare.png'),
('Camille', '2021-05-13', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/13/CamilleSquare.png'),
('Cassiopeia', '2021-08-12', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/ca/CassiopeiaSquare.png'),
('ChoGath', '2021-01-28', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ae/Cho%27GathSquare.png'),
('Corki', '2021-07-01', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/CorkiSquare.png'),
('Darius', '2021-08-26', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/54/DariusSquare.png'),
('Diana', '2022-01-26', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/90/DianaSquare.png'),
('Dr. Mundo', '2018-12-06', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/35/Dr._MundoSquare.png'),
('Draven', '2021-12-09', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d7/DravenSquare.png'),
('Ekko', '2022-02-17', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ef/EkkoSquare.png'),
('Elise', '2022-02-10', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/91/EliseSquare.png'),
('Evelynn', '2021-08-12', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/EvelynnSquare.png'),
('Ezreal', '2022-01-26', 16, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/EzrealSquare.png'),
('Fiddlesticks', '2018-11-08', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7c/FiddlesticksSquare.png'),
('Fiora', '2021-10-07', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d2/FioraSquare.png'),
('Fizz', '2020-10-22', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/db/FizzSquare.png'),
('Galio', '2021-04-15', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fe/GangplankSquare.png'),
('Gangplank', '2022-05-05', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fe/GangplankSquare.png'),
('Garen', '2021-03-18', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ea/GarenSquare.png'),
('Gnar', '2022-01-06', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6b/GnarSquare.png'),
('Gragas', '2021-01-07', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/67/GragasSquare.png'),
('Graves', '2022-05-05', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/26/GravesSquare.png'),
('Gwen', '2021-12-02', 2, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/df/GwenSquare.png'),
('Hecarim', '2022-04-14', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4c/HecarimSquare.png'),
('Heimerdinger', '2022-03-03', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/55/HeimerdingerSquare_Unreleased.png'),
('Illaoi', '2020-11-24', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a7/IllaoiSquare.png'),
('Irelia', '2021-07-08', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/72/IreliaSquare.png'),
('Ivern', '2020-12-10', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9d/IvernSquare.png'),
('Janna', '2022-02-10', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3f/JannaSquare.png'),
('Jarvan IV', '2021-09-23', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6c/Jarvan_IVSquare.png'),
('Jax', '2021-04-29', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/0f/JaxSquare.png'),
('Jayce', '2021-11-08', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/aa/JayceSquare.png'),
('Jhin', '2021-04-29', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/JhinSquare.png'),
('Jinx', '2022-03-31', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e2/JinxSquare.png'),
('KaiSa', '2021-10-21', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/49/Kai%27SaSquare.png'),
('Kalista', '2021-01-07', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/aa/KalistaSquare.png'),
('Karma', '2021-10-21', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4f/KarmaSquare.png'),
('Karthus', '2021-09-09', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e1/KarthusSquare.png'),
('Kassadin', '2022-02-17', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/57/KassadinSquare.png'),
('Katarina', '2022-05-05', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ae/KatarinaSquare.png'),
('Kayle', '2022-04-28', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/bd/KayleSquare.png'),
('Kayn', '2021-09-23', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/37/KaynSquare.png'),
('Kennen', '2021-04-29', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/69/KennenSquare.png'),
('KhaZix', '2020-11-15', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/14/Kha%27ZixSquare.png'),
('Kindred', '2022-01-26', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6e/KindredSquare.png'),
('Kled', '2021-01-07', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ef/KledSquare.png'),
('KogMaw', '2021-03-04', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/45/Kog%27MawSquare.png'),
('LeBlanc', '2021-12-09', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f1/LeBlancSquare.png'),
('Lee Sin', '2020-10-01', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4f/Lee_SinSquare.png'),
('Leona', '2022-05-05', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/54/LeonaSquare.png'),
('Lillia', '2021-09-23', 2, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/49/LilliaSquare.png'),
('Lissandra', '2022-01-26', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/36/LissandraSquare.png'),
('Lucian', '2021-05-13', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1e/LucianSquare.png'),
('Lulu', '2021-04-01', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/91/LuluSquare.png'),
('Lux', '2022-01-26', 16, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/01/LuxSquare.png'),
('Malphite', '2021-08-12', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6f/MalphiteSquare.png'),
('Malzahar', '2021-12-09', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a7/MalzaharSquare.png'),
('Maokai', '2021-12-09', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/64/MaokaiSquare.png'),
('Master Yi', '2021-12-09', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b2/Master_YiSquare.png'),
('Miss Fortune', '2022-03-31', 16, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9d/MissFortuneSquare.png'),
('Mordekaiser', '2022-05-05', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4d/MordekaiserSquare.png'),
('Morgana', '2021-10-06', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d8/MorganaSquare.png'),
('Nami', '2021-10-07', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d2/NamiSquare.png'),
('Nasus', '2021-04-01', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/58/NasusSquare.png'),
('Nautilus', '2021-01-28', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b5/NautilusSquare.png'),
('Neeko', '2021-01-28', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/88/NeekoSquare.png'),
('Nidalee', '2021-04-29', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7c/NidaleeSquare.png'),
('Nocturne', '2020-06-11', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/65/NocturneSquare.png'),
('Nunu & Willump', '2022-03-03', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/be/Nunu_%26_WillumpSquare.png'),
('Olaf', '2021-09-09', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2b/OlafSquare.png'),
('Orianna', '2022-03-03', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b0/OriannaSquare.png'),
('Ornn', '2020-12-10', 2, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/31/OrnnSquare.png'),
('Pantheon', '2021-07-08', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9b/PantheonSquare.png'),
('Poppy', '2021-10-20', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e3/PoppySquare.png'),
('Pyke', '2022-03-31', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/83/PykeSquare.png'),
('Qiyana', '2022-02-17', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/ca/QiyanaSquare.png'),
('Quinn', '2021-01-07', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7c/QuinnSquare.png'),
('Rakan', '2022-04-14', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/RakanSquare.png'),
('Rammus', '2021-07-01', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7c/RammusSquare.png'),
('RekSai', '2022-01-06', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3e/Rek%27SaiSquare.png'),
('Rell', '2020-12-10', 1, 'https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Rell_OriginalSquare.png/'),
('Renata Glasc', '2022-02-17', 1, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c2/Renata_GlascSquare.png'),
('Renekton', '2021-05-27', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fc/RenektonSquare.png'),
('Rengar', '2021-07-22', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f1/RengarSquare.png'),
('Riven', '2022-03-31', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/46/RivenSquare.png'),
('Rumble', '2021-04-01', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/13/RumbleSquare.png'),
('Ryze', '2022-04-14', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/28/RyzeSquare.png'),
('Samira', '2021-04-01', 2, 'https://static.u.gg/assets/lol/riot_static/12.8.1/img/champion/Samira.png'),
('Sejuani', '2022-04-28', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/93/SejuaniSquare.png'),
('Senna', '2022-04-20', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/21/SennaSquare.png'),
('Seraphine', '2021-09-20', 4, 'https://static.u.gg/assets/lol/riot_static/12.8.1/img/champion/Seraphine.png'),
('Sett', '2022-01-26', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/19/SettSquare.png'),
('Shaco', '2021-08-26', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/93/ShacoSquare.png'),
('Shen', '2021-08-26', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d3/ShenSquare.png'),
('Shyvana', '2021-01-21', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f6/ShyvanaSquare.png'),
('Singed', '2020-11-12', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/96/SingedSquare.png'),
('Sion', '2021-04-15', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/61/SionSquare.png'),
('Sivir', '2022-04-28', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e1/SivirSquare.png'),
('Skarner', '2020-11-24', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/80/SkarnerSquare.png'),
('Sona', '2021-09-09', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/56/SonaSquare.png'),
('Soraka', '2021-12-02', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8d/SorakaSquare.png'),
('Swain', '2021-02-11', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8c/SwainSquare.png'),
('Sylas', '2022-03-31', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/eb/SylasSquare.png'),
('Syndra', '2021-01-07', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/65/SyndraSquare.png'),
('Tahm Kench', '2021-05-13', 4, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/03/Tahm_KenchSquare.png'),
('Taliyah', '2020-07-02', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2d/TaliyahSquare.png'),
('Talon', '2022-05-05', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f9/TalonSquare.png'),
('Taric', '2020-03-19', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c4/TaricSquare.png'),
('Teemo', '2022-01-26', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/04/TeemoSquare.png'),
('Thresh', '2021-10-19', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7b/ThreshSquare.png'),
('Tristana', '2022-01-26', 13, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/06/TristanaSquare.png'),
('Trundle', '2020-01-30', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c4/TrundleSquare.png'),
('Tryndamere', '2021-09-23', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5f/TryndamereSquare.png'),
('Twisted Fate', '2021-08-26', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fb/Twisted_FateSquare.png'),
('Twitch', '2021-04-15', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/79/TwitchSquare.png'),
('Udyr', '2019-08-15', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d1/UdyrSquare.png'),
('Urgot', '2020-04-01', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/88/UrgotSquare.png'),
('Varus', '2022-05-05', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c2/VarusSquare.png'),
('Vayne', '2022-03-31', 14, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/95/VayneSquare.png'),
('Veigar', '2021-07-01', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8f/VeigarSquare.png'),
('VelKoz', '2021-04-15', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/05/Vel%27KozSquare.png'),
('Vex', '2021-09-23', 1, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ef/VexSquare.png'),
('Vi', '2021-11-15', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c0/ViSquare.png'),
('Viego', '2022-05-05', 3, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/ViegoSquare.png'),
('Viktor', '2020-09-17', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a3/ViktorSquare.png'),
('Vladimir', '2021-12-02', 11, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/75/VladimirSquare.png'),
('Volibear', '2021-10-21', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f9/VolibearSquare.png'),
('Warwick', '2021-08-12', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/42/WarwickSquare.png'),
('Wukong', '2021-03-18', 7, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6d/WukongSquare.png'),
('Xayah', '2022-04-14', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b5/XayahSquare.png'),
('Xerath', '2021-05-13', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/XerathSquare.png'),
('Xin Zhao', '2022-01-26', 10, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/63/Xin_ZhaoSquare.png'),
('Yasuo', '2022-05-05', 12, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c0/YasuoSquare.png'),
('Yone', '2021-09-23', 3, 'https://static.wikia.nocookie.net/leagueoflegends/images/a/a6/Yone_OriginalSquare.png/'),
('Yorick', '2020-11-12', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d8/YorickSquare.png'),
('Yuumi', '2022-05-05', 5, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/70/YuumiSquare.png'),
('Zac', '2020-11-12', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/81/ZacSquare.png'),
('Zed', '2021-12-09', 9, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/bb/ZedSquare.png'),
('Zeri', '2022-01-20', 1, 'https://static.wikia.nocookie.net/leagueoflegends/images/7/7d/Zeri_OriginalSquare.png'),
('Ziggs', '2022-03-03', 10, 'https://esportspedia-lol.s3.amazonaws.com/5/55/ZiggsSquare.png'),
('Zilean', '2019-12-17', 6, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ac/ZileanSquare.png'),
('Zoe', '2022-05-05', 6, 'https://static.wikia.nocookie.net/leagueoflegends/images/2/2c/Zoe_OriginalSquare.png'),
('Zyra', '2021-08-26', 8, 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1a/ZyraSquare.png');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}


// INSERT INTO skins (champ_id, skin_name, date_released)
//             VALUES (1, 'Blood Moon Aatrox', 2019-01-10),
//             (1, 'Justicar Aatrox', 2013-06-12),
//             (1, 'Lunar Eclipse Aatrox', 2022-04-28),
//             (1, 'Mecha Aatrox', 2014-07-23),
//             (1, 'Odyssey Aatrox', 2020-10-15),
//             (1, 'Prestige Blood Moon Aatrox', 2019-01-0),
//             (1, 'Sea Hunter Aatrox', 2015-07-22),
//             (1, 'Victorious Aatrox', 2019-11-21),
//             (2, 'Academy Ahri', 2015-08-26),
//             (2, 'Arcade Ahri', 2016-08-24),
//             (2, 'Arcana Ahri', 2022-04-14),
//             (2, 'Challenger Ahri', 2015-01-15),
//             (2, 'Coven Ahri', 2021-08-12),
//             (2, 'Dynasty Ahri', 2011-12-14),
//             (2, 'Elderwood Ahri', 2019-08-29),
//             (3, 'Crime City Nightmare Akali', 2021-08-26),
//             (4, 'Crystal Rose Akshan', 2022-02-10),
//             (5, 'Lunar Beast Alistar', 2021-02-04),
//             (6, 'Porcelain Amumu', 2022-01-26),
//             (7, 'Divine Phoenix Anivia', 2021-09-02),
//             (8, 'Cafe Cuties Annie', 2021-12-02),
//             (9, 'EDG Aphelios', 2022-05-05),
//             (10, 'Coven Ashe', 2021-08-12),
//             (11, 'Storm Dragon Aurelion Sol', 2020-10-01),
//             (12, 'Elderwood Azir', 2020-12-10),
//             (13, 'Cafe Cuties Bard', 2021-12-02),
//             (14, 'Victorious Blitzcrank', 2021-11-16),
//             (15, 'Prestige Debonair Brand', 2021-12-09),
//             (16, 'Pool Party Braum', 2021-06-09),
//             (17, 'Arcane Caitlyn', 2021-11-22),
//             (18, 'Arcana Camille', 2021-05-13),
//             (19, 'Coven Cassiopeia', 2021-08-12),
//             (20, "Shan Hai Scrolls Cho'Gath", 2021-01-28),
//             (21, 'Astronaut Corki', 2021-07-01),
//             (22, 'Crime City Nightmare Darius', 2021-08-26),
//             (23, 'Firecracker Diana', 2022-01-26),
//             (24, 'Frozen Prince Mundo', 2018-12-06),
//             (25, 'Debonair Draven', 2021-12-09),
//             (26, 'Firelight Ekko', 2022-02-17),
//             (27, 'Withered Rose Elise', 2022-02-10),
//             (28, 'Coven Evelynn', 2021-08-12),
//             (29, 'Porcelain Protector Ezreal', 2022-01-26),
//             (30, 'Praetorian Fiddlesticks', 2018-11-08),
//             (31, 'Betwitching Fiora', 2021-10-07),
//             (32, 'Little Devil Fizz', 2020-10-22),
//             (33, 'Dragon Guardian Galio', 2021-04-15),
//             (34, 'Gangplank the Betrayer', 2022-05-05),
//             (35, 'Battle Academia Garen', 2021-03-18),
//             (36, 'Elderwood Gnar', 2022-01-06),
//             (37, 'Warden Gragas', 2021-01-07),
//             (38, 'EDG Graves', 2022-05-05),
//             (39, 'Cafe Cuties Gwen', 2021-12-02),
//             (40, 'Arcana Hecarim', 2022-04-14),
//             (41, 'Heimerstinger', 2022-03-03),
//             (42, 'Cosmic Invoker Illaoi', 2020-11-24),
//             (43, 'Sentinel Irelia', 2021-07-08),
//             (44, 'Old God Ivern', 2020-12-10),
//             (45, 'Crystal Rose Janna', 2022-02-10),
//             (46, 'Worlds 2021 Jarvan IV', 2021-09-23),
//             (47, 'Prestige Conquerer Jax', 2021-04-29),
//             (48, 'Arcane Jayce', 2021-11-08),
//             (49, 'DWG Jhin', 2021-04-29),
//             (50, 'Prestige Battle Cat Jinx', 2022-03-31),
//             (51, "Lagoon Dragon Kai'Sa", 2021-10-21),
//             (52, "Marauder Kalista", 2021-01-07),
//             (53, 'Tranquility Dragon Karma', 2021-10-21),
//             (54, 'Pentakill III: Lost Chapter Karthus', 2021-09-09),
//             (55, 'Shockblade Kassadin', 2022-02-17),
//             (56, 'High Noon Katarina', )