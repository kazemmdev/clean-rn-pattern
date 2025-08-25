import { View, ViewProps } from 'react-native'

export const Screen = ({ className = '', ...props }:ViewProps) => {
  return (
    <View
      className={`flex-1 bg-white dark:bg-red-400 px-4 py-4 ${className}`}
      {...props}
    />
  )
}