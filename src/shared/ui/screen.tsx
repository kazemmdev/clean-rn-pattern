import { View, ViewProps } from "react-native"

export const Screen = ({ className = "", ...props }: ViewProps) => {
  return <View className={`flex-1 bg-white px-4 py-4 dark:bg-slate-900 ${className}`} {...props} />
}
