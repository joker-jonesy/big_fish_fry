import {Route, Routes} from "react-router-dom";
import FishesPage from "./components/pages/fishesPage/FishesPage.jsx";
import SingleFishPage from "./components/pages/SingleFishPage.jsx";
import Nav from "./components/navigation/Nav.jsx";
import {useGetFishesQuery} from "./api/index.js";

function App() {
    const {isLoading}=useGetFishesQuery();

    return (
        <>
            <Nav/>
            {isLoading? <div className={"loading"}><h1>Loading Fishies...</h1></div> :<Routes>
                <Route index element={<FishesPage/>}/>
                <Route path={"/fish/:name"} element={<SingleFishPage/>}/>
            </Routes>}
        </>
    )
}

export default App
