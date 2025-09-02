import "../global.css"
import "../shared/lib/wdyr"
import "react-native-gesture-handler"

import { queryClient } from "@/shared/lib/query"
import { QueryClientProvider } from "@tanstack/react-query"
import { Slot } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated"

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false
})

export default function Layout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white dark:bg-slate-900">
            <Slot />
          </SafeAreaView>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
