import { Pressable, PressableProps, Text as RNText } from "react-native"

type Props = PressableProps & { label: string; className?: string }

export const Button = ({ label, className = "", ...props }: Props) => {
  return (
    <Pressable
      className={`flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 dark:bg-neutral-100 active:bg-slate-300 transition ease-in ${className}`}
      {...props}
    >
      <RNText className="font-medium text-white dark:text-black">{label}</RNText>
    </Pressable>
  )
}
