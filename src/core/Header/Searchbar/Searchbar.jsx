import './searchbar.css';

export default function Searchbar() {
    return (
        <form className="search-bar">
            <input
                className="input-search"
                type="search"
                placeholder="Search event"
                name="search"
            />
            <button className="search-button" type="submit">
                <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: '#33a394', fontSize: '24px' }}
                ></i>
            </button>
        </form>
    );
}
