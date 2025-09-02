import React from "react"
import { View } from "react-native"
import { Button } from "@/shared/ui"
import { useCounterStore } from "@/features/setting/store/use-counter-store"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { CallIcon, ThumbsDownIcon, ThumbsUpIcon, UnavailableIcon } from "@hugeicons/core-free-icons"

const CallNavigation = () => {
  const pause = useCounterStore(state => state.pause)
  return (
    <View className="my-4 flex flex-row items-center justify-center gap-4">
      <Button variant="primary" className="h-14 w-14 rounded-full p-0">
        <HugeiconsIcon icon={CallIcon} color="white" size={24} />
      </Button>
      <Button variant="secondary" className="h-14 w-14 rounded-full p-0">
        <HugeiconsIcon icon={ThumbsUpIcon} size={24} />
      </Button>
      <Button variant="secondary" className="h-14 w-14 rounded-full p-0">
        <HugeiconsIcon icon={ThumbsDownIcon} size={24} />
      </Button>
      <Button variant="danger" className="h-14 w-14 rounded-full p-0">
        <HugeiconsIcon icon={UnavailableIcon} color="white" size={24} />
      </Button>
    </View>
  )
}

export default CallNavigation
