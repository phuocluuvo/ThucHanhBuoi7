import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function AddToDo({ setTodo, todo, handlerAdd }) {
  return (
    <View className="h-fit flex-row items-center gap-x-5 px-3">
      <TextInput
        placeholder="Enter a trip name"
        placeholderTextColor="rgb(30 41 59 / var(--tw-border-opacity))"
        onChangeText={(e) => setTodo({ ...todo, todo: e })}
        value={todo?.todo}
        className="bg-white pl-2 py-3 text-lg rounded-lg border-slate-800 border-[1px] flex-1 flex-row"
      />

      <TextInput
        placeholder="Enter an image"
        placeholderTextColor="rgb(30 41 59 / var(--tw-border-opacity))"
        onChangeText={(e) => setTodo({ ...todo, images: e.trim() })}
        value={todo?.images}
        className="bg-white pl-2 py-3 text-lg rounded-lg border-slate-800 border-[1px] flex-1 flex-row"
      />
      <TouchableOpacity
        onPress={handlerAdd}
        className="bg-blue-600 rounded-lg px-5 py-3"
      >
        <Text className="text-white font-bold ">Add</Text>
      </TouchableOpacity>
    </View>
  );
}
