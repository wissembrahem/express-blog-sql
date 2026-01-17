import express from "express";
import routerPosts from "./routers/posts.js"



const app = express();
const port = 3132;
app.use(express.static("public"));
app.use(express.json());

app.use("/posts",routerPosts)





app.listen(port, () => {
    console.log(`${port}`)
})