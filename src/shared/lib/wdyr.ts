import whyDidYouRender from "@welldone-software/why-did-you-render"

import React from "react"

if (__DEV__) {
  const MAX_PREVIEW = 120

  const preview = (v: any): string => {
    try {
      if (typeof v === "function") return `ƒ ${v.name || "anonymous"}()`
      if (typeof v === "string")
        return v.length > MAX_PREVIEW ? `"${v.slice(0, MAX_PREVIEW)}…"` : `"${v}"`
      if (typeof v === "number" || typeof v === "boolean" || v == null) return String(v)
      if (Array.isArray(v)) return `[${v.length} items]`
      const s = JSON.stringify(v, (_k, val) => (val === global ? "[global]" : val))
      return s.length > MAX_PREVIEW ? s.slice(0, MAX_PREVIEW) + "…" : s
    } catch {
      return Object.prototype.toString.call(v)
    }
  }

  const fmt = {
    tag: (t: string) => [`%c${t}`, "color:#7c3aed;font-weight:600"] as const,
    key: (k: string) => [`%c${k}`, "color:#0ea5e9"] as const,
    sub: (s: string) => [`%c${s}`, "color:#94a3b8"] as const
  }

  const pathToString = (path?: Array<string | number>) => {
    if (!path || !path.length) return "(root)"
    return path
      .map(p => (typeof p === "number" ? `[${p}]` : p === "props" ? "props" : `.${p}`))
      .join("")
      .replace(/^\.?props\.?/, "props.")
  }

  const ownersChain = (ownerData?: any[]) =>
    (ownerData || [])
      .map(o => o?.displayName)
      .filter(Boolean)
      .join(" → ")

  const notifier = (info: any) => {
    const name: string =
      info.displayName || info.Component?.displayName || info.Component?.name || "<Component>"

    const className =
      info?.prevProps?.className ?? info?.nextProps?.className ?? info?.props?.className

    const owners = ownersChain(info.ownerData)

    const header =
      className && typeof className === "string" ? `WDYR ${name} (${className})` : `WDYR ${name}`

    console.groupCollapsed(...fmt.tag(header))

    if (owners) {
      console.log(...fmt.sub(`owners: ${owners}`))
    }

    const propsDiffs = info.reason?.propsDifferences || []
    const hooksDiffs = info.reason?.hookDifferences || []
    const stateChanges = info.reason?.stateChange || false
    const cause = info.reason?.why ?? info.reason?.type

    if (cause) {
      console.log(...fmt.sub(`reason: ${cause}`))
    }

    if (stateChanges) {
      console.log("🧠 state changed")
    }

    if (propsDiffs.length) {
      console.log("🔁 props changed:")
      for (const d of propsDiffs) {
        const p = pathToString(d.path)
        console.log(...fmt.key(` - ${p}`))
        console.log("    prev:", preview(d.prevValue))
        console.log("    next:", preview(d.nextValue))
      }
    }

    if (hooksDiffs.length) {
      console.log("🪝 hooks changed:")
      for (const h of hooksDiffs) {
        const hook = h.hookName || "(hook)"
        console.log(...fmt.key(` - ${hook}`))
        console.log("    prev:", preview(h.prevValue))
        console.log("    next:", preview(h.nextValue))
      }
    }

    if (!propsDiffs.length && !hooksDiffs.length && !stateChanges) {
      console.log("ℹ️ re-render without diffs (likely parent re-render or context).")
    }

    console.groupEnd()
  }

  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOnDifferentValues: true,
    collapseGroups: true,
    notifier
  })
}
