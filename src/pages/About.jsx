import Cardlist from '../components/UI/CardList';
import SkillsList from "../components/UI/skillsList";
import { motion } from 'framer-motion';
import HeadingAnimation from '../components/UI/Heading'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';



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
        width: "250px",
        height: '30%'
    },
    nameP: {
        fontSize: '70px',
        color: "rgb(255, 255, 255)",
        fontFamily: 'open sans',

       
    },
    pHeight: {
        height: '12px'
    },
    pColor: {
        color: "rgb(245, 245, 245)",
        fontFamily: 'open sans',
    },
    messageValues: {
        color: "rgb(4, 15, 15)",
        fontFamily: 'open sans',
    },
    inputColor: {
        fontFamily: 'open sans',
        color: 'rgb(4, 15, 15)'
    },
    greet: {
        position: 'relative',
        top: '20px',
        color: 'rgb(72, 202, 228)',
        fontFamily: 'open sans',

    },
    box: {
        flexGrow: 1
    },
    parentBox: {
       display: 'flex',
       flexDirection: 'column',
       width: "100%",
       height: "610px"
    },
    errorText: {
        color: "red",
        fontSize: "20px"
    },
    imgSize: {
        width: "100px",
        height: "100px",
    },
    containerEl: {
        height: '100vh',
        width: '100%'
    },
    inBetweenSizes: {
        height: '140vh',
        width: '100%'
    },
    smallScreen: {
        height: '260vh',
        width: '100%'
    },
    contactS: {
        height: '40vh',
        width: '100%'
    },
    resume: {
        color: 'rgb(72, 202, 228)',
        fontFamily: 'open sans',
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

    const isMediumScreen = useMediaQuery({query: '(max-width: 991px)' });

    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
    const isInBetweenSizes = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });


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
        <Container  >
            <div style={styles.containerEl}>
                <Row className=' h-100 d-flex align-items-center'>
                    <Col m={12} lg={4}   > 
                        <div className=' d-flex justify-content-center '>
                            <img style={styles.image} src="../assets/images/Photo for badge .png" alt="Picture of Luis David Carbajal"/>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {/* <p style={styles.greet} className="fs-5 "> Hello! My name is </p>
                            <p style={styles.nameP} >Luis David Carbajal</p> */}
                            <HeadingAnimation classH={isMediumScreen? 'mb-3 text-center' : 'mb-3'} label={'Web Developer'} />
                            <p style={styles.pColor} className="fs-5">
                                I am a full-stack developer who specializes in backend procedures, such as handeling api routes and managing databases.
                                I started my programming journey via a bootcamp where I learned the fundamentals of web development.              
                            </p>
                            <p style={styles.pColor} className="fs-5">
                                Aside from all of the technologies I have learned from the bootcamp, I learned that coding is all about being a problem solver.
                                I came in with a mindset that everything is solvable and that really pushed me forward.
                            </p> 
                            <p style={styles.pColor} className="fs-5">
                                When I'm not coding away, I like to play video games, exercise, and expand my knowledge in the world of real estate.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>


            {/* portfolio */}
            <div style={isSmallScreen ? styles.smallScreen : isInBetweenSizes ? styles.inBetweenSizes : styles.containerEl}>
                <Row >
                    <Col>
                        <HeadingAnimation classH={'text-center mb-3'} label={'Portfolio'} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Cardlist project={project} />
                    </Col>
                </Row>
            </div>
            {/* portfolio */}


            {/* skills */}
            <div style={styles.containerEl} className=' d-flex flex-column justify-content-center'>
                <Row>
                    <Col>
                        <div >
                            <HeadingAnimation classH={'mb-3 text-center'} label={'Skills'} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='skills-container'>
                            <SkillsList />
                        </div>
                    </Col>
                </Row>
            </div>
            {/* skills */}
            

            {/* contact form */}
            <div style={styles.contactS}>
                <Row>
                    <Col>
                        <div style={styles.parentBox}>
                            <div style={styles.box} className='container'>
                            <HeadingAnimation classH={'mb-3 text-center'} label={'Contact Me'} />
                                <form ref={form} onSubmit={handleSubmit}>
                                        <div className="mb-3 text-center">
                                            <label style={styles.pColor} htmlFor="exampleInputEmail1" className="  form-label">Name:</label>
                                            <input 
                                                value={name}
                                                name='name'
                                                style={styles.inputColor}
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
                                                style={styles.inputColor}
                                                name='email'
                                                onChange={handleInputChange}
                                                type='email'
                                                placeholder='@email.com'
                                                className='ms-3'
                                            />
                                    </div>
                                    
                                    <div className="input-group">
                                        <span style={styles.messageValues} className="input-group-text">Message:</span>
                                        <textarea 
                                                className="form-control"
                                                style={styles.inputColor} 
                                                value={message}
                                                name='message'
                                                onChange={handleInputChange}
                                                type='text'
                                                placeholder='Leave a message'>

                                        </textarea>
                                    </div>
                                    <div className='d-flex justify-content-center test '>
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
                    </Col>
                    <Col xs={12}>
                        <div>
                            <h2 style={styles.pColor} className="text-center">Download my <span style={styles.resume}><a href="../assets/resume/DAVID_CARBAJAL_RESUME.pdf" download>Resume</a></span></h2>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* contact form */}

            {/* resume */}
            
        </Container>
    </div>      
    )
}

