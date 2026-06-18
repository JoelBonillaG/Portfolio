import { useCallback, useState } from 'react'

/**
 * Copy text to the clipboard and expose a transient `copied` flag.
 * @param {number} timeout - ms before `copied` resets
 */
export function useCopyToClipboard(timeout = 1800) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), timeout)
      } catch {
        setCopied(false)
      }
    },
    [timeout],
  )

  return { copied, copy }
}
