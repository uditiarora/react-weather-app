import React from 'react';
import Weather from './Weather';
import Map from './Map';

function Report() {
    return(
        <div class = "row">
            <Weather />
            <Map />
        </div>
    );
}
export default Report;