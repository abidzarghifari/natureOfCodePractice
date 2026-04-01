"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="data-theme" // Ini akan menyuntikkan data-theme ke <html>
      defaultTheme="system"  // Mengikuti tema OS secara otomatis
      enableSystem
    >
      {children}
    </NextThemesProvider>
  )
}