import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import Stats from "./components/Stats";
import ShoppingListEmpty from "./components/ShoppingListEmpty";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <>
      <Header />
      <Form onAddItem={handleAddItem} onClearList={handleClearList} />
      {items.length > 0 ? (
        <ShoppingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onUpdateItem={handleUpdateItem}
        />
      ) : (
        <ShoppingListEmpty />
      )}
      {items.length >= 1 && <Stats items={items} />}
    </>
  );
}

export default App;
