import { Outlet } from "react-router-dom";
import Nav from './components/UI/Navbar'

function App() {
    return (
        <>
             <Nav />
             <main>
                <Outlet />
             </main>
        </>
    );
}

export default App;