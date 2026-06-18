import { Circle, icons } from 'lucide-react'

/**
 * Resolve a lucide-react icon by its PascalCase name.
 * Falls back to a neutral circle when the name is unknown.
 * @param {string} name
 */
export function getIcon(name) {
  return icons[name] ?? Circle
}
