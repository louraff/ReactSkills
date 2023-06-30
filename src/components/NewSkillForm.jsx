
import "../styles/NewSkillForm.css"
import {useState} from 'react'
import SkillList from './SkillList'

function NewSkillForm({skills, setSkills}) {

    const [formData, setFormData] = useState({
        name: "",
        level: 3
    })

    function handleChange(e) {
        console.log(`${e.target.name} : ${e.target.value}`)
        const newFormData = {
            ...formData, 
            [e.target.name]: e.target.value}

        setFormData(newFormData)
    }

    function handleSubmit(e){
        e.preventDefault()
        const newSkills = [...skills, formData]
        setSkills(newSkills)
        setFormData({name:"", level:3})
    }

    return(
    <>
        <form className="Form" onSubmit={handleSubmit}>
            <label>Skill</label>
            <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} />
            <label>Level</label>
            <select 
                name="level" 
                value={formData.level} 
                onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    </>
 
    )
}

export default NewSkillForm

