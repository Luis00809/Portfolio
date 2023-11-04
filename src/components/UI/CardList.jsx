function Cardlist(props) {
    return (
        <div className="container">
            <div className="row">
                {props.project.map(item => (
                    <div key={item.id}>
                        <img src={item.src} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cardlist;