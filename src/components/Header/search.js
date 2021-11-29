import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Search = () => {
    return (
        <div className="input-area">
            <input className="search-area" type="search" placeholder="Search"></input>
            <div className="info">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    );
};

export default Search;