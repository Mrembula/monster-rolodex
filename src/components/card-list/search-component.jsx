import React from 'react';

import '../styles/search.css';

export const SearchBox = ({placeHolder, handleChange}) => (
    <input
        className= 'search'
        type='search' placeholder= {placeHolder} onChange={handleChange}
    />
)