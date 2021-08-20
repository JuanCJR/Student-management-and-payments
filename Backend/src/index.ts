import "reflect-metadata"


import express from "express"
import morgan from "morgan"
import cors from "cors"
import { createConnection, } from "typeorm"

import userRoutes from "./routes/user.routes"
import seccionRoutes from "./routes/seccion.route"
import gradosRoutes from "./routes/grados.routes"
import materiasRoutes from "./routes/materias.route"

const app = express()
createConnection();

app.listen(4000);
console.log("server on port", 4000)

//Midelwares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use(userRoutes);
app.use(seccionRoutes);
app.use(gradosRoutes);
app.use(materiasRoutes)
