import { useState } from "react"

export default function ProjectForm(){
    const [ProjectName, setProjectName]= useState('')
    const [ProjectDescription, setProjectDescription]= useState('')


    return(
        <>
        <section>

             <form>
                <h2>Add Project</h2>

                <label>Project Name</label>
                <input
                type="text" 
                value={ProjectName}
                onChange={(e)=setProjectName(e.target.value)}></input>

                <label>Project Description</label>
                <textarea 
                value={ProjectDescription}
                onChange={(e)=setProjectDescription(e.target.value)}></textarea>
                
                <button>Add Project</button>

            </form>




        </section>
           
        
        
        
        
        
        </>
    )
}