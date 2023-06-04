import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {
  
  const [newCategory, setNewCategory] = useState("Produce");
  const [newName, setNewName] = useState("");

  function handleNameChange(event){
    setNewName(event.target.value);
  }
  function handleCategoryChange(event) {
    setNewCategory(event.target.value);
  }
  function AddToList(event){
    event.preventDefault();
    const NewItem = {
      id: uuid(), 
      name: newName,
      category: newCategory
    };
    onItemFormSubmit(NewItem);
  }

  return (
    <form className="NewItem" onSubmit={AddToList}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
