import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Search = () => {
    return (
        <div className="InputArea">
            <input className="searchArea" type="search" placeholder="Search"></input>
            <div className="info">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
}

export default Search;