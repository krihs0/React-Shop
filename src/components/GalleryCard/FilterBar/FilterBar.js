import { useEffect, useState } from "react";
import "./FilterBar.css"

const FilterBar = ({onFilter}) =>{

    const [labels, setLabels] = useState([]);

    useEffect(() =>{
        let toBeRenderedLabels = [
            {
                name: "cocktails",
                checked: "unchecked",
            },
            {
                name: "liqour",
                checked: "unchecked",
            },
            {
                name: "wine",
                checked: "unchecked",
            }
        ]
        setLabels(toBeRenderedLabels)
    },[])

    const toBeRenderedLabels = labels.map(label =>{
        let input = <input onChange={() => filterItem(label.name)} type="checkbox" name="" id={label.name} className="filterBar__checkbox" />
        if(label.checked === "checked"){
            input = <input checked onChange={() => filterItem(label.name)} type="checkbox" name="" id={label.name} className="filterBar__checkbox" />
        }

        return(
            <div key={label.name} className="filterBarInputWrapper">
                {input}
                <label htmlFor={label.name} className="filterBar__label">{label.name}</label>
            </div>
        );
    })

    const filterItem = (filter) =>{
        const copy = [...labels];
        const newState = copy.map(label =>{
            if(label.name !== filter){
                label.checked = "unchecked";
            }
            if(label.name === filter){
                label.checked = "checked";
            }
            return label;
        })
        setLabels(newState);
        onFilter(filter);
    }

    return(
        <section className="filterBar">
            <div className="filterBarWrapper">
                {toBeRenderedLabels}
            </div>
        </section>
    );
}

export default FilterBar;