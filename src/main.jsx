import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/Resume';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMePage />,
            },
            {
                path: '/portfolio',
                element: <PortfolioPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
            {
                path: 'resume',
                element: <ResumePage />
            },
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
