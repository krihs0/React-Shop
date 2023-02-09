import "./GalleryCard.css"
import getToBeRenderedFigures from "./helpers/galleryCardHelper";

const GalleryCard = ({drinks}) =>{
    return(
        <>
            <article className="galleryCard">
                {getToBeRenderedFigures(drinks)}
            </article>
        </>
    )
}

export default GalleryCard;