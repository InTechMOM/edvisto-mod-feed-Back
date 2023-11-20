import express from "express"; 
const assignmentRouter = express.Router();

import projectStudent from "../controllers/get.js"

//Listar todos las tareas
assignmentRouter.get("/projects", projectStudent); 

export default assignmentRouter;