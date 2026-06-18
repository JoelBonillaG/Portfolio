import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge conditional class names while resolving Tailwind conflicts.
 * @param {...any} inputs - class values (strings, arrays, conditionals)
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
