import React from "react"
import { Text } from "@/shared/ui"

const Intro = () => {
  return (
    <>
      <Text className="text-3xl font-bold">Counter</Text>
      <Text className="my-2 text-neutral-600 dark:text-neutral-300">
        Here we are checking out counting rerender issue
      </Text>
    </>
  )
}

export default Intro
