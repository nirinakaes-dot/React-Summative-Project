import './App.css'
import NavBar from './Additions/NavBar'
import ProjectForm from './Additions/ProjectForm'
import BarSearch from './Additions/BarSearch'
import CardProjects from './Additions/CardProjects'
import { useState } from 'react'


export default function App(){
  const [query, setQuery] = useState('')
  
  const [Projects, setProjects]= useState([])

  const Submission = (newProject) => {
    setProjects([...Projects, newProject])
  }

  const Filtered = Projects.filter((Project)=> Project.ProjectName.toLowerCase().includes(query.toLowerCase()))

  return(
    <>
    <NavBar />
    <div className='flex-row'>

      <div>
    
    <ProjectForm onSubmission={Submission} />

      </div>

    <div>

    <BarSearch onSearch={setQuery} />

   {Filtered.map((Project)=>
   (<CardProjects key= {Project.ProjectName} project={Project} />)) }
    


    </div>
    
      
    </div>

    
    
    </>
  )
}
