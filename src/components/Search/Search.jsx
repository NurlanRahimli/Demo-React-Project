import React, { useState } from 'react'

export const Search = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => {
                const title = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.title &&
                        user.title.toLowerCase().includes(value)
                    );
                });
                const image = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.image 
                    );
                });
                setResults(title, image);
                console.log(title, image);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div>
            <input
                placeholder="Type to search..."
                value={input}
                className='border outline-none ps-2 py-3 rounded-lg'
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>

    )
}