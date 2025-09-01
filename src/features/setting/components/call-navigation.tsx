import React from "react"
import { View } from "react-native"
import { Button } from "@/shared/ui"

const CallNavigation = () => {
  return (
    <View className="my-4 flex flex-row items-center justify-center gap-4">
      <Button variant="primary" label="Call" />
      <Button variant="secondary" label="Dislike" />
      <Button variant="secondary" label="Like" />
      <Button variant="outline" label="Stop" />
    </View>
  )
}

export default CallNavigation
