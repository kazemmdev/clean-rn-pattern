import { Screen } from "@/shared/ui"
import Counter from "@/features/setting/components/counter"
import CallNavigation from "@/features/setting/components/call-navigation"
import Intro from "@/features/setting/components/intro"
import { View } from "react-native"

export const SettingScreen = () => {
  return (
    <Screen className="flex flex-col justify-between">
      <View>
        <Intro />
        <Counter />
      </View>
      <CallNavigation />
    </Screen>
  )
}
