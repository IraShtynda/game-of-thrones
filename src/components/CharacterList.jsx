import { useLoading } from "../hooks/useLoading";
import ReactPaginate from "react-paginate";
import { useState } from 'react'

const CharactersList = ({ onCharacterDetailsClick, fetchMethod }) => {
    const characters = useLoading(fetchMethod);
    const [pageNumber, setPageNumber] = useState(0);
    const charactersPerPage = 8;
    const pagesVisited = pageNumber * charactersPerPage;
    const displayCharacters = characters.slice(pagesVisited, pagesVisited + charactersPerPage)
    const pageCount = Math.ceil(characters.length / charactersPerPage);
    const changePage = ({ selected }) => setPageNumber(selected);

    return characters && (
        <><div className="characters-wrapper">
            {displayCharacters.map((character) => (
                <div key={character.id} onClick={() => onCharacterDetailsClick(character.id)} className='character-card'>
                    <img src={character.imageUrl} alt={character.fullName} className='character-img' />
                    <p>{character.fullName}</p>
                </div>
            ))}
        </div>
            <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBtns'}
                previousLinkClassName={'previosBtn'}
                nextLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </>
    )
}

export default CharactersList;