import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{}} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchRole = async () => {
      const storedRole = await AsyncStorage.getItem("userRole");
      setRole(storedRole);
    };

    fetchRole();
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#432683",
        headerShown: useClientOnlyValue(false, false),
        tabBarStyle: { position: "absolute", bottom: 0 },
      }}
    >
      {false && (
        <Tabs.Screen
          name="index"
          options={{
            title: "Accueil",
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
      )}
      <Tabs.Screen
        name="home"
        options={{
          title: "Accueil",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      {role === "USER" || role === "OTHER" ? (
        <>
          <Tabs.Screen
            name="Cursus"
            options={{
              title: "Cursus",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="book" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Apropos"
            options={{
              title: "A propos",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="info-circle" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Profil"
            options={{
              title: "Profil",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="user" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Test"
            options={{
              title: "Test",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="flask" color={color} />
              ),
            }}
          />
        </>
      ) : role === "PROF" ? (
        <>
          <Tabs.Screen
            name="Conference"
            options={{
              title: "Conférence",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="microphone" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Profils"
            options={{
              title: "Profils",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="users" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Stats"
            options={{
              title: "Stats",
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="bar-chart" color={color} />
              ),
            }}
          />
        </>
      ) : null}
    </Tabs>
  );
}
