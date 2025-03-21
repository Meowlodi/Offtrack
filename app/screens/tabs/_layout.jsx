import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "home") iconName = "home-outline";
          else if (route.name === "search") iconName = "search-outline";
          else if (route.name === "addTrip") iconName = "add-circle-outline";
          else if (route.name === "notifications") iconName = "notifications-outline";
          else if (route.name === "profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Zoeken" }} />
      <Tabs.Screen name="addTrip" options={{ title: "New diary entry" }} />
      <Tabs.Screen name="notifications" options={{ title: "Notificaties" }} />
      <Tabs.Screen name="profile" options={{ title: "Profiel" }} />
    </Tabs>
  );
}
