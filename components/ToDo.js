import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Todo = ({ rightSwipeActions, swipeFromRightOpen, item, addToCaft }) => {
  const nav = useNavigation();
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={() => swipeFromRightOpen(item.id)}
      >
        <TouchableOpacity
          onPress={() => nav.navigate({ name: "ContentScreen", params: item })}
        >
          <View className="m-2 shadow-xl">
            <Image
              source={{ uri: item?.images }}
              className="h-[100px] w-fit rounded-t-xl"
            />
            <View className="h-fit p-5 flex-row justify-between  border-t-0 shadow-lg bg-white rounded-b-xl">
              <View>
                <Text
                  numberOfLines={2}
                  ellipsizeMode={"tail"}
                  className={`text-slate-800 font-bold uppercase`}
                >
                  {item.title}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode={"tail"}
                  className={`text-slate-800 w-[250px] truncate`}
                >
                  {item.todo}
                </Text>
              </View>
              <Text className={`text-slate-500`}>${item.price}</Text>
              <TouchableOpacity onPress={addToCaft}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default Todo;
