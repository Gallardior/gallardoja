import { createContext, useEffect, useState } from 'react'
import { THEME } from '../config'

export const themeContext = createContext({})

// Consultar color scheme
function handleColorScheme () {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME.light
  }

  return THEME.dark
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') ||
    handleColorScheme()
  )

  useEffect(() => {
    if (theme === THEME.dark) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  return (
    <themeContext.Provider value={{
      theme,
      setTheme
    }}
    >
      {children}
    </themeContext.Provider>
  )
}
