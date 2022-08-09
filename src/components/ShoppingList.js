import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterType, setFilter] = useState("All")

  function handleFilter(e) {
    setFilter(e.target.value)
  }

  const filteredItems = items.filter(item => {
    if (filterType === "All")
    {
      return true
    }

    return (item.category === filterType)
    
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
