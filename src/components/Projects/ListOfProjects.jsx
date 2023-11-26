import { projects as mainProjects } from '../../mocks/main-projects.json'
import { Project } from './Project'

export function ListOfProjects () {
  return (
    <>
      {
        mainProjects.map(project => (
          <Project {...project} key={project.name} />
        ))
      }
    </>
  )
}
