import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from "react-router-dom";
import NavSection from './components/UI/Navbar';
import Footer from './components/UI/footer';


function App() {
    return (
        <>
             <NavSection />
             <main>
                <Outlet />
             </main>
             <Footer />
        </>
    );
}

export default App;