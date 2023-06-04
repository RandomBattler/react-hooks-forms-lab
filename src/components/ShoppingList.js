import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [itemList, setItemList] = useState(items);
  
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function onSearchChange(text){
    setSearchText(text);
  }

  function onItemFormSubmit(item)
  {
    setItemList([...itemList, item]);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if ((item.name.toLowerCase()).includes(searchText.toLowerCase()) === false)
      return false;

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
