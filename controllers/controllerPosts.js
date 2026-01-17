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