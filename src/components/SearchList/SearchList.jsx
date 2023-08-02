import { Link } from "react-router-dom";
import { SearchResult } from "../SearchResult/SearchResult";

export const SearchList = ({ results }) => {
    return (
        <div className="absolute top-[100%] left-[21%] z-50 w-[60%]">
            {results.map((result, id) => {
                return(
                    <Link to={`/shop/${result.id}`}>
                        <div key={id}>
                            <SearchResult title={result.title} image={result.image}  />
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};