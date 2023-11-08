function SkillsList(props) {
    return (
        <div className="text-center" >
            <ul >
                {props.skills.map(item => (
                <li id="skillsList" key={item.id}>{item.devSkill}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default SkillsList;