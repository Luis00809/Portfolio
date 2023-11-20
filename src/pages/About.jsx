const styles = {
    image: {
        borderRadius: "50%",
        border: "4px solid rgb(2, 62, 138)",
        marginBottom: '10px',
        marginTop: '25px',
        width: "110px"
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
    
    
    
    
}

export default function About() {
    return (
    <div>
        <div className="container d-flex">
            <div className="row">
                <div>
                    <img style={styles.image} src="../src/public/Photo for badge .png" alt="Picture of Luis David Carbajal"/>
                </div>
                <div className=" col-sm-12">
                    <p className="fs-5"> Hello! My name is </p>
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
    </div>      
    )
}

