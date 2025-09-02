import React from "react"
import { useIsFocused } from "@react-navigation/core"
import { Freeze } from "react-freeze"

const FreezeOnBlur = ({ children }: React.PropsWithChildren) => {
  const isFocused = useIsFocused()
  return <Freeze freeze={!isFocused}>{children}</Freeze>
}

export default FreezeOnBlur
