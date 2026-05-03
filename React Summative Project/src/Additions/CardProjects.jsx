

export default function CardProjects({project}){

    return(
        <>
        <section className="m-4 rounded-3xl border border-sky-200 bg-sky-50 p-5 text-left">
            <h3 className="text-lg font-semibold text-slate-800">{project.ProjectName}</h3>

            <p className="mt-2 text-slate-600">{project.ProjectDescription}</p>




        </section>
        
        
        </>
    )
}
