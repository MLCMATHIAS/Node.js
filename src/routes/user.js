const express = require ("express");
const userSchema = require("../models/user");

const router = express.Router();


// create user /crear
router.post("/users", (req, res) => {
    //creamos un usuario con el schema,con los datos que estan llegando de la peticion:req.body
    const user = userSchema(req.body);
    user
      .save()//uso el metodo para guardar
      .then((data) => res.json(data))//y si sale todo bien me va a guardar los datos en mi base de datos.
      .catch((error) => res.json({ message: error }));//y si sale mal me a responder con un mensaje de error.
  });
  
  // get all users /buscar
  router.get("/users", (req, res) => {
    userSchema
      .find()//uso el metodo para buscar un usuario
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // get a user /buscar por id
  router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)//metodo para buscar por id
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // delete a user
  router.delete("/users/:id", (req, res) => {
    const { id } = req.params;//extraemos el id del parametro de la peticion
    userSchema
      .remove({ _id: id })//metodo para remover unn usuarui
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // update a user /actualizar un usuario.
  router.put("/users/:id", (req, res) => {
    const { id } = req.params;//extraemos el id del parametro de la peticion
    const { name, age, email } = req.body; //extraemos los datos que queremos actualizar del body.
    userSchema
    //metodo para actualizar un usuario.pasandole 2 objetos,uno para el objeto que vamos abuscar
    //otro para los usuarios que va a modificar.
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  

  

module.exports = router;




