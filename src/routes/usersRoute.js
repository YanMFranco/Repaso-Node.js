const {Router, json} = require("express");
const {getUsers,getUsersByName,getUsersById,createUser,deleteUser,updateUser } = require("../models/controllers");

const usersRouter = Router();

usersRouter.get("/", (req,res) => {
    const {name} = req.query;
    if(name){
        const users = getUsersByName(name);
        if(users["error"]) return res.status(400).json(users);
        else return res.status(200).json(users);
    }else{
        const users = getUsers();
        return res.status(200).json(users);
    }
});

usersRouter.post("/",(req,res)=>{
    const {name,surname, mail, age} = req.body;
    if(!name || !surname || !mail || !age) 
        return res.status(400).json({error: "missing info"})

    const newUser = createUser(name, surname,mail,age);
    res.status(200).json(newUser);
});

usersRouter.get("/:id", (req,res)=>{
    const {id} = req.params;
    const user = getUsersById(id);
    if (user["error"]) return res.status(400).json(user);
    else res.status(200).json(user);
});

usersRouter.put("/", (req,res)=>{
    const {id,name,surname,age,mail} = req.body;
    if(!id || !name || !surname || !mail || !age) return res.status(400).json({error: "missing info"});

    const updateUsers = updateUser(id,name,surname,age,mail);

    if (updateUsers["error"]) return res.status(400).json(updateUsers);
    else res.status(200).send(updateUsers);
});

usersRouter.delete("/:id",(req,res)=>{
    const {id} = req.params;
    const eliminar = deleteUser(id);
    if(eliminar["error"]) return res.status(400),json(eliminar);
    else res.status(200).json(eliminar);
});

module.exports = usersRouter;