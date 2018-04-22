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

export default ({ exercises, category }) => {
	return (
		<Grid container sm={12}>  
			<LeftPane category={category} exercises={exercises} styles={styles} />
			<RightPane exercises={exercises} styles={styles} />
		</Grid>
	);
}