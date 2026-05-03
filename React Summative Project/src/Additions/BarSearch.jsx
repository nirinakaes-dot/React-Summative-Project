

export default function BarSearch({onSearch}){
    const Search = (e)=>{
        e.preventDefault()
    }

    

    return(
        <>
        <section>
            <form>
                
                <input type="text" className="focus:bg-white py-1.5 rounded-s-xl"
                onChange={(e)=> onSearch(e.target.value) }></input>
                <button className="hover:bg-sky-500 rounded-r-lg bg-sky-700 px-8 py-1.5 text-white" >Search</button>



            </form>

        </section>
        
        
        
        </>
    )
}