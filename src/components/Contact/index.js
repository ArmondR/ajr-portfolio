import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                } 
            } 
        }
      if (!errorMessage) {
        setFormState({...formState, name: e.target.value })
      }

      setFormState ({...formState,[e.target.name]: e.target.value});
    }

    function handleSubmit(e) {

        e.preventDefault();
        console.log(formState);

        setFormState ({...formState, name: e.target.reset(), email: e.target.reset(), message: e.target = '', });

    }


    return (
        <section className='g-4 row row-cols-md-2 row-cols-1'>
            <form className="col" id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5"  onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className='btn'>Submit</button>
            </form>

            <div className='col contact-info'>
            <h1 className='contact-header'>Contact Me</h1>
               <p>
                 <span>Phone: </span><a href="tel:6093849808">609.384.9808</a>
               </p>
               <p>
               <span>Email: </span><a href="mailto:ajr.rodriguez095@gmail.com">ajr.rodriguez095@gmail.com</a>
               </p>
             </div>
          
        </section>
        
    )
}

export default ContactForm;