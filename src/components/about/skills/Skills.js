import { skills } from '../../../utils/data'
import TrackVisibility from 'react-on-screen'
import './skills.css'

export const Skills = ({ setVisibility }) => {
    

    return (
        <div id='skills' className='skills'>
            <h2>Skills</h2>
            <TrackVisibility>
                {({ isVisible }) => isVisible && setVisibility('skills')}
            </TrackVisibility>
            <div className='skills-container'>
                {skills.map(skill => {
                    return <img alt={skill.name} className='skill' width='5%' src={skill.image} />
                })}
            </div>
           
            
        </div>
    )
}