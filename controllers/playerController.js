import connection from "../configureConnection/connectionDatabase.js";
import asromaPlayers from "../data.js";


export const index = (req, res) => {

    const query = "SELECT * FROM `posts`";
    connection.query(query, (err, result) => {
        if (err) {
            res.status(500)
            return
        }
        res.json({
            results: result,
        });
    })

    /*   res.json({
          count: asromaPlayers.length,
          result : asromaPlayers
      }); */
}

export const show = (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM posts WHERE id = ?"
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500)
            return
        } if (result.length === 0) {
            res.status(404).json({error: "page not found" })
        res.json (result[0]);}
    })


    /*  const id = parseInt(req.params.id);
     const player = asromaPlayers.find(p => p.id === id);
     res.json(player); */
}

export const destroy = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM posts WHERE id = ?"
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500)
            return
        } if (result.length === 0) {
            res.status(204).json({error: "page not found" })
        res.json (result[0]);}
    })
    /* const id = parseInt(req.params.id);

    const index = asromaPlayers.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error:"Players not found"});
    }
    asromaPlayers.splice(index, 1);
    console.log(asromaPlayers);

    res.status(204).send(); */
}

export const store = (req, res) => {
    const newPlayer = req.body;

    const lastId = asromaPlayers.length
        ? asromaPlayers[asromaPlayers.length - 1].id
        : 0;
    newPlayer.id = lastId + 1;
    asromaPlayers.push(newPlayer);
    res.status(201).json(newPlayer);
};