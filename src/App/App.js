import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import FilterBar from "../components/GalleryCard/FilterBar/FilterBar";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import itemsFromDataFile from "../data/items";
import "./App.css";

const App = () =>{

    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);

    useEffect(() =>{
        let i = 0;
        let types = ["cocktails", "liqour", "wine"]
        
        const GalleryCardsToBeRendered = itemsFromDataFile.map(drinks =>{
            let temp = <GalleryCard key={types[i]} type={types[i]} drinks={drinks} />
            i++;
            return temp
        })

        setItems(GalleryCardsToBeRendered);
        setDefaultItems(GalleryCardsToBeRendered)
    }, []);

    const onFilter = (typeToBeFiltered) =>{
        const copy = [...defaultItems];
        const cardsToBeRendered = copy.filter(card =>{
            if(card.props.type === typeToBeFiltered){
                return card;
            }
        });
        setItems(cardsToBeRendered)
    }


    return (
        <>
            <FilterBar onFilter={onFilter} />
            {items}
        </>
    );
}

export default App

// les 8