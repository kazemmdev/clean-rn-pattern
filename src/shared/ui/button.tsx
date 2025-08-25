import { Pressable, PressableProps, Text as RNText } from "react-native"

type Props = PressableProps & { label: string; className?: string }

export const Button = ({ label, className = "", ...props }: Props) => {
  return (
    <Pressable
      className={`rounded-xl bg-neutral-900 px-4 py-2 dark:bg-neutral-100 ${className}`}
      {...props}
    >
      <RNText className="font-medium text-white dark:text-black">{label}</RNText>
    </Pressable>
  )
}
