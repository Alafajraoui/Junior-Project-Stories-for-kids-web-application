const express = require("express");
const db = require("../database/database-mongo");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/books",  async (req, res) => {
 try {
  const data= await db.selectAll()
res.status(201).send(data)  
 } catch (error) {
  console.log(error);
  res.status(500).send(error)
 }
});

app.post("/api/books", async(req,res)=>{
  try { const {Name,description,ImageUrl,categorie,PageUrl}= req.body
    const result= await db.CreateBook({Name,description,ImageUrl,categorie,PageUrl})
    res.status(201).send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
})

app.delete("/api/books/:id", async(req,res)=>{
  try { const id = req.params.id;
    const result= await db.deleteBook(id);
 if(!result){
  res.status(404).send({message:"book not found"})
 }else {
  res.status(201).send(result)
 }
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
})

app.get("/api/books/:Name", async(req,res)=>{
  try {
    const name=req.params.Name
    const result= await db.selectOne(name)
    console.log(result,"kjhjk")
    res.status(201).send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
    
  }
})

app.put("/api/books/:id",async(req,res)=>{
  try {
    const id=req.params.id
    const {Name,description,ImageUrl,categorie,PageUrl}=req.body;
    const result=await db.UpdateOne(id,{Name,description,ImageUrl,categorie,PageUrl});
    console.log(result,"hello");
    res.status(201).send(result)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
