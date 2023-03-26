import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomColor() {
  // returns random tailwind color
  const colors = ['secondary', 'tertiary', 'quaternary']

  return colors[Math.floor(Math.random() * colors.length)] + '-500'
}
