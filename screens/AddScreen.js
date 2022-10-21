import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useItemState } from "../Provider";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function AddScreen() {
  const { todo, setTodo, setTodos } = useItemState();
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
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
  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View className=" w-full h-fit px-2 gap-y-5">
        <TextInput
          placeholder="Enter a trip name"
          placeholderTextColor="rgb(30 41 59 / var(--tw-border-opacity))"
          onChangeText={(e) => setTodo({ ...todo, title: e })}
          value={todo?.title}
          className="bg-white px-5 py-2 w-full text-lg rounded-lg border-slate-800 border-[1px]"
        />
        <TextInput
          placeholder="Enter a trip description"
          placeholderTextColor="rgb(30 41 59 / var(--tw-border-opacity))"
          onChangeText={(e) => setTodo({ ...todo, todo: e })}
          value={todo?.todo}
          className="bg-white px-5 py-2 w-full text-lg rounded-lg border-slate-800 border-[1px]"
        />
        <TextInput
          placeholder="Enter an image"
          placeholderTextColor="rgb(30 41 59 / var(--tw-border-opacity))"
          onChangeText={(e) => setTodo({ ...todo, images: e.trim() })}
          value={todo?.images}
          className="bg-white px-5 py-2 w-full text-lg rounded-lg border-slate-800 border-[1px]"
        />
        {todo?.images && (
          <Image
            source={{ uri: todo?.images }}
            className="h-[200px] w-full rounded-lg"
          />
        )}
        <TouchableOpacity
          onPress={() => {
            AddHandler();
            ToastAndroid.showWithGravity(
              "Add Trip Success!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }}
          className="bg-blue-600 rounded-lg px-4 py-2 w-fit self-start"
        >
          <Text className="text-white font-bold text-center text-xl">Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
