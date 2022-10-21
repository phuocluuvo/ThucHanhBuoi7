import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
import React from "react";
import { useItemState } from "../Provider";
import { FlatList } from "react-native-gesture-handler";

export default function ListCaftScreen() {
  const { caft } = useItemState();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar></StatusBar>
      <Text className="pl-1 pt-2 text-2xl font-bold text-slate-800">
        Your Trips
      </Text>
      <Text className="pl-1 pb-2 text-md text-slate-700">
        You can see all your trips you booked in this list
      </Text>

      <FlatList
        className="bg-white"
        data={caft}
        numColumns={2}
        key={(t) => t.id}
        renderItem={({ item, index }) => (
          <View className="w-[50%] p-1">
            <Image
              className="w-full h-20"
              source={{ uri: item.images }}
            ></Image>
            <Text>{item.title}</Text>
            <Text className="text-slate-500">${item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
