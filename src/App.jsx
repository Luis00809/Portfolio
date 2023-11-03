import { Outlet } from "react-router-dom";
// import Nav component here

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