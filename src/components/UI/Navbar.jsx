import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../styles/resume.css"

import { useMediaQuery } from 'react-responsive';



const styles = {
  containerStyle: {
    height: "30px",
    position: "fixed",
    zIndex: "1"
  },
  navs: {
    fontFamily: 'open sans',
    fontSize: '20px'
  }
}

 function NavSection() { 
  const smallScreen = useMediaQuery({ query: '(max-width: 576px)' });
  
    return (
      <Container style={styles.containerStyle} fluid >
        <Row>
          <Col>
                <Nav className={smallScreen? 'justify-content-center' : 'justify-content-end'} activeKey="/home">
                <Nav.Item >
                  <Nav.Link className='navI' style={styles.navs}  href="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='navI' style={styles.navs} href="#portfolio" eventKey="link-1">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='navI' style={styles.navs} href="#skills" eventKey="link-1">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='navI' style={styles.navs} href="#contact" eventKey="link-1">Contact</Nav.Link>
                </Nav.Item>
                </Nav>
          </Col>
        </Row>
      </Container>
      
    );
}

export default NavSection;