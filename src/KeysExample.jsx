import { useState } from "react";

export default function KeysExample() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  function addItem() {
    const newItem = prompt("Enter a new item");
    if (newItem) {
      setItems([newItem, ...items]);
    }
  }

  function removeItem(index) {
    const newItems = items.slice();
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return(
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map((item, index) => {
                return(
                    <li key={index} onClick={() => removeItem(index)}>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}
