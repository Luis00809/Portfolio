import Cardlist from '../components/UI/CardList';

const project = [
    {
        id: 1,
        name: "Vidya",
        description: "Video Game Reviewer",
        src: '../src/assets/images/Vidya Project.png'
    },
    {
        id: 2,
        name: "codeMantic",
        description: "Programmer Dating App",
        src: '../src/assets/images/codeMantic.png'
    },
    {
        id: 3,
        name: "Day Scheduler",
        description: "Task tracking",
        src: '../src/assets/images/DayScheduler.png'
    },
    {
        id: 4,
        name: "Note Taker",
        description: "Note Taker",
        src: '../src/assets/images/noteTaker.png'
    },
    {
        id: 5,
        name: "Weather Tracker",
        description: "Global Weather Report",
        src: '../src/assets/images/WeatherApp.png'
    },
    {
        id: 6,
        name: "Password Generator",
        description: "Create a random password",
        src: '../src/assets/images/PasswordGenerator.png'
    }
]

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <Cardlist project={project} />
        </div>
    )
}