import { useState } from 'react'
import TrackVisibility from 'react-on-screen';
import './project.css'

export const Project = ({ project, setVisibility }) => {

    const [showDetails, setShowDetails] = useState('hide');

    return (
        <div onMouseEnter={() => setShowDetails('show')}
        onMouseLeave={() => setShowDetails('hide')} className={`project ${showDetails}-details`}>
            <img alt={project.name} width='100%' src={project.image} />
                <div style={{animation: `${showDetails}-details 0.5s forwards`}} className={`details`}>
                    <h2 style={{animation: `${showDetails}-project-name 0.5s forwards`}} className='project-name'>{project.name}</h2>
                    <div className='technologies'>
                        {project.technologies.map(technology => {
                            return (
                                <div style={{animation: `${showDetails}-technologies 0.5s forwards`}} className='technology'>
                                    <img alt={technology.name} className='technology-image' width='50px' src={technology.image} />
                                    <p className='technology-name'>{technology.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <TrackVisibility>
                        {({ isVisible }) => isVisible && setVisibility('projects')}
                    </TrackVisibility>
                    <a target='_blank' rel="noreferrer" style={{animation: `${showDetails}-project-link 0.5s forwards`}} className='project-link' href={project.link}>Go to {project.name}</a>
                </div>
            {/* <img width='80%' max-height='80%' src={project.image} /> */}
        </div>
    )
}