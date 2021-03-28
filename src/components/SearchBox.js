import React from 'react';

const SearchBox = (props) => {
    const { onSearchChange } = props;
    return (
        <div className="pa2">
            <input 
                type="searchbox"
                placeholder="search robots"
                className="pa3 ba b--green bg-lightest-blue ttu"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox;