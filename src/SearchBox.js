import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange} // call the searchChange function from props when the input is changed
            />
        </div>
    );
};

export default SearchBox;