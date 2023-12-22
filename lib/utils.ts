import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "XS"
    case "s":
      return "S"
    case "m":
      return "M"
    case "l":
      return "L"
    case "xl":
      return "XL"
    case "one-size":
      return "Único"
  }
}
