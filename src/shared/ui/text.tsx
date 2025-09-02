import { Text as RNText, TextProps as RNTextProps } from "react-native"
import * as React from "react"
import { cn } from "@/shared/lib/utils"

type Props = RNTextProps & { className?: string }

const TextComponent = ({ className = "", ...rest }: Props) => {
  return (
    <RNText
      className={cn("text-base text-neutral-900 dark:text-neutral-100", className)}
      {...rest}
    />
  )
}

export const Text = React.memo(TextComponent)
