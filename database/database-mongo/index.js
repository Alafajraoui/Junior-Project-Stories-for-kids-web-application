const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/StoryTime";
mongoose.set('strictQuery', false)

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB Database connected')
  })
  .catch((err) => console.log(err))


const itemSchema = new mongoose.Schema({
Name:String,
description:String,
ImageUrl:String,
categorie:{
  type:String,
  enum:["for kids under 10", "for kids between 10 and 18" , " for kids +18"]
},
PageUrl:String
});

const Item = mongoose.model("Item", itemSchema);

const selectAll = () => {
return Item.find();
}

const CreateBook=(book)=>{
  return Item.insertMany(book)
}

const deleteBook =(id)=>{
return Item.findByIdAndDelete(id)
}

const selectOne=(name)=>{
return Item.find({Name:name})
}

const UpdateOne=(id,data)=>{
return Item.findByIdAndUpdate(id,data,{returnDocument:"after"})
}

module.exports = {
  selectAll,
  CreateBook,
  deleteBook,
  selectOne,
  UpdateOne
};