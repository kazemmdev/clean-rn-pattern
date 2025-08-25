import { Pressable, Text as RNText, PressableProps } from 'react-native';

type Props = PressableProps & { label: string; className?: string };

export const Button = ({ label, className = '', ...props }: Props) => {
  return (
    <Pressable
      className={`rounded-xl px-4 py-2 bg-neutral-900 dark:bg-neutral-100 ${className}`}
      {...props}
    >
      <RNText className="text-white dark:text-black font-medium">{label}</RNText>
    </Pressable>
  );
}