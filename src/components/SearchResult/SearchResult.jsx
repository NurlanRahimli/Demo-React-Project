import { Link } from "react-router-dom";

export const SearchResult = ({ image, title }) => {
    return (
        <Link >
            <div
                className="flex bg-white z-50 gap-3 border py-3 ps-4"
                onClick={(e) => alert(`You selected ${title}!`)}
            >
                <img src={image} className="w-[3%]" alt="" />
                {title}
            </div>
        </Link>
    );
};