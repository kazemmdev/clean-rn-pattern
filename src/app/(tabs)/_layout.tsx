import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 56 },
        tabBarLabelStyle: { fontSize: 12 }
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          title: "Stats",
          tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout
