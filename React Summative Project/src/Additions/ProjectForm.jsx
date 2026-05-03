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
                <input type="text" value={ProjectName}></input>

                <label>Project Description</label>
                <textarea value={ProjectDescription}></textarea>
                
                <button>Add Project</button>

            </form>




        </section>
           
        
        
        
        
        
        </>
    )
}