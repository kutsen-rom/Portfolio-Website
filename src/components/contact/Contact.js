import './contact.css'
import { useState } from 'react'
import { send } from 'emailjs-com'
import TrackVisibility from 'react-on-screen'

export const Contact = ({ setVisibility }) => {
    const [sendTo, setSendTo] = useState({
        from_name: '',
        message: '',
        reply_to: ''
    })

    const [sent, setSent] = useState('not-sent');

    const onChange = ({ target }) => {
        setSendTo({
            ...sendTo,
            [target.name]: target.value
        })
    }

    const handleClick = (e) => {
        if (!sendTo.from_name || !sendTo.reply_to || !sendTo.message) {
            return
        }
        e.preventDefault();
        setSent('loading');
        send(
            'service_vyugs2k',
            'template_2vgqsb4',
            sendTo,
            'xUYyLM6gog6fRvD7i'
        ).then(response => {
            setSent('sent');
            setTimeout(() => {
                setSent('not-sent')
            }, 2500);
            setSendTo({
                from_name: '',
                message: '',
                reply_to: ''
            })
        })
        .catch(err => {
            setSent('error');
            setTimeout(() => {
                setSent('not-sent')
            }, 2500)
        })
        
    }

    return (
        <div id='contact' className='contact'>
            <h2>Contact</h2>
            <form className={`contact-form `}>
                <input 
                    name='from_name'
                    type='text'
                    placeholder='Name' 
                    value={sendTo.from_name}
                    onChange={onChange}
                    required
                />
                <input 
                    name='reply_to'
                    type='email'
                    placeholder='Enter email'
                    value={sendTo.reply_to}
                    onChange={onChange}
                    required
                />
                <textarea 
                    name='message'
                    placeholder='Your message'
                    value={sendTo.message}
                    onChange={onChange}
                    rows='10'
                    required
                />
                <TrackVisibility>
                    {({ isVisible }) => isVisible && setVisibility('contact')}
                </TrackVisibility>
                <button onClick={handleClick} className='submit-button'>
                    Send
                </button>
                <div style={{animation: `message-${sent} 2s forwards`}} className={`result ${sent}`}>
                    {sent === 'sent' 
                        ? <h2>Succes</h2>
                        : sent === 'error' 
                        ? <h2>Error</h2>
                        : sent === 'loading'
                        ? <h2>Sending...</h2>
                        : ''    
                }
                </div>
            </form>


        </div>
    )
}