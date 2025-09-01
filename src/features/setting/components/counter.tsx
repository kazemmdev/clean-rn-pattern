import React from "react"
import { View } from "react-native"
import { Button, Text } from "@/shared/ui"
import { useCounter } from "@/features/setting/hooks/use-counter"

const Counter = () => {
  const [count, { start, reset, pause }] = useCounter({
    startAt: 0,
    autoStart: false,
    onTick: value => {
      console.log("onTick: ", value)
    }
  })
  return (
    <>
      <View>
        <Text className="text-center text-3xl">{count}</Text>
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
