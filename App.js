import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Todo from "./components/ToDo";
import AddToDo from "./components/AddToDo";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: "", todo: "", images: "" });

  useEffect(() => {
    axios
      .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
      .then((todos) => setTodos(todos.data));
  }, []);

  function AddHandler() {
    fetch("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).finally(() => setTodo(null));
    axios
      .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
      .then((todos) => {
        setTodos(todos.data);
      });
  }
  const swipeFromRightOpen = (id) => {
    fetch("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo/" + id, {
      method: "DELETE",
    });
    setTodos(todos.filter((item) => item.id !== id));
    axios
      .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
      .then((todos) => {
        setTodos(todos.data);
      });
  };
  const rightSwipeActions = () => {
    return (
      <View className="transition-opacity justify-center px-5 h-fit w-full">
        <Text className="text-right text-xl">Book</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-white mt-16">
      <StatusBar></StatusBar>
      <AddToDo setTodo={setTodo} todo={todo} handlerAdd={AddHandler} />
      <FlatList
        className="bg-white"
        data={todos}
        key={(t) => t.id}
        renderItem={({ item }) => (
          <View>
            <Todo
              key={item.id}
              rightSwipeActions={rightSwipeActions}
              swipeFromRightOpen={swipeFromRightOpen}
              item={item}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
