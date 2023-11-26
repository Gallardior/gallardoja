import { useContext } from 'react'
import { themeContext } from '../context/theme'

export function useTheme () {
  const contexto = useContext(themeContext)

  return contexto
}
