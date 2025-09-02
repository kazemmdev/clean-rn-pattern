import { Tabs } from "expo-router"
import {
  DashboardSquare01FreeIcons,
  Search01Icon,
  Settings02Icon
} from "@hugeicons/core-free-icons"
import { Icon } from "@/shared/ui"

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 56 },
        tabBarLabelStyle: { fontSize: 12 },
        // detachInactiveScreens: false,
        lazy: true
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Todos",
          tabBarIcon: props => <Icon {...props} icon={DashboardSquare01FreeIcons} />
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          title: "Stats",
          tabBarIcon: props => <Icon {...props} icon={Search01Icon} />
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          tabBarIcon: props => <Icon {...props} icon={Settings02Icon} />
        }}
      />
    </Tabs>
  )
}

export default TabLayout
