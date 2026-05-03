import { useState } from "react"

export default function ProjectForm(onSubmission){
    const [ProjectName, setProjectName]= useState('')
    const [ProjectDescription, setProjectDescription]= useState('')

    const Submission = () =>{
        if(!ProjectName) return ( 'Please Enter The Name Of Your Project')
        if(!ProjectDescription) return('Please Enter A Description Of Your Project')
        onSubmission=({ProjectName, ProjectDescription}) }


    return(
        <>
        <section>

             <form>
                <h2>Add Project</h2>

                <label>Project Name</label>
                <input
                type="text" 
                value={ProjectName}
                onChange={(e)=> setProjectName(e.target.value)}></input>

                <label>Project Description</label>
                <textarea 
                value={ProjectDescription}
                onChange={(e)=> setProjectDescription(e.target.value)}></textarea>
                
                <button>Add Project</button>

            </form>




        </section>
           
        
        
        
        
        
        </>
    )
}