import validateEmail from '../utils/helpers';
import { useState } from 'react';

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
    }
}

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
        <div style={styles.parentBox}>
            <div style={styles.box} className='container'>
                <h1 className='text-center mb-5 mt-5'>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-center">
                            <label htmlFor="exampleInputEmail1" className="  form-label">Name:</label>
                            <input 
                                value={name}
                                name='name'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='name'
                                className='ms-3'
                            />
                        </div>

                    <div className="mb-3 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                        <input 
                                value={email}
                                name='email'
                                onChange={handleInputChange}
                                type='email'
                                placeholder='@email.com'
                                className='ms-3'
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
                    <div className='d-flex justify-content-center '>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className='text-center m-2'>*{errorMessage}*</p>
                    </div>
                )}
            </div>
        </div>
    );
}