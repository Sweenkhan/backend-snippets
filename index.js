import express  from "express"
import cors from "cors";
import connection from "./db/connection.js";  
import universityRoutes from "./muler_setup/universityRoutes.js";

const app = express();
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'));

app.use(cors({ origin: "http://localhost:3000" })); 

app.use(universityRoutes)

connection
.then(() => {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
     })
})
 
