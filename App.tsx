import AppLoading from "expo-app-loading";
import * as React from 'react';
import { useState } from "react";
import * as Font from "expo-font";
import { Image, Text, useColorScheme, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./navigation/Root";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient();

const loadFonts = (
  fonts:
    | string[]
    | {
        [fontFamily: string]: Font.FontSource;
      }[]
) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };
  const isDark = useColorScheme() === "dark";
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
    </QueryClientProvider>
  );
}