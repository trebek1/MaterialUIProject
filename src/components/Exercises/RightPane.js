import React, { Fragment } from 'react';
import { Grid, Paper, Typography} from 'material-ui';
import Form from './Form';

export default ({ styles, id, title, description, editMode, onSubmit, muscles, exercise }) => {
	return (
		<Grid item sm={6}>
			<Paper style={ styles.Paper }>
				{
					(editMode) 
					?<Form exercise={exercise} onSubmit={onSubmit} muscles={muscles} />
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
