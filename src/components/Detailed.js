import React from 'react';
import Hourly from './Hourly';
import Nextweek from './Nextweek';

function Detailed(){
    return(
        <div class = "row">
            <Hourly />
            <Nextweek />
        </div>
    );
}
export default Detailed;