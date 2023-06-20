/* eslint-disable react/prop-types */
const ShoppingListItem = ({ item, onDeleteItem, onUpdateItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
        className="mr-2 p-2 accent-yellow-600"
      />
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>

      <button
        className="font-bold text-2xl text-red-600 ml-2"
        onClick={() => onDeleteItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
};

export default ShoppingListItem;
