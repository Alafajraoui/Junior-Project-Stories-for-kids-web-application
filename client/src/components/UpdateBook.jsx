import React from "react";

const UpdateBook=(props)=>{
console.log(props,"helloo");
const [Name, setName] = useState(props.book.Name);
const [description, setDescription] = useState(props.book.description);
const [ImageUrl, setImageUrl] = useState(props.book.ImageUrl);
const [categorie, setCategorie] = useState(props.book.categorie);
const [PageUrl, setPageUrl] = useState(props.book.PageUrl);

    return (
        <div>
      <input type="text" value={Name}></input>

        </div>
    )

}

export default UpdateBook;