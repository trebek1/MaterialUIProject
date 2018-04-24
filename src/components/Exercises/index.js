import React from 'react';
import { Grid } from 'material-ui';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { withStyles } from 'material-ui/styles';

// could use media queries using this withStyles approach
const styles = theme => ({
	Paper: {
		padding: 20,
		marginTop: 5,
		height: 500,
		overflowY: 'auto'
	}
});

export default withStyles(styles)(({
	classes,
	exercises, 
	category, 
	onSelect,
	editMode,
	onEdit,
	onDelete,
	muscles,
	onEditSubmit,
	exercise,
	exercise: {
		id, 
		title='Welcome!', 
		description="Please select an exercise from the list on the left"
	}

	}) => {
	return (
		<Grid container>  
			<LeftPane muscles={muscles} onEdit={onEdit} onDelete={onDelete} onSelect={onSelect} category={category} exercises={exercises} styles={classes.Paper} />
			<RightPane exercise={exercise} onSubmit={onEditSubmit} muscles={muscles} editMode={editMode} id={id} title={title} description={description}  exercises={exercises} styles={classes.Paper} />
		</Grid>
	);
})