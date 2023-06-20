/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
const arr = [1, 2, 3, 4, 5];

const Form = ({ onAddItem, onClearList }) => {
  const [formData, setFormData] = useState({ quantity: 1, description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description) return;

    const newItem = {
      id: Date.now(),
      quantity: formData.quantity,
      description: formData.description,
      packed: false,
    };

    onAddItem(newItem);

    setFormData({ quantity: 1, description: "" });
  };

  return (
    <form
      className="flex flex-col items-center gap-y-4 p-10 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <label className="font-semibold text-lg">
        De quoi as-tu besoin pour tes courses ? 🍉
      </label>
      <div>
        <select
          className="border-yellow-400 border-2 px-4 rounded-full outline-none mr-2"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: e.target.value })
          }
        >
          {arr.map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="pâtes, riz, tomates..."
          value={formData.description}
          className="border-yellow-400 border-2 px-4 rounded-full outline-none"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <Button label="Add" bgColor="bg-yellow-400" />
      <Button
        label="Effacer la liste"
        bgColor="outline"
        onClick={onClearList}
      />
    </form>
  );
};

export default Form;
