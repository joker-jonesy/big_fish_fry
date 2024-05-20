import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useState} from "react";

function SingleFishPage(){
    const [toggle, setToggle]=useState(false);
    const fishes = useSelector(state => state.fish);

    const params = useParams();

    const chosenFish =  fishes.find((i)=>i.name===params.name)

    console.log(chosenFish)

    return (
        <div className="profile">
            <img onClick={()=>setToggle(!toggle)} src={chosenFish.img_src_set[toggle?"2x":"1.5x"]} alt={`${chosenFish.name}"zoomed in at ${toggle?"2x":"1.5x"}`}/>
            <h1>{chosenFish.name}</h1>
        </div>
    )
}

export default SingleFishPage;