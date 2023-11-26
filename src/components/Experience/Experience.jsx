export function Experience ({ title, date, highlights }) {
  return (
    <section className='flex flex-col gap-5'>
      <header className='flex flex-col gap-1 '>
        <h2 className='text-lg font-semibold text-slate-700 dark:text-slate-200'>{title}</h2>
        <p className='text-sm text-slate-500 dark:text-slate-400'>{date}</p>
      </header>
      <ul className='list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md'>
        {
          highlights.map((highlight, i) => <li key={i}>{highlight}</li>)
        }
      </ul>
    </section>
  )
}
