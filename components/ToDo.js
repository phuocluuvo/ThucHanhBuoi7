import { View, Text, Image } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
const Todo = ({ rightSwipeActions, swipeFromRightOpen, item }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={() => swipeFromRightOpen(item.id)}
      >
        <View className="m-5 shadow-xl">
          <Image
            source={{ uri: item?.images }}
            className="h-[100px] w-fit rounded-t-xl"
          />
          <View className="h-fit p-5 flex-row justify-between  border-t-0 shadow-lg bg-white rounded-b-xl">
            <Text className={`text-slate-800 uppercase`}>{item.todo}</Text>
            <Text className={`text-slate-500`}>${item.price}</Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default Todo;
