import {
  View,
  Text,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useItemState } from "../Provider";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function ContentScreen({ route }) {
  const { todos, setTodos } = useItemState();
  const nav = useNavigation();
  return (
    <View className="h-full">
      <View className="h-full shadow-xl bg-white">
        <Image
          source={{ uri: route.params?.images }}
          className="h-[300px] w-fit"
        />
        <View className="h-fit p-5 justify-between bg-white">
          <View className="space-y-5">
            <Text className={`text-slate-800 text-2xl font-bold uppercase`}>
              {route.params.title}
            </Text>
            <Text className={`text-slate-500`}>
              ${route.params.price}/night - 3 days
            </Text>
            <ScrollView className="h-[60%]">
              <Text className={`text-slate-800 pb-32 text-lg`}>
                {route.params.todo}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="fixed bottom-20 px-32 py-2 shadow-lg self-center bg-teal-500 rounded-md"
        onPress={() => {
          fetch("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo/" + id, {
            method: "DELETE",
          });
          setTodos(todos.filter((item) => item.id !== id));
          axios
            .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
            .then((todos) => {
              setTodos(todos.data);
              nav.navigate("MainScreen");
            });
        }}
      >
        <Text className="text-white text-2xl font-bold">Book</Text>
      </TouchableOpacity>
    </View>
  );
}
