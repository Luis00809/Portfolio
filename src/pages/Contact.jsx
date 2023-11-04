import validateEmail from '../utils/helpers';
import { useState } from 'react';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name'){
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Invalid email')
            return;
        };

        if(!name) {
            setErrorMessage('Please provide a name')
            return;
        }

        if(!message) {
            setErrorMessage(`Please provide a message ${name}`)
            return;
        };

        alert(`Thank you for reaching out ${name}!`)
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input 
                            value={name}
                            name='name'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Name'
                        />
                    </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            type='email'
                            placeholder='@email.com'
                        />
                </div>
                
                <div className="input-group">
                    <span className="input-group-text">Message:</span>
                    <textarea 
                            className="form-control" 
                            value={message}
                            name='message'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Leave a message'>

                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}