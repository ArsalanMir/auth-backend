import express from 'express';
import AuthRouter from "./routes/auth.route.js"
const app = express();
const PORT = 3000;

app.use(express.json());// middleware

app.get('/',(req, res)=>{
  res.send("server is working")

});
app.use("/auth",AuthRouter)

app.listen(PORT,()=>{
    console.log(`server is running on this.. ${PORT}`)
});