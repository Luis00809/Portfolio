import { Link, useLocation } from 'react-router-dom';
import "../../styles/navbar.css";

const styles = {
  nav: {
    height: '100px',
    background: "rgb(3, 4, 94)",
  },
  name: {
    color: "rgb(173, 232, 244)"
  },
  border: {
    border: "none"
  },
  
}



 function Nav() {   
    const currentPage = useLocation().pathname;

    return (
      <div style={styles.nav} className='container-fluid d-flex justify-content-between align-items-end '>
        <div className='row'>
          <h1 style={styles.name}>Luis David Carbajal</h1>
        </div>
        <div  className='d-flex justify-content-end '>
          <ul style={styles.border} className="nav nav-tabs ">
            <li className="nav-item ">
              <Link
                to="/"
                style={styles.textColor}
                className={currentPage === '/' ? 'nav-link active back' : 'nav-link'}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                style={styles.textColor}
                className={currentPage === '/portfolio' ? 'nav-link active back' : 'nav-link'}
                
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                style={styles.textColor}
                className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                style={styles.textColor}
                className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
        
    );
}

export default Nav;