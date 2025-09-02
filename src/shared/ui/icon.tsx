import React from "react"
import { HugeiconsIcon } from "@hugeicons/react-native"

type IconSvgElement = readonly (readonly [
  string,
  {
    readonly [key: string]: string | number
  }
])[]

interface IconProps {
  icon: IconSvgElement
  size: number
  color: string
}

const IconComponent = ({ icon, size, color }: IconProps) => {
  return <HugeiconsIcon icon={icon} size={size} color={color} />
}

export const Icon = React.memo(IconComponent)
