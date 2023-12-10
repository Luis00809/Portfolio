import Cardlist from '../components/UI/CardList';
import SkillsList from "../components/UI/skillsList";

import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import "../styles/resume.css";

const project = [
    {
        id: 1,
        name: "Vidya",
        description: "Video Game Reviewer",
        src: '../assets/images/vidya2.png',
        link: "https://luis00809.github.io/Group-3-project/"
    },
    {
        id: 2,
        name: "codeMantic",
        description: "Programmer Dating App",
        src: '../assets/images/codeMantic2.png',
        link: "https://codemantic-e7e316dea174.herokuapp.com/"
    },
    {
        id: 3,
        name: "Day Scheduler",
        description: "Task tracking",
        src: '../assets/images/scheduler2.png',
        link: "https://luis00809.github.io/Day-scheduler/"

    },
    {
        id: 4,
        name: "Note Taker",
        description: "Note Taker",
        src: '../assets/images/noteTaker2.png',
        link: "https://note-taker-system-05e719970f34.herokuapp.com/notes"

    },
    {
        id: 5,
        name: "Weather Tracker",
        description: "Global Weather Report",
        src: '../assets/images/weatherTracker2.png',
        link: "https://luis00809.github.io/Weather-Application/"
    },
    {
        id: 6,
        name: "Password Generator",
        description: "Create a random password",
        src: '../assets/images/PasswordGenerator.png',
        link: "https://luis00809.github.io/password-generator/"

    }
]


const styles = {
    image: {
        borderRadius: "50%",
        border: "4px solid rgb(2, 62, 138)",
        marginBottom: '10px',
        marginTop: '25px',
        width: "150px"
    },
    nameP: {
        fontSize: '70px',
        color: "rgb(3, 4, 94)",
       
    },
    pHeight: {
        height: '12px'
    },
    pColor: {
        color: "rgb(12, 24, 33)",
        
    },
    subHead:{
        color: 'rgb(0, 119, 182)',
    },
    greet: {
        position: 'relative',
        top: '20px'
    },
    margin: {
        margin: '2rem',
        color: "rgb(3, 4, 94)"
    },
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
    errorText: {
        color: "red",
        fontSize: "20px"
    },
    imgSize: {
        width: "100px",
        height: "100px",
    },
}

export default function About() {
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
    <div>
        <div className="container d-flex">
            <div className="row">
                <div>
                    <img style={styles.image} src="../assets/images/Photo for badge .png" alt="Picture of Luis David Carbajal"/>
                </div>
                <div className=" col-sm-12">
                    <p style={styles.greet} className="fs-5 "> Hello! My name is </p>
                    <p style={styles.nameP} >Luis David Carbajal</p>
                    <p style={styles.subHead} className="fs-2">Web-developer</p>
                    <p style={styles.pColor} className="fs-5">
                        I am currently in a coding bootcamp where I am learning how to create a full-stack application.
                        I came into this bootcamp without any prior knowledge in programming and yet it has been a fun experience.
                        Before joining this bootcamp I received my bachelor's degree in Psychology but have decided to change my career path one year out of undergrad.
                        I have always wanted to give coding a chance and thought now would be the best time to do so before I advanced in my psych career. Aside 
                        from all of the technologies I have learned in this program, I learned what it means to be a problem solver and that is what coding is all about.
                        I came in with a mindset that everthing is solvable and that really pushed me forward, especially when decoding a bug in my code.
                        When I take a break from my computer I like to wind down and watch tv, exercise, and expand my knowledge in the world of real estate.
                        Real estate is another journey that I started recently but it had a snowball effect in helping me switch my career path. 
                        Once I acquired my first rental property, it gave me confidence in my abilities to pursue what I actually wanted to do in life rather than being hesitant to start.
                        I know there's going to be frustrating nights ahead, but I am excited for the journey.
                    </p>
                </div>
                
            </div>
        </div>

        <div>
            <h1 style={styles.margin} className='text-center'>Portfolio</h1>
            <Cardlist project={project} />
        </div>

        <div className='bg-danger'>
            <img style={styles.imgSize}  src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"/>
            <img style={styles.imgSize} src='https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png' />
            <img style={styles.imgSize} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' />
            <img style={styles.imgSize} src='https://cdn-icons-png.flaticon.com/512/4299/4299956.png' />
            <img style={styles.imgSize} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
            <img style={styles.imgSize} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Font_Awesome_5_brands_node-js.svg/1200px-Font_Awesome_5_brands_node-js.svg.png' />

        </div>

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
        
        <div>
            <h2 className="text-center">Download my <a href="../assets/resume/DAVID_CARBAJAL_RESUME.pdf" download>Resume</a></h2>
        </div>
                    
    </div>      
    )
}

