function SkillsList(props) {
    return (
        <div>
            {props.skills.map(item => (
            <li key={item.id}>{item.devSkill}</li>
            ))}
        </div>
    );
};

export default SkillsList;