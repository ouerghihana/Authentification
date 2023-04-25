const express = require('express')
const app = express()

const port =3000
// Importation du middleware CORS
const cors =require('cors')
const connectdb=require('./config/connectdb')
// Importation du module pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config()
const userRoute = require('./routes/userRoute')

app.use(cors())
app.use(express.json())

//Appel a la connexion db 
connectdb()

//Path de lauthentification
app.use('/auth',userRoute)









app.listen(port, err=>{
    err?console.log (err):console.log ( `go to ${port}`)
})
