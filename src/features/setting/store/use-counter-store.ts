import { create } from "zustand"

interface CounterState {
  count: number
  startAt: number
  intervalId: NodeJS.Timeout | null
  start: () => void
  pause: () => void
  reset: (to?: number) => void
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  startAt: 0,
  intervalId: null,

  start: () => {
    const { intervalId } = get()
    if (intervalId) return

    const id = setInterval(() => {
      set(state => ({ count: state.count + 1 }))
    }, 1000)

    set({ intervalId: id })
  },

  pause: () => {
    const { intervalId } = get()
    if (intervalId) {
      clearInterval(intervalId)
      set({ intervalId: null })
    }
  },

  reset: (to?: number) => {
    const { pause, startAt } = get()
    pause()
    set({ count: to ?? startAt })
  }
}))
