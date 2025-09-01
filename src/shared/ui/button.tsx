import React from "react"
import { Pressable, PressableProps, Text as RNText } from "react-native"

type Variant = "primary" | "secondary" | "outline" | "ghost"

type Props = PressableProps & {
  label: string
  className?: string
  variant?: Variant
}

const baseClasses = "flex items-center justify-center rounded-xl px-4 py-2 transition ease-in"

const variants: Record<Variant, string> = {
  primary: "bg-neutral-900 dark:bg-neutral-100 active:bg-slate-300",
  secondary: "bg-neutral-200 dark:bg-neutral-800 active:bg-neutral-400",
  outline: "border border-neutral-900 dark:border-neutral-100 bg-transparent active:bg-neutral-100",
  ghost: "bg-transparent active:bg-neutral-200 dark:active:bg-neutral-700"
}

export const Button = ({ label, className = "", variant = "primary", ...props }: Props) => {
  const renders = React.useRef(0)
  renders.current += 1
  console.log(`[Button - ${label}] render #${renders.current}`, props)

  return (
    <Pressable className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      <RNText
        className={`font-medium ${
          variant === "primary" ? "text-white dark:text-black" : "text-neutral-900 dark:text-white"
        }`}
      >
        {label}
      </RNText>
    </Pressable>
  )
}
