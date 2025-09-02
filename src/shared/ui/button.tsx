import * as React from "react"
import { Pressable, PressableProps, Text as RNText } from "react-native"
import { cn } from "@/shared/lib/utils"

type Variant = "primary" | "secondary" | "danger" | "outline" | "ghost"

type Props = PressableProps & {
  label?: string
  className?: string
  variant?: Variant
  children?: React.ReactNode
}

const variants: Record<Variant, string> = {
  primary: "bg-neutral-900 dark:bg-neutral-100 active:bg-neutral-600",
  secondary: "bg-neutral-200 dark:bg-neutral-800 active:bg-neutral-400",
  outline: "border border-neutral-900 dark:border-neutral-100 bg-transparent active:bg-neutral-100",
  ghost: "bg-transparent active:bg-neutral-200 dark:active:bg-neutral-700",
  danger: "bg-red-500 dark:bg-red-600 active:bg-red-700"
}

const ButtonComponent = ({ label, className = "", variant = "primary", ...props }: Props) => {
  return (
    <Pressable
      className={cn(
        "flex items-center justify-center rounded-lg px-4 py-3 transition ease-in-out",
        variants[variant],
        className
      )}
      {...props}
    >
      {props.children ?? (
        <RNText
          className={cn(
            "text-center font-medium",
            variant === "primary"
              ? "text-white dark:text-black"
              : "text-neutral-900 dark:text-white"
          )}
        >
          {label}
        </RNText>
      )}
    </Pressable>
  )
}

export const Button = React.memo(ButtonComponent)
