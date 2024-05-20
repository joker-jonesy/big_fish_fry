import {Link} from "react-router-dom";

function Fish({data}){
    return(
        <Link to={"/fish/"+data.name}>
        <div className={"fish block"} key={data.id}>
            <img src={data.img_src_set["1.5x"]} alt={data.name+"zoomed in at 1.5x"}/>
            <h3>{data.name}</h3>
        </div></Link>
    )
}

export default Fish;