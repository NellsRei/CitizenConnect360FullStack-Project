import express, { json } from "express"
import authRouter from "./Routes/authRoutes"
import postRouter from "./Routes/postRoutes"
import userRouter from "./Routes/userRoutes"
import pollRouter from "./Routes/pollRoutes"
import IncidentRouter from "./Routes/incidentRoutes"
import cors from "cors"


const app = express()

app.use(json())
app.use(cors())

app.use("/user", authRouter)
app.use("/posts", postRouter)
app.use("/users", userRouter)
app.use("/polls", pollRouter)
app.use("/incident", IncidentRouter)



//port
app.listen(3100, ()=>{
    console.log('Citizen Connect Server Running....');
    
})