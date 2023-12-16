import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from "react-router-dom";
import Nav from './components/UI/Navbar';
import Footer from './components/UI/footer';


function App() {
    return (
        <>
             <Nav />
             <main>
                <Outlet />
             </main>
             <Footer />
        </>
    );
}

export default App;