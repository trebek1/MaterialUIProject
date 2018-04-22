import React from 'react';
import { Grid, Paper, Typography } from 'material-ui';

export default ({ styles, id, title, description }) => {
	return (
		<Grid item sm={6}>
			<Paper style={ styles.Paper }>

				<Typography
					variant="display1"
				>
					{ title }
				</Typography>
				<Typography variant="subheading" style={{marginTop: 20}}>
					{ description }
				</Typography>
			</Paper>
		</Grid>
	);
}
