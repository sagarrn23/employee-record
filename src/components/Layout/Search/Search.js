import React from 'react';
import classes from './Search.module.css';

const search = (props) => {
    return (
        <div className={classes.search}>
            <input type="text" onChange={props.search} placeholder="Search record"/>
        </div>
    )
}

export default search;