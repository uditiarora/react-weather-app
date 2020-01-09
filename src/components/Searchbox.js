import React from 'react';
import '../css/searchbox.css';
function Searchbox(props) {
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country"/>
            <button>Get Weather</button>
        </form>
    );
};
export default Searchbox;