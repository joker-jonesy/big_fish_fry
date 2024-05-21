import {useState} from "react";

function Image(props){
    const [error, setError]=useState(false);

    function handleError(){
        setError(true)
    }

    if(error){
        return props.fallback;
    }

    return <img onError={handleError} {...props}/>
}

export default Image;