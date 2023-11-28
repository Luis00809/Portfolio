import Cardlist from '../components/UI/CardList';

const project = [
    {
        id: 1,
        name: "Vidya",
        description: "Video Game Reviewer",
        src: '../public/assets/images/vidya2.png',
        link: "https://luis00809.github.io/Group-3-project/"
    },
    {
        id: 2,
        name: "codeMantic",
        description: "Programmer Dating App",
        src: '../public/assets/images/codeMantic2.png',
        link: "https://codemantic-e7e316dea174.herokuapp.com/"
    },
    {
        id: 3,
        name: "Day Scheduler",
        description: "Task tracking",
        src: '../public/assets/images/scheduler2.png',
        link: "https://luis00809.github.io/Day-scheduler/"

    },
    {
        id: 4,
        name: "Note Taker",
        description: "Note Taker",
        src: '../public/assets/images/noteTaker2.png',
        link: "https://note-taker-system-05e719970f34.herokuapp.com/notes"

    },
    {
        id: 5,
        name: "Weather Tracker",
        description: "Global Weather Report",
        src: '../public/assets/images/weatherTracker2.png',
        link: "https://luis00809.github.io/Weather-Application/"
    },
    {
        id: 6,
        name: "Password Generator",
        description: "Create a random password",
        src: '../public/PasswordGenerator.png',
        link: "https://luis00809.github.io/password-generator/"

    }
]

const styles = {
    margin: {
        margin: '3rem',
        color: "rgb(3, 4, 94)"
    }
}

export default function Portfolio() {
    return (
        <div>
            <h1 style={styles.margin} className='text-center'>Portfolio</h1>
            <Cardlist project={project} />
        </div>
    )
}