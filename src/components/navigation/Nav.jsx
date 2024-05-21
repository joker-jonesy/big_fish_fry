import {Link} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFish} from "@fortawesome/free-solid-svg-icons/faFish";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import SearchBar from "./SearchBar.jsx";

function Nav(){

    const [toggle, setToggle]=useState(false);

    return(
        <>
            <div className={"mobile_menu"} style={{left: toggle? "0": "-100%"}}>
                <Link to={"/"} onClick={()=>setToggle(!toggle)}>All Fishes</Link>
                <Link to={"/planets"} onClick={()=>setToggle(!toggle)}>All Planets</Link>
            </div>
            <nav>
                <Link to={"/"} className="logo">
                    <FontAwesomeIcon icon={faFish} size={"3x"}/>
                </Link>
                <SearchBar/>
                <div className="link-container" >
                    <Link to={"/"}>All Fishes</Link>
                    <Link to={"/planets"}>All Planets</Link>
                </div>
                <div className={"menu_toggle"} onClick={()=>setToggle(!toggle)}><FontAwesomeIcon icon={faBars} size={"2x"}/></div>
            </nav>

        </>

    )
}

export default Nav;