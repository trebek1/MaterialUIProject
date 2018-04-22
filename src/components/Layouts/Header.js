import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button} from 'material-ui';

export default props => {
	return (
		<AppBar position="static">
	        <Toolbar>
	          <Typography variant="headline" color="inherit">
	          	Exercise Database 
	          </Typography>
	        </Toolbar>
	    </ AppBar>
	);
}