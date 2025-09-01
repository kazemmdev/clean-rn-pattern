import React from "react"

interface CounterProps {
  startAt?: number
  intervalMs?: number
  autoStart?: boolean
  max?: number | null
  onTick?: (value: number) => void
}

export const useCounter = ({
  startAt = 0,
  intervalMs = 1000,
  autoStart = true,
  max = null,
  onTick
}: CounterProps) => {
  const [value, setValue] = React.useState(startAt)

  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const runningRef = React.useRef(false)
  const intervalRef = React.useRef(intervalMs)
  const maxRef = React.useRef<number | null>(max)
  const onTickRef = React.useRef(onTick)
  const startAtRef = React.useRef(startAt)

  React.useEffect(() => {
    intervalRef.current = intervalMs
  }, [intervalMs])
  React.useEffect(() => {
    maxRef.current = max
  }, [max])
  React.useEffect(() => {
    onTickRef.current = onTick
  }, [onTick])
  React.useEffect(() => {
    startAtRef.current = startAt
  }, [startAt])

  const clear = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    runningRef.current = false
  }, [])

  const tick = React.useCallback(() => {
    setValue(prev => {
      const next = prev + 1
      if (maxRef.current != null && next > maxRef.current) {
        // stop at max
        clear()
        return prev
      }
      onTickRef.current?.(next)
      return next
    })
  }, [clear])

  const start = React.useCallback(() => {
    if (runningRef.current) return
    runningRef.current = true
    timerRef.current = setInterval(tick, intervalRef.current)
  }, [tick])

  const pause = React.useCallback(() => {
    clear()
  }, [clear])

  const reset = React.useCallback(
    (to?: number) => {
      clear()
      setValue(to ?? startAtRef.current)
    },
    [clear]
  )

  // optional auto-start once on mount
  React.useEffect(() => {
    if (autoStart) start()
    return clear
  }, [])

  const controls = React.useRef({ start, pause, reset })

  controls.current.start = start
  controls.current.pause = pause
  controls.current.reset = reset

  return [value, controls.current] as const
}
