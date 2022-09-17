import './projects.css'
import { Project } from '../project/Project'
import { projects } from '../../utils/data'

export const Projects = ({ setVisibility }) => {
    return (
        <div id='projects' className='projects'>
            <h2>My Projects</h2>
            {projects.map(project => {
                return <Project setVisibility={setVisibility} project={project} />
            })}
        </div>
    )
}