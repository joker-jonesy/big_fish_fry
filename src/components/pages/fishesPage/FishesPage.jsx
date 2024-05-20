import {useSelector} from "react-redux";
import Fish from "./Fish.jsx";

function FishesPage() {

    const fishes = useSelector(state => state.fish);

    return (
        <>
            <div className="wrapper">
                {fishes.length<1 ? <h1>No swimming fishes...</h1> : fishes.map((i) =>
                    <Fish key={i.id} data={i}/>
                )}
            </div>

        </>
    )
}

export default FishesPage;