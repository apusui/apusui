import { colorsMap } from "./declarations"

/**
 * Generates a unique key by combining the current timestamp and a random string.
 *
 * @returns {string} A unique key string.
 */
export function generateUniqueKey (): string {
  return Date.now().toString(36)
}

export function getColor (name: keyof typeof colorsMap) {
  return colorsMap[name]
}
