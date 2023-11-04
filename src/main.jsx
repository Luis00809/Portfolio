import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />
            },
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
