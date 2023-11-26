import { useTheme } from '../hooks/useTheme'
import { THEME } from '../config'

export function ToggleTheme () {
  const { theme, setTheme } = useTheme()
  const isDark = theme === THEME.dark

  const handleClick = () => {
    setTheme(prevTheme => {
      if (prevTheme === THEME.light) {
        window.localStorage.setItem('theme', THEME.dark)
        return THEME.dark
      }
      if (prevTheme === THEME.dark) {
        window.localStorage.setItem('theme', THEME.light)
        return THEME.light
      }
    })
  }

  return (
    <form className='flex items-center gap-2'>
      <i className='fa-solid fa-sun text-xl text-orange-300' />
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' className='sr-only peer' checked={isDark} onClick={handleClick} />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      </label>
      <i className='fa-solid fa-moon text-xl text-purple-700 dark:text-purple-400' />
    </form>
  )
}
