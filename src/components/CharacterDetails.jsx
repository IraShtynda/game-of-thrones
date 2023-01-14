import { useLoading } from "../hooks/useLoading";
import Spinner from "./Spinner";

const CharacterDetails = ({ fetchMethod, params }) => {
    const character = useLoading(fetchMethod, params);

    return character ? (
        <div className="character-details">
            <img src={character.imageUrl} alt={character.fullName} className='character-details-img'></img>
            <ul>
                <li>Name: <strong>{character.fullName}</strong></li>
                <li>Title: {character.title}</li>
                <li>Family: {character.family}</li>
            </ul>
        </div>
    ) : <Spinner />
}

export default CharacterDetails;