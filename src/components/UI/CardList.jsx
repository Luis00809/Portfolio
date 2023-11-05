
const styles = {
    size: {
        width: '250px',
        height: '250px'
    }
}

function Cardlist(props) {
    return (
        <div className="container">
            <div className="row d-flex flex-wrap gx-2 ">
                {props.project.map(item => (
                    <div key={item.id} className="col-lg-4 col-md-5 col-sm-6">
                        <img style={styles.size} src={item.src} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cardlist;