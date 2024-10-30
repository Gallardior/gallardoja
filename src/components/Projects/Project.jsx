import { ListToolsIcons } from './ListToolsIcons'

export function Project ({ name, img, description, tools, repoUrl, projectUrl }) {
  return (
    <article className='grid gap-4 sm:gap-7 md:grid-cols-2 group'>
      <a href={projectUrl} target='_blank' className='block' rel='noreferrer'>
        <picture className='pt-10 pl-10 relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50 group/projectImage'>
          <img src={img} alt='My Project' className='rounded-tl-md transform group-hover/projectImage:scale-110 duration-500 transition-transform' />
        </picture>
      </a>
      <main className='flex flex-col gap-2.5 justify-center'>
        <h3 className='font-bold text-3xl text-slate-800 dark:text-white'>{name}</h3>
        <p className='text-slate-600 dark:text-slate-300 text-lg'>
          {description}
        </p>
        <ListToolsIcons toolsList={tools} />
        <footer className='flex gap-3'>
          {
            repoUrl && (
              <a
                href={repoUrl}
                target='_blank'
                className='text-lg px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg' rel='noreferrer'
              >
                Code
              </a>
            )
          }
          {
            projectUrl && (
              <a href={projectUrl} target='_blank' className='flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg' rel='noreferrer'>Live
                <i className='fa-solid fa-paperclip text-lg rotate-45 group-hover/live:rotate-180 transition-transform' />
              </a>
            )
          }
        </footer>
      </main>
    </article>
  )
}
