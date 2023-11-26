import { ListToolsIcons } from './ListToolsIcons'

export function SideProject ({ name, description, tools, projectUrl }) {
  return (
    <a href={projectUrl} target='_blank' className='block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1' rel='noreferrer'>
      <article className='relative flex flex-col justify-between w-full py-6 px-7'>
        <h2 className='text-gray-700 dark:text-gray-200 text-lg font-bold'>
          {name}
        </h2>
        <p className='text-slate-400 dark:text-slate-200 mb-2'>
          {description}
        </p>
        <footer>
          <ListToolsIcons toolsList={tools} />
        </footer>
        <button className='absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm'>
          <i className='fa-solid fa-arrow-up rotate-45 text-gray-400 dark:text-gray-50 text-2xl' />
        </button>
      </article>
    </a>
  )
}
