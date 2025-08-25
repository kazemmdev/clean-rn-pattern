import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type Props = RNTextProps & { className?: string };

export const Text = ({ className = '', ...rest }: Props) => {
  return (
    <RNText
      className={`text-base text-neutral-900 dark:text-neutral-100 ${className}`}
      {...rest}
    />
  );
}