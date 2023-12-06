import { useContext, useEffect, useState } from 'react';
import SearchContext from '../../../contexts/searchContext';

export default function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const { searchTerm } = useContext(SearchContext);

    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm]);

    if (searchResults.length < 1) {
        return <h1 style={{ textAlign: 'center' }}>No results found!</h1>;
    }

    return (
        <>
            <h1>search results</h1>
        </>
    );
}
