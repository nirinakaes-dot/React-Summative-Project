

export default function BarSearch(e){
    e.preventDefault()
    

    return(
        <>
        <section>
            <form>
                
                <input type="text"
                onChange={(e)=> onSearch(e.target.value) }></input>
                <button >Search</button>



            </form>

        </section>
        
        
        
        </>
    )
}