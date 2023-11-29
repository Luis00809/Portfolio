
const styles = {
    size: {
        width: '360px',
        height: '300px',
        border: "2px solid rgb(2, 62, 138)",
        borderRadius: "35px",
    
    },
    bottomSpacer: {
        marginBottom: '40px',

    },
    title: {
       position: 'relative',
       bottom: "10px",
       color: "rgb(0, 119, 182)",
       fontSize: "20px"
    },
    backColor: {
        background: "rgb(202, 240, 248)",
        border: 'none',
    }

    
}

function Cardlist(props) {
    return (
        <div className="container ">
            <div className="d-flex flex-wrap justify-content-center gx-2">
                {props.project.map(item => (
                   <div style={styles.backColor} key={item.id} className="card col-md-6 col-lg-4 d-flex flex-column align-items-center" >
                        <a target="_blank" href={item.link}>
                        <img style={styles.size} src={item.src} className="card-img-top" alt={item.name}/>
                        </a>
                       <div className="card-body">
                           <h5 style={styles.title} className="card-title text-center ">{item.name}</h5>
                       </div>
                   </div>
                ))}
            </div>
        </div>
    )
 };
 





export default Cardlist;