import {Link} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFish} from "@fortawesome/free-solid-svg-icons/faFish";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

function Nav(){

    const [toggle, setToggle]=useState(false);

    return(
        <>
            <div className={"mobile_menu"} style={{left: toggle? "0": "-100%"}}>
                <Link to={"/"} onClick={()=>setToggle(!toggle)}>All Fishes</Link>
            </div>
            <nav>
                <Link to={"/"} className="logo">
                    <FontAwesomeIcon icon={faFish} size={"3x"}/>
                </Link>
                <div className="link-container" >
                    <Link to={"/"}>All Fishes</Link>
                </div>
                <div className={"menu_toggle"} onClick={()=>setToggle(!toggle)}><FontAwesomeIcon icon={faBars} size={"2x"}/></div>
            </nav>

        </>

    )
}

export default Nav;