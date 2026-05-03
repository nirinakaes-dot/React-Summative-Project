import { useState } from "react"

export default function ProjectForm({onSubmission}){
    const [ProjectName, setProjectName]= useState('')
    const [ProjectDescription, setProjectDescription]= useState('')

    const Submission = (e) =>{

  //////////////////////Prevent Reloading of page/////////////////      
        e.preventDefault()

  ////////////////////////////Validation ///////////////////////////

        if(!ProjectName) {alert( 'Please Enter The Name Of Your Project')
             return } 

        if(!ProjectDescription){alert('Please Enter A Description Of Your Project') 
            return}

        onSubmission({ProjectName, ProjectDescription}) 

 //////////////////////////////////Clears the Input//////////////
        setProjectDescription('')
        setProjectName('')
    }



    return(
        <>
        <section>

             <form onSubmit={Submission}>
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
                
                <button type="submit">Add Project</button>

            </form>




        </section>
           
        
        
        
        
        
        </>
    )
}