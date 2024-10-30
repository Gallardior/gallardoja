import { ListOfExperience } from '../components/Experience/ListOfExperience'
import { Footer } from '../components/Footer'
import { ListOfProjects } from '../components/Projects/ListOfProjects'
import { ListOfSideProjects } from '../components/Projects/ListOfSideProjects'
import { EMAIL } from '../config'

export function Home () {
  return (
    <>
      <div className='pt-24 mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10'>
        <section className='flex flex-col sm:flex-row items-center gap-5'>
          <picture className='relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-gray-200 dark:border-gray-900/80 shadow-xl rounded-full overflow-hidden'>
            <img src='/me.webp' alt='Jesus Gallardo' loading='lazy' className='bg-gray-700 h-full w-full object-cover object-top' />
          </picture>

          <article className='grid items-center sm:items-start gap-3'>
            <header className='flex flex-col items-left gap-2'>
              <h1 className='text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100'>Gallardo JA</h1>
              <p className='text-center sm:text-left text-slate-700 text-sm sm:text-base dark:text-slate-300 max-w-xl rounded-2xl text-balance'>
                Desarrollador Frontend con +4 años de experiencia en sistemas modulares y soluciones digitales
                escalables. He liderado aplicaciones con React, Next.js y VueJS, utilizando TypeScript y
                TailwindCSS para maximizar eficiencia y optimización.
              </p>
            </header>

            <footer className='flex gap-3 justify-center sm:justify-start'>
              <button className='relative group/tooltip'>
                <a href={`mailto:${EMAIL}`} target='_blank' className='p-4 rounded-xl grid place-items-center bg-emerald-200 dark:bg-emerald-500' rel='noreferrer'>
                  <i className='fa-solid fa-paper-plane text-emerald-700 dark:text-white' />
                </a>
                <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Send me email
                </small>
              </button>
              <button className='relative group/tooltip'>
                <a href='https://www.linkedin.com/in/gallardior/' target='_blank' className='p-4 rounded-xl grid place-items-center bg-sky-200 dark:bg-sky-600' rel='noreferrer'>
                  <i className='fa-brands fa-linkedin text-sky-600 dark:text-white' />
                </a>
                <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Fllow me
                </small>
              </button>

              <a href='/CV.pdf' target='_blank' className='flex items-center text-sm gap-3 bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold'>
                <i className='fa-solid fa-file text-xl sm:text-lg z-auto' />
                Resume
              </a>
            </footer>
          </article>
        </section>

        <hr className='border border-dotted border-gray-300 dark:border-gray-600 rounded-md' />

        <section className='w-full'>
          <header className='font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3'>
            <h2>Experience</h2>
            <i className='fa-solid fa-briefcase text-3xl' />
          </header>
          <ListOfExperience />
        </section>

        <section className='w-full'>
          <header className='font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3'>
            <h2>Projects</h2>
            <i className='fa-solid fa-star text-3xl' />
          </header>
          <main className='flex flex-col gap-10'>
            <section className='grid gap-10'>
              <ListOfProjects />
              <ListOfSideProjects />
            </section>
          </main>
        </section>

        <section className='w-full'>
          <header className='font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3'>
            <h2>Socials</h2>
            <i className='fa-solid fa-at text-3xl' />
          </header>
          <ul className='flex flex-wrap gap-3'>
            <a href='https://www.linkedin.com/in/gallardior/' target='_blank' className='border-2 dark:border-gray-700 flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-md hover:shadow-xl transition-shadow text-sky-600' rel='noreferrer'>
              <i className='fa-brands fa-linkedin text-2xl' />
              Linkedin
            </a>
            <a href='https://github.com/Gallardior' target='_blank' className='border-2 dark:border-gray-700 flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-md hover:shadow-xl transition-shadow text-black/80 dark:text-white/80' rel='noreferrer'>
              <i className='fa-brands fa-github text-2xl' />
              Github
            </a>
            <a href='https://twitter.com/Gallardior' target='_blank' className='border-2 dark:border-gray-700 flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-md hover:shadow-xl transition-shadow text-blue-400' rel='noreferrer'>
              <i className='fa-brands fa-twitter text-2xl' />
              Twitter
            </a>
          </ul>
        </section>

        <Footer />
      </div>
    </>
  )
}
