import React from 'react';
import { Grid, Paper, Typography } from 'material-ui';

export default ({ styles }) => {
	return (
		<Grid item sm={6}>
			<Paper style={ styles.Paper }>
				<Typography
					variant="display1"
				>
					Welcome!
				</Typography>
				<Typography variant="subheading" style={{marginTop: 20}}>
					Please select an exercise from the list on the left
				</Typography>
			</Paper>
		</Grid>
	);
}
