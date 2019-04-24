import React from 'react';
import Card from '../Card/Card';
import classes from './Layout.css';

const Layout = props => {
	return (
		<div className={classes.Layout}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<Card></Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;

