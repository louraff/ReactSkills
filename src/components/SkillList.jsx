import SkillListItem from "./SkillListItem"
import "../styles/SkillList.css";

function SkillList({skills}) {
    return(
        <ul className="SkillList">
            {skills.map((s, idx) => <SkillListItem skill={s} index={idx} key={idx}/>)}
        </ul>  
    )
}

export default SkillList 
