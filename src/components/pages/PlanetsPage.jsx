import {useGetPlanetsByPageQuery} from "../../api/star_wars.js";
import {useState} from "react";

function PlanetsPage() {

    const [page, setPage] = useState(1)
    const {isLoading, data} = useGetPlanetsByPageQuery(page);

    return (
        <>
            {isLoading ? <h1>Loading Planets</h1> :
                <>
                    <div>
                        {data.results.map((i) =>
                            <h1 key={i.id}>{i.name}</h1>)}
                    </div>
                    <div>
                        {data.previous && <button onClick={()=>setPage(page-1)}>Previous</button>}
                        {data.next && <button onClick={()=>setPage(page+1)}>Next</button>}
                    </div>
                </>
            }


        </>
    )
}

export default PlanetsPage