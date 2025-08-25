import "../global.css"
import "react-native-gesture-handler"

import { queryClient } from "@/shared/lib/query"
import { QueryClientProvider } from "@tanstack/react-query"
import { Slot } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Layout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <Slot />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
