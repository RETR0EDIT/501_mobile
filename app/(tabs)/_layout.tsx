import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#432683",
        headerShown: useClientOnlyValue(false, false),
        tabBarStyle: { position: "absolute", bottom: 0 }, 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Connexion",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />, 
        }}
      />
      <Tabs.Screen
        name="Cursus"
        options={{
          title: "Cursus",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Apropos"
        options={{
          title: "A propos",
          tabBarIcon: ({ color }) => <TabBarIcon name="info-circle" color={color} />, 
        }}
      />
      <Tabs.Screen
        name="Se Connecter"
        options={{
          title: "Se connecter",
          tabBarIcon: ({ color }) => <TabBarIcon name="sign-in" color={color} />, 
        }}
      />
      <Tabs.Screen
        name="S'inscrire"
        options={{
          title: "S'inscrire",
          tabBarIcon: ({ color }) => <TabBarIcon name="user-plus" color={color} />, 
        }}
      />
    </Tabs>
  );
}
