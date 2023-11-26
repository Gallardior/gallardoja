import { Experience } from './Experience'
import { experience as experiencesList } from '../../mocks/experience.json'

export function ListOfExperience () {
  return (
    <article className='flex flex-col gap-10'>
      {
        experiencesList.map((experience, i) => (
          <Experience
            date={experience.date}
            title={experience.title}
            highlights={experience.highlights}
            key={i}
          />
        ))
      }
    </article>
  )
}
