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
    <div className='grid gap-6 px-6 py-8 md:grid-cols-2'>

      <div className='rounded-3xl border border-sky-200 bg-sky-50/80 p-6 shadow-sm'>
    
    <ProjectForm onSubmission={Submission} />

      </div>

    <div className='overflow-auto rounded-3xl border border-sky-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm'>

    <BarSearch onSearch={setQuery} />
    {Filtered.length ===0 ? (<p className='text-white font-bold justify-self-center'>No Projects Added</p>)

   :(Filtered.map((Project)=>
   (<CardProjects key= {Project.ProjectName} project={Project} />)) )}
    


    </div>
    
      
    </div>

    
    
    </>
  )
}
