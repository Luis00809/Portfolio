import validateEmail from '../utils/helpers';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const styles = {
    box: {
        // border: "2px solid black",
        // marginTop: "8rem",
        flexGrow: 1
    },
    parentBox: {
       display: 'flex',
       flexDirection: 'column',
       width: "100%",
       height: "610px"
    },
    header: {
        color: "rgb(3, 4, 94)"
    },
    pColor: {
        color: "rgb(12, 24, 33)"
    },
    errorText: {
        color: "red",
        fontSize: "20px"
    }
}

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const USER_ID = import.meta.env.VITE_REACT_APP_USER_ID
    const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
    


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

    const form = useRef();

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

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
        

        alert(`Thank you for reaching out ${name}!`)
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div style={styles.parentBox}>
            <div style={styles.box} className='container'>
                <h1 style={styles.header} className='text-center mb-5 mt-5'>Contact Me</h1>
                <form ref={form} onSubmit={handleSubmit}>
                        <div className="mb-3 text-center">
                            <label style={styles.pColor} htmlFor="exampleInputEmail1" className="  form-label">Name:</label>
                            <input 
                                value={name}
                                name='name'
                                style={styles.pColor}
                                onChange={handleInputChange}
                                type='text'
                                placeholder='name'
                                className='ms-3'
                            />
                        </div>

                    <div className="mb-3 text-center">
                        <label style={styles.pColor} htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                        <input 
                                value={email}
                                style={styles.pColor}
                                name='email'
                                onChange={handleInputChange}
                                type='email'
                                placeholder='@email.com'
                                className='ms-3'
                            />
                    </div>
                    
                    <div className="input-group">
                        <span style={styles.pColor} className="input-group-text">Message:</span>
                        <textarea 
                                className="form-control"
                                style={styles.pColor} 
                                value={message}
                                name='message'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Leave a message'>

                        </textarea>
                    </div>
                    <div className='d-flex justify-content-center '>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p style={styles.errorText} className='text-center m-2'>*{errorMessage}*</p>
                    </div>
                )}
            </div>
        </div>
    );
}