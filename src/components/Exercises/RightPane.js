import React, { Fragment } from 'react';
import { Grid, Paper, Typography} from 'material-ui';

export default ({ styles, id, title, description, editMode }) => {
	return (
		<Grid item sm={6}>
			<Paper style={ styles.Paper }>
				{
					(editMode) 
					?<form />
					: <Fragment>
						<Typography
							variant="display1"
						>
							{ title }
						</Typography>
						<Typography variant="subheading" style={{marginTop: 20}}>
							{ description }
						</Typography>
					 </Fragment>
				}

				
			</Paper>
		</Grid>
	);
}
