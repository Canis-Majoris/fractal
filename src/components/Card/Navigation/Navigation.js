import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';
import classes from './Navigation.css';

const Navigation = (props) => {

    const [items] = useState([
        {id: 'fractal-view', name: 'Fractal view'},
        // {id: 'list-view', name: 'List view'},
    ]);

    const [activeItemId, setActiveItemId] = useState('fractal-view');

    const generateMenuItems = () => {
        return items.map((el) => {
            return <NavItem key={el.id} active={activeItemId === el.id} click={() => changeMenuItem(el.id)}>{el.name}</NavItem>
        });
    }

    const changeMenuItem = (id) => {
        setActiveItemId(id);
    }

    return (
        <div className="row">
            <div className="col-12">
                <nav className={classes.Navigation} >
                    <ul className={classes['nav-list']}>
                        {generateMenuItems()}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;