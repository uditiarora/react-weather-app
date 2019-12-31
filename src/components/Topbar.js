import React from 'react';
import Searchbox from './Searchbox';
import Longitude from './Longitude';
import Latitude from './Latitude';

function Topbar() {
    return (
        <div class = "row">
            <Searchbox />
            <Longitude />
            <Latitude />
        </div>
    );
}

export default Topbar;