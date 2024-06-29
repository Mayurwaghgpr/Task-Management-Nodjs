import express from "express"
import fs from "fs"
import path from "path"
import cors from "cors"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// console.log(__dirname,'/database/','Task.json')
const app = express()
const port = 4000

app.use(cors({ origin: "*", methods: 'GET, POST, PUT, PATCH, DELETE' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/Tasks', (req, res, next) => {
    fs.readFile(path.join(__dirname, 'database', 'Task.json'), 'utf8', (err, data) => {
        if (err) {
              res.status(500).send(err)
        } else {
           res.send(data)
        }
   
    })

      

})

app.listen(port, () => {
    console.log("listening on port:",port)
})
