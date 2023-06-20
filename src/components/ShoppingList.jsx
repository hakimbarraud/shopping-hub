/* eslint-disable react/prop-types */
import ShoppingListItem from "./ShoppingListItem";
/*
const items = [
  { id: 1, quantity: 1, description: "milk", packed: false },
  { id: 2, quantity: 7, description: "sugar", packed: false },
  { id: 3, quantity: 8, description: "banana", packed: false },
  { id: 4, quantity: 9, description: "rice", packed: false },
  { id: 5, quantity: 13, description: "pasta", packed: false },
];
*/
const ShoppingList = ({ items, onDeleteItem, onUpdateItem }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 p-10 h-96 gap-6 text-center max-w-2xl mx-auto">
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;
