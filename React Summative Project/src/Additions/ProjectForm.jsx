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
            

             <form className="rounded-3xl bg-white-70 p-6 text-slate-700 shadow-sm" onSubmit={Submission}>
                <h2 className="text-black">Add Project</h2>
                <h3 className="text-slate-500">Fill in the details below</h3>

                <label className="font-medium text-slate-700">Project Name</label>
                <input
                className="m-5 focus:bg-sky-100 rounded-3xl border border-sky-200 bg-sky-50 px-4 py-2 outline-none"
                type="text" 
                value={ProjectName}
                onChange={(e)=> setProjectName(e.target.value)}></input> 
                <br></br>

                <label className="px-4 font-medium text-slate-700">Project Description</label>
                <textarea 
                className="focus:bg-sky-100 rounded-3xl border border-sky-200 bg-sky-50 px-3 py-4 "
                value={ProjectDescription}
                onChange={(e)=> setProjectDescription(e.target.value)}></textarea>
                <br></br>
                <button className="hover:bg-sky-500 rounded-xl bg-sky-700 px-10 py-2 text-white" type="submit">+ Add Project</button>

            </form>




        </section>
           
        
        
        
        
        
        </>
    )
}
