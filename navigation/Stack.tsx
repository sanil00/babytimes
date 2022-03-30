import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import Search from "../screens/Search";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <NativeStack.Navigator

    >
      <NativeStack.Screen name="Detail" component={Search} />
    </NativeStack.Navigator>
  );
};

export default Stack;
