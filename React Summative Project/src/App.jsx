import './App.css'
import NavBar from './Additions/NavBar'
import ProjectForm from './Additions/ProjectForm'
import BarSearch from './Additions/BarSearch'
import CardProjects from './Additions/CardProjects'
import { useState } from 'react'


export default function App(){
  const [Projects, setProjects]= useState([])

  const Submission = (newProject) => {
    setProjects([...Projects, newProject])
  }

  return(
    <>
    <NavBar />

    <ProjectForm onSubmission={Submission} />
    <BarSearch />
    <CardProjects />
    
    
    </>
  )
}
