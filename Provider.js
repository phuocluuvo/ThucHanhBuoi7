import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export default function ItemProvider({ children }) {
  const [todo, setTodo] = useState({ id: "", todo: "", images: "", title: "" });
  const [todos, setTodos] = useState([]);
  const [caft, setCaft] = useState([]);

  return (
    <ItemContext.Provider
      value={{ todo, setTodo, todos, setTodos, caft, setCaft }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export const useItemState = () => {
  return useContext(ItemContext);
};
