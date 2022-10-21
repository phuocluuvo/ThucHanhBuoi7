import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import AddScreen from "./screens/AddScreen";
import ItemProvider from "./Provider";
import ContentScreen from "./screens/ContentScreen";
import ListCaftScreen from "./screens/ListCaftScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="AddScreen" component={AddScreen} />
          <Stack.Screen name="ListCaftScreen" component={ListCaftScreen} />
          <Stack.Screen name="ContentScreen" component={ContentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}
