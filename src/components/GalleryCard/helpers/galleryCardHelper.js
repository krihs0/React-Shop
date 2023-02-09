
// helper that returns figures for each item in the items file with the information on correct places and also correct classes based on what nth it is 
function getToBeRenderedFigures(drinks){
    let iterator = 1;
    let drinksToBeRendered = drinks.map(drink =>{
        let classToBeAdded = "galleryCard__figure"
        switch(iterator){
            case 1:
                classToBeAdded += " galleryCard__figure--big";
                iterator += 1;
                break;
            case 2:
                classToBeAdded += " galleryCard__figure--middle";
                iterator += 1;
                break;
            case 3:
                classToBeAdded += " galleryCard__figure--middle";
                iterator += 1;
                break;
            default:
                classToBeAdded += " galleryCard__figure--small";
                iterator += 1;
                break;
        }
        return (
            <figure key={drink.name} className={classToBeAdded}>
                <img className="galleryCard__img" src={drink.image} alt={drink.alt} />
            </figure>
        );
    });
    return drinksToBeRendered;
}
export default getToBeRenderedFigures;