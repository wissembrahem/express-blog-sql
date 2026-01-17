import connection from "../data/connectionDatabase.js"




/* index */
function index (req, res) {
    const query = "SELECT * FROM posts "
    connection.query(query ,(err, result) => {
        if (err) {
            res.status(500)
          return res.json({
                error: "Error Server"})} 
       
              res.json ({
                result: result
              })  
})}


/* show */
function show (req, res) {
    const id = req.params.id
    const query = "SELECT * FROM posts WHERE id = ?"
    connection.query(query ,[id], (err, result) => {
        if (err) {
          res.status(500)
            return res.json (err)
        } if (result.length === 0) {
             res.status(404)
            return res.json ({
                error: "RISORSA NON TROVATA"
            })
        } res.json ({
            result: result
        })
    })
  
}



/* destroy */

function destroy (req, res) {
  
}


const controller = {
    index,
    show,
    destroy
}

export default controller