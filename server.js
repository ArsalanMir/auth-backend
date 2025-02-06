import express from 'express'
const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
  res.send("server is working")

});

app.listen(PORT,()=>{
    console.log(`server is running on this.. ${PORT}`)
})