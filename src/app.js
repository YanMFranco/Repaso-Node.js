const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./routes/usersRoute");
const postsRouter = require("./routes/postsRoute");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/users", usersRouter);
server.use("/post", postsRouter);

server.get("/",(req,res)=>{
    res.send("Hello World");
})

module.exports=server;