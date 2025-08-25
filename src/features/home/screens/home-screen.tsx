import { Button, Screen, Text } from "@/shared/ui"

export const HomeScreen = () => {
  return (
    <Screen>
      <Text className="text-2xl font-semibold">Todos</Text>
      <Text className="mt-2 text-neutral-600 dark:text-neutral-300">
        We’ll wire this to the feature soon.
      </Text>
      <Button className="mt-4" label="Hello" onPress={() => {}} />
    </Screen>
  )
}
