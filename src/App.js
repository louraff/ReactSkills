import SkillList from "./components/SkillList"
import NewSkillForm from "./components/NewSkillForm"
import "./style.css"


const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

function App() {
    return(
        <div className="App">
        <h1 className="teal-text">React Todo</h1>

        <SkillList skills={skills}/>

        < NewSkillForm />
        </div>
    )
}

export default App