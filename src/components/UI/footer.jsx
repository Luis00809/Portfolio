 
 const styles = { 
    imgSize: {
        width: "40px",
        height: "40px",
    },
    boxSize:{
        display: "flex",
        justifyContent: "center",
        width: "40px",

    },
    parentBox: {
        width: "100%",
    },
    border: {
        marginTop: '90px',
        paddingTop: "10px",
    }
 }
 
 function Footer () {
    return (
      <footer style={styles.border}>
        <div className="container d-flex justify-content-center">
            <div style={styles.parentBox} className="row d-flex justify-content-evenly ">
                <div style={styles.boxSize} className=" col-4 ">
                    <a target="_blank" href="https://github.com/Luis00809?tab=repositories">
                        <img style={styles.imgSize} src="../assets/images/github icon.png" alt="github icon"/>
                    </a>
                </div>
                <div style={styles.boxSize} className="col-4">
                    <a target="_blank" href="https://www.linkedin.com/in/luis-david-carbajal-655080233">
                        <img style={styles.imgSize} src="../assets/images/linked in icon black.png" alt="LinkedIn icon"/>
                    </a>
                </div>
                <div style={styles.boxSize} className="col-4">
                    <a target="_blank" href="https://stackoverflow.com/users/22882754/david-carbajal">
                        <img style={styles.imgSize} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt="stack overflow icon"/>
                    </a> 
                </div>
            </div>
            
        </div>
        
      </footer>  
        
    )    
}

export default Footer;