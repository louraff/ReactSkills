import "./SkillListItem.css";

function SkillListItem({skill}) {
    return(
        <>
    <li className="SkillListItem">{skill.name}<span className="level">{skill.level}</span></li>
    </>
    )
}

export default SkillListItem

