import fastify from "fastify";
import { appRoutes } from "./routes";
import cors from "@fastify/cors"

const app = fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then( () => {
    console.log("rodando em http://localhost:3333");
})