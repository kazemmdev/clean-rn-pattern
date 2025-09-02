import { View, ViewProps } from "react-native"
import * as React from "react"

const ScreenComponent = ({ className = "", ...props }: ViewProps) => {
  return <View className={`flex-1 bg-white px-4 py-4 dark:bg-slate-900 ${className}`} {...props} />
}

export const Screen = React.memo(ScreenComponent)
