import SkillList from "./components/SkillList"
import NewSkillForm from "./components/NewSkillForm"
import "./style.css"
import {useState} from "react"




function App() {

    const [skills, setSkills] = useState([
        { name: "HTML", level: 5 },
        { name: "CSS", level: 3 },
        { name: "JavaScript", level: 4 },
        { name: "Python", level: 2 },
      ]);

    const [showSkills, setShowSkills] = useState(true)

    return(
        <div className="App">
        <h1 className="teal-text">React Todo</h1>

        {showSkills && <SkillList skills={skills}/>}

        < NewSkillForm skills={skills} setSkills={setSkills}/>
        </div>
    )
}

export default App