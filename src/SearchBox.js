import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa3">
            <form>
                <input
                className="pa2 ba b--green bg-light-blue"
                type="search"
                placeholder="Search robots"
                onChange={searchChange}
                />
            </form>
        </div>
    )
}

export default SearchBox;