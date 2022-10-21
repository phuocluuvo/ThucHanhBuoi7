import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Todo from "../components/ToDo";
import { useItemState } from "../Provider";
export function MainScreen() {
  const { todo, todos, setTodos, setCaft, caft } = useItemState();
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  useEffect(() => {
    axios
      .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
      .then((todos) => setTodos(todos.data));
  }, [todo]);

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
    <SafeAreaView className="bg-white pt-0">
      <StatusBar></StatusBar>
      <Text className="text-xl text-center m-6 mt-2 uppercase font-bold">
        Trip Booker
      </Text>
      <View className="flex-row justify-between">
        <TouchableOpacity
          className="bg-green-500 mx-5 w-[100px] px-4 py-2 rounded-full mb-5"
          onPress={() => nav.navigate("AddScreen")}
        >
          <Text className="text-white text-center ">Get A Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-500 mx-5 w-[100px] px-4 py-2 rounded-full mb-5"
          onPress={() => nav.navigate("ListCaftScreen")}
        >
          <Text className="text-white text-center ">Caft</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        className="bg-white"
        data={todos}
        key={(t) => t.id}
        renderItem={({ item }) => (
          <Todo
            key={item.id}
            rightSwipeActions={rightSwipeActions}
            swipeFromRightOpen={swipeFromRightOpen}
            item={item}
            addToCaft={() => setCaft([...caft, item])}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MainScreen;
