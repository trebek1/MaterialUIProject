import React from 'react';
import { Grid } from 'material-ui';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		height: 500,
		overflowY: 'auto'
	}
}

export default ({ exercises }) => {
	return (
		<Grid container sm={12}>  
			<LeftPane exercises={exercises} styles={styles} />
			<RightPane exercises={exercises} styles={styles} />
		</Grid>
	);
}