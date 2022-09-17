import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <button className='back-to-top' onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
            <div className='contact-links'>
             {/* eslint-disable-next-line */}
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/roman-kutsenko' className='contact-link linked-in'></a>
                {/* eslint-disable-next-line */}
                <a target='_blank' rel="noreferrer" href='https://t.me/user_mane' className='contact-link telegram'></a>
                {/* eslint-disable-next-line */}
                <a target='_blank' rel="noreferrer" href='https://github.com/navsi100rom' className='contact-link github'></a>
            </div>
            <h6>Made in Kyiv 2022</h6>
        </footer>
    )
}