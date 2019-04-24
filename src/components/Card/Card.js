import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import Data from './Data/Data';
import classes from './Card.css';

const Card = props => {

    const [page, setPage] = useState('circles-view');

    const setNavItem = (activePage) => {
        setPage(activePage);
    }

    useEffect(() => {
        console.log( 'Loading ' + page + 'page');
    }, [])

    return (
        <div className={classes.Card}>
            <Navigation setActiveItem={setNavItem} />
            <Data></Data>
        </div>
    )
}

export default Card;