import './nav-bar.css'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ visibility }) => {
    
    return (
        <div className='nav-bar'>
        
            <div className='nav-links'>
                <NavLink style={{color: visibility === 'about' ? 'var(--color-primary)' : 'white'}} onClick={(e) => { e.preventDefault(); window.location.replace('/#about')}} to=''>About</NavLink>
                <NavLink style={{color: visibility === 'projects' ? 'var(--color-primary)' : 'white'}} onClick={(e) => {e.preventDefault(); window.location.replace('/#projects')}} to=''>Projects</NavLink>
                <NavLink style={{color: visibility === 'skills' ? 'var(--color-primary)' : 'white'}} onClick={(e) => {e.preventDefault(); window.location.replace('/#skills')}} to=''>Skills</NavLink>
                <NavLink style={{color: visibility === 'contact' ? 'var(--color-primary)' : 'white'}} onClick={(e) => {e.preventDefault(); window.location.replace('/#contact')}} to=''>Contact</NavLink>
            </div>
        </div>
    )
}