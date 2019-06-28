import express from 'express'
import routes from './src/routes/downloadRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
 
const app = express()
const PORT = 5000
const dbURI = "mongodb://localhost:27017/db_name"
 
mongoose.Promise = global.Promise;

mongoose.connect(dbURI, { useNewUrlParser: true })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)

app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})