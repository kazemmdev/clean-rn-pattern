import { Button, Screen, Text } from "@/shared/ui"

const Stats = () => {
  return (
    <Screen>
      <Text className="text-2xl font-semibold">Stats</Text>
      <Text className="mt-2 text-neutral-600 dark:text-neutral-300">
        Placeholder for completion rates, etc.
      </Text>
      <Button className="mt-4 h-10" label="Press me" />
    </Screen>
  )
}

export default Stats
