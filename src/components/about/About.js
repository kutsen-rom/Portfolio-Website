import './about.css'
import TrackVisibility from 'react-on-screen'

export const About = ({ setVisibility }) => {

    return (<>
       
        <div id='about' className='about'>
            <div className='text'>
                <p>Hello, I'm <strong>Roman Kutsenko</strong>,
                    <br/>
                a front-end web developer.</p>
                <TrackVisibility>
      {({ isVisible }) => isVisible && setVisibility('about')}
            </TrackVisibility>
                <button onClick={(e) => {e.preventDefault(); window.location.replace('/#projects');}} className='projects-button'>To my projects</button>
            </div>
        </div>
        </>
    )
}