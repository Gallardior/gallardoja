import { projects as sideProjects } from '../../mocks/side-projects.json'
import { SideProject } from './SideProject'

export function ListOfSideProjects () {
  return (
    <aside className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5'>
      {
        sideProjects.map(({ name, description, tools, projectUrl }) => (
          <SideProject
            name={name}
            description={description}
            tools={tools}
            projectUrl={projectUrl}
            key={name}
          />
        ))
      }
    </aside>
  )
}
