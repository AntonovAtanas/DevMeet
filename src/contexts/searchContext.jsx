import { createContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');

    const value = {
        searchTerm,
        setSearchTerm,
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

SearchContext.displayName = 'SearchContext';

export default SearchContext;
