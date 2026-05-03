import { useState } from 'react'
import './App.css'
import './Additions/NavBar'
import NavBar from './Additions/NavBar'
import ProjectForm from './Additions/ProjectForm'
import BarSearch from './Additions/BarSearch'
import CardProjects from './Additions/CardProjects'


export default function App(){
  return(
    <>
    <NavBar />
    <ProjectForm />
    <BarSearch />
    <CardProjects />
    
    
    </>
  )
}
