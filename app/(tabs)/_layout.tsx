import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import Colors from "@/constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{}} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: { padding: 0 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Acceuil",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarStyle: { padding: 0 },
        }}
      />
      <Tabs.Screen
        name="Cursus"
        options={{
          title: "Cursus",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarStyle: { padding: 0 },
        }}
      />
      <Tabs.Screen
        name="A Propos"
        options={{
          title: "A propos",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarStyle: { padding: 0 },
        }}
      />
    </Tabs>
  );
}
