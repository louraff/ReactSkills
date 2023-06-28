import SkillListItem from "./SkillListItem"
import "./SkillList.css";

function SkillList({skills}) {
    return(
        <ul className="SkillList">
            {skills.map((s) => <SkillListItem skill={s}/>)}
        </ul>  
    )
}

export default SkillList 
