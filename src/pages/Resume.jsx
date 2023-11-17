import SkillsList from "../components/UI/skillsList";
import "../styles/resume.css";

const skills = [
    {
        devSkill: "JavaScript",
        id: 1,
    },
    {
        devSkill: "Data Structures and Algorithms",
        id: 2,
    },
    {
        devSkill: "API Design",
        id: 3,
    },
    {
        devSkill: "Mongo",
        id: 4,
    },
    {
        devSkill: "CSS & HTML ",
        id: 5,
    },
    {
        devSkill: "Project Coordination",
        id: 6,
    },
    {
        devSkill: " MySQL",
        id: 7,
    },
    {
        devSkill: "SQL",
        id: 8,
    },
    {
        devSkill: "Git",
        id: 9,
    },
    {
        devSkill: "Web Applications",
        id: 10,
    },
    {
        devSkill: "React",
        id: 11,
    },
    {
        devSkill: "Heroku",
        id: 12,
    },
]


const styles = {
    box: {
        display: "flex",
        justifyContent: "center",
        fontSize: "10px",
        height: "280px",
        marginTop: "40px"
        
    },
    innerBox: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
    },
    skillsBox: {
        width: "100%",
    },
    dateP: {
        fontSize: "12px"
    }
    
}

export default function Resume() {
    return (
        <div className="container">
            <h2 className="text-center">Download my Resume</h2>
            <div className="row">
                <div style={styles.box} >
                    <div style={styles.innerBox}>
                        <div style={styles.skillsBox} className="d-flex flex-column">                    
                            <div>
                                <h2 className="text-center">Skills</h2>
                            </div>
                            <div style={styles.skillsBox} className="container" >
                                    <SkillsList skills={skills} />
                            </div>
                        </div>
                    </div>

                    <div style={styles.innerBox}>
                        
                        <ul id="contactInfo">
                            <li>Fresno, CA 93727</li>
                            <li>(559) 349-9071</li>
                            <li>
                                <a target="_blank" href="mailto:davidcarvajal008@gmail.com">davidcarvajal008@gmail.com</a>
                            </li>
                            <li>
                                Github: <a target="_blank" href="https://github.com/Luis00809?tab=repositories">Luis00809</a>
                            </li>
                            <li>
                                LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/luis-david-carbajal-655080233">Luis Carbajal</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div style={styles.box} >
                    <div style={styles.innerBox}>
                        <div style={styles.skillsBox} >                    
                            <div>
                              <h2 className="text-center">EXPERIENCE</h2>
                            </div>

                            <div id="experienceSection" >
                                <div id="strech" >
                                    <h4>Positive Behavior Supports Corporation, Fresno, CA — Registered Behavior Technician (RBT)</h4>
                                    <p style={styles.dateP}>September 2022 - PRESENT</p>
                                    <h5>•Reviewed behavior plans to implement individualized treatment programs</h5>
                                    <h5>•Supported the family/caregivers in performing behavioral support strategies</h5>
                                </div>

                                <div id="strech" >
                                    <h4>Behavior Matters, Vacaville, CA— RBT</h4>
                                    <p style={styles.dateP}>April 2022 - August 2022</p>
                                    <h5> •Provided ABA services to ASD children</h5>
                                </div>
                            </div>   
                        </div>
                    </div>
                    
                    <div style={styles.innerBox}>
                        <div style={styles.skillsBox}>
                            <div>
                                <h2 className="text-center">PROFESSIONAL SUMMARY</h2>
                                <h4 className="text-center" id="proSummary">Complex problem-solver with a driven and growth mindset. Willingness to take on added responsibilities to meet team goals. Seeking a position that offers professional challenges utilizing interpersonal skills, excellent time management, and problem-solving skills.</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.box}>
                    <div style={styles.innerBox}>
                        <div style={styles.skillsBox}>

                            <div>
                                <h2 className="text-center">EDUCATION</h2>
                            </div>

                            <div>
                                <h4>UC Davis Fullstack BOOTCAMP, Online — Certificate of completion </h4>
                                <p style={styles.dateP}>June 2023- November 2023</p>
                                <h5>•Foundational learning of web development and applied skills to real-world problems</h5>
                            </div>
                             <div>
                                <h4>University of California-Davis, Davis, CA — B.S.</h4>
                                <p style={styles.dateP}>October 2020 - June 2022</p>
                                <h5>•Undergrad studies</h5>
                            </div>
                        </div>
                    </div>
                    
                    
                
                    
                    <div style={styles.innerBox}>
                        <div style={styles.innerBox}>
                            <div style={styles.skillsBox}>
                                <h2 className="text-center">PROJECTS</h2>
                                    <h4><a target="_blank" href="https://luis00809.github.io/Group-3-project/">Vidya</a> —Game reviews</h4>
                                    <h5>Worked on a team and created a game review site that applies JavaScript, CSS, and HTML.</h5>

                                    <h4><a target="_blank" href="https://codemantic-e7e316dea174.herokuapp.com/">codeMantic</a> —Coder dating site</h4>
                                    <h5>A programmers-only dating site that applies MySQL, JavaScript, handlebars, and Express.</h5>
                            </div>
                        </div>

                    </div>
                </div>

                <div style={styles.box}>
                    <div>
                        <h2 className="text-center">REFERENCES</h2>
                        <ul id="contactInfo">
                            <li>Hanadie Isebeih, (707) 400-7267</li>
                            <li>Marissa Juarez (510) 408-7059</li>
                            <li>Zoraida Morales (559) 457-9465</li>
                        </ul>
                    </div>
                </div>

            </div>
            


        </div>
    )
}