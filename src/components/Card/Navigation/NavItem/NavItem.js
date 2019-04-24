import React from 'react';
import classes from './NavItem.css';

const NavItem = (props) => {

    const style = [classes.NavItem];

    if(props.active) style.push(classes.active);

    return (
        <li className={style.join(' ')} onClick={props.click}>{props.children}</li>
    )
}

export default NavItem;