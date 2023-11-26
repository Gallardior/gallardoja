import { EMAIL } from '../config'

export function Footer () {
  const handleClick = () => {
    navigator.clipboard.writeText(EMAIL)
  }

  return (
    <footer className='w-full pb-8 sm:pb-0'>
      <header className='font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3'>
        <h2>Email</h2>
        <i className='fa-solid fa-envelope text-3xl' />
      </header>
      <section className='flex gap-2'>
        <input
          type='text'
          disabled=''
          className='bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300'
          value={EMAIL}
        />
        <div className='flex gap-2'>
          <div className='relative group/tooltip'>
            <a href={`mailto:${EMAIL}`} target='_blank' className='flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg' rel='noreferrer'>
              <i className='fa-solid fa-paper-plane text-lg' />
            </a>
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Send me email
            </small>
          </div>
          <div className='relative group/tooltip'>
            <button onClick={handleClick} className='flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg'>
              <i className='fa-solid fa-copy text-lg' />
            </button>
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Copy email
            </small>
          </div>
        </div>
      </section>
    </footer>
  )
}
