import {Link} from "react-router-dom";
import {useState} from "react";
import Image from "./Image.jsx";

function Fish({data}) {

    const [modal, setModal] = useState(false);
    const [toggle, setToggle]=useState(false);

    return (
        // <Link to={"/fish/"+data.name}>
        <>
            <div className={"fish block"} key={data.id} onClick={()=>setModal(true)}>
                <Image src={data.img_src_set["1.5x"]} alt={data.name + "zoomed in at 1.5x"}
                       fallback={<h1>No Image</h1>}/>
                <h3>{data.name}</h3>
            </div>
            <div className="modal" style={{display: modal?"flex":"none"}} onClick={()=>setModal(false)}>
                <img onClick={()=>setToggle(!toggle)} src={data.img_src_set[toggle?"2x":"1.5x"]} alt={`${data.name}"zoomed in at ${toggle?"2x":"1.5x"}`}/>
                <h1>{data.name}</h1>
            </div>
        </>
        // </Link>
    )
}

export default Fish;