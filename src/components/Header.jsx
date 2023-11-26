import { ToggleTheme } from './ToggleTheme'

export function Header () {
  return (
    <div className='fixed inset-x-0 top-0 mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10 z-20'>
      <header className='flex justify-between items-center py-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg'>
        <section className='flex items-center gap-4'>
          <picture className='bg-white ring-2 ring-offset-2 ring-gray-600 dark:ring-offset-gray-800 dark:ring-gray-500 rounded-full'>
            <img src='/me.jpeg' alt='Jesus Gallardo' className='block object-cover object-top w-10 h-10 rounded-full' />
          </picture>
          <h3 className='font-semibold text-lg whitespace-nowrap text-slate-600 dark:text-slate-300'>
            Gallardo JA
          </h3>
        </section>
        <ToggleTheme />
      </header>
    </div>

  )
}
