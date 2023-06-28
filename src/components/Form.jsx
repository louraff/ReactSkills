import Select from "./Select"
import "./Form.css";


function Form() {
    return (
    <div className="Form">
    <label>Skill</label>
     <input></input>
     <label>Level</label>
     <Select />
     <button>ADD SKILL</button>
     </div>
    )
}

export default Form