import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../components/GalleryCard/FilterBar/FilterBar";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import itemsFromDataFile from "../data/items";

const Homepage = (props) =>{

    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);

    const onGalleryCardClicked = (drinks) =>{
        props.onGalleryCardClicked(drinks)
    }

    useEffect(() =>{
        let i = 0;
        let types = ["cocktails", "liqour", "wine"]
        
        const GalleryCardsToBeRendered = itemsFromDataFile.map(drinks =>{
            let temp = <Link onClick={() =>onGalleryCardClicked(drinks)} to={`/product/${types[i]}`} key={types[i]} type={types[i]}><GalleryCard drinks={drinks} /></Link>
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

export default Homepage;