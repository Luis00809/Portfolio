import SkillsList from "../components/UI/skillsList";

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
        devSkill: "CSS & HTML Proficiency",
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

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <h3>Download my Resume</h3>
            <div>
                <h2>Skills</h2>
                    <ul>
                        <SkillsList skills={skills} />
                    </ul>
            </div>

            <div>
                <ul>
                    <li>Fresno, CA 93727</li>
                    <li>(559) 349-9071</li>
                    <li>davidcarvajal008@gmail.com</li>
                    <li>Github: Luis00809</li>
                    <li>LinkedIn: luis-david-carbajal-655080233</li>

                </ul>
            </div>

            <h2>EXPERIENCE</h2>
                <div>
                    <h4>Positive Behavior Supports Corporation, Fresno, CA — Registered Behavior Technician (RBT)</h4>
                    <p>September 2022 - PRESENT</p>
                    <h5>Reviewed behavior plans to implement individualized treatment programs</h5>
                    <h5>Supported the family/caregivers in performing behavioral support strategies</h5>

                </div>

                <div>
                    <h4>Behavior Matters, Vacaville, CA— RBT</h4>
                    <p>April 2022 - August 2022</p>
                    <h5>Provided ABA services to ASD children</h5>
                </div>
            <h2>PROFESSIONAL SUMMARY</h2>
                <div>
                    <h4>Complex problem-solver with a driven and growth mindset. Willingness to take on added responsibilities to meet team goals. Seeking a position that offers professional challenges utilizing interpersonal skills, excellent time management, and problem-solving skills.</h4>
                </div>

            <h2>EDUCATION</h2>
            <div>
                <h4>UC Davis Fullstack BOOTCAMP, Online — Certificate of completion </h4>
                <p>June 2023- November 2023</p>
                <h5>Foundational learning of web development and applied skills to real-world problems</h5>
            </div>
            <div>
                <h4>University of California-Davis, Davis, CA — B.S.</h4>
                <p>October 2020 - June 2022</p>
                <h5>Undergrad studies</h5>
            </div>

            <h2>REFERENCES</h2>
                <div>
                    <ul>
                        <li>Hanadie Isebeih, (707) 400-7267</li>
                        <li>Marissa Juarez (510) 408-7059</li>
                        <li>Zoraida Morales (559) 457-9465</li>
                    </ul>
                </div>
            
            <h2>PROJECTS</h2>
                <div>
                    <h3>Vidya —Game reviews</h3>
                    <h4>Worked on a team and created a game review site that applies JavaScript, CSS, and HTML.</h4>

                    <h3>codeMantic — Coder dating site</h3>
                    <h4>A programmers-only dating site that applies MySQL, JavaScript, handlebars, and Express.</h4>

                </div>


        </div>
    )
}