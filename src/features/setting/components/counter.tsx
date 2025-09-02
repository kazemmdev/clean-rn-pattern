import React from "react"
import { View } from "react-native"
import { Button, Text } from "@/shared/ui"
import { useCounterStore } from "@/features/setting/store/use-counter-store"
import { formatSeconds } from "@/shared/lib/format"

const Counter = () => {
  const { count, start, pause, reset } = useCounterStore(state => state)

  return (
    <>
      <View>
        <Text className="text-center text-3xl">{formatSeconds(count)}</Text>
      </View>
      <View className="mt-4 flex flex-row items-center justify-center gap-4">
        <Button variant="primary" className="mt-4" label="Start" onPress={start} />
        <Button variant="secondary" className="mt-4" label="Pause" onPress={pause} />
        <Button variant="ghost" className="mt-4" label="Reset" onPress={() => reset(0)} />
      </View>
    </>
  )
}

export default Counter
