
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";

import "./App.css";

const App = () =>{
    const [drinksForProductPage, setDrinksForProductPage] = useState([])

    const onGalleryCardClicked = (drinks) =>{
        setDrinksForProductPage(drinks);
    }

    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked}/>}/>
                <Route path="/product/:type" element={<Productpage drinks={drinksForProductPage}/>}/>
            </Routes>
        </>
    )
    
}

export default App;

// les 8