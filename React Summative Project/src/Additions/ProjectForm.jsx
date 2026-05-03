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
                className="bg-white rounded-3xl m-5 "
                type="text" 
                value={ProjectName}
                onChange={(e)=> setProjectName(e.target.value)}></input> 
                <br></br>

                <label className="px-4">Project Description</label>
                <textarea 
                className="bg-white px-3 rounded-3xl py-4"
                value={ProjectDescription}
                onChange={(e)=> setProjectDescription(e.target.value)}></textarea>
                <br></br>
                <button type="submit">Add Project</button>

            </form>




        </section>
           
        
        
        
        
        
        </>
    )
}