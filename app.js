import express from "express";
import playersRouter from "./routers/players.js"
import connection from "./configureConnection/connectionDatabase.js"


const app = express();
const port = 3132;
app.use(express.static("public"));
app.use(express.json());

app.get("/posts", (req, res) => {
    const query = "SELECT * FROM `posts`";
    
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    })
});


//app.get("/", (req, res) => {
    //console.log("Rotta /");//
    //res.send("test")//
//})//
//app.use("/players",playersRouter)//


app.listen(port, () => {
    console.log(`${port}`)
})