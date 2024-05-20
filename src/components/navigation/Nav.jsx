import {Link} from "react-router-dom";

function Nav(){
    return(
        <>
            <nav>
                <div className="logo"></div>
                <div className="link-container">
                    <Link to={"/"}>All Fishes</Link>
                </div>
            </nav>
        </>

    )
}

export default Nav;