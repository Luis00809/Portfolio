 
 const styles = { 
    linkStyle: {
        border: "none"
    },
    footer: {
        marginTop: 'auto'
    }
 }
 
 function Footer () {
    return (
      <footer className="footer" style={styles.footer}>
        <div className="container d-flex justify-content-center ">
            <ul className="row">
                <li style={styles.linkStyle} className="list-group-item col-4">
                    <a target="_blank" href="https://github.com/Luis00809?tab=repositories">
                    <img className="col-sm-2" src="../src/assets/images/github icon.png" alt="github icon"/>
                    </a>
                </li>
                <li style={styles.linkStyle} className="list-group-item col-4">
                    <a target="_blank" href="https://www.linkedin.com/in/luis-david-carbajal-655080233">
                    <img className="col-sm-2" src="../src/assets/images/linked in icon black.png" alt="LinkedIn icon"/>
                    </a>
                </li>
                <li style={styles.linkStyle} className="list-group-item col-4">
                    <a target="_blank" href="https://github.com/Luis00809?tab=repositories">
                    <img className="col-sm-2" src="../src/assets/images/mail icon.png" alt="mail icon"/>
                    </a>
                </li>
            </ul>
        </div>
      </footer>  
        
    )    
}

export default Footer;