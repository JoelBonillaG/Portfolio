import { createElement } from 'react'
import { getIcon } from '@/lib/icons.js'

/**
 * Render a lucide icon by name from data. Uses createElement so the icon —
 * a stable reference from the lucide map — isn't treated as a component
 * created during render.
 */
export function DynamicIcon({ name, ...props }) {
  return createElement(getIcon(name), props)
}
