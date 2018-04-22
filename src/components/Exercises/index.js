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

export default ({ 
	exercises, 
	category, 
	onSelect,
	editMode,
	onDelete,
	onEdit,
	exercise: {
		id, 
		title='Welcome!', 
		description="Please select an exercise from the list on the left"
	} 
	}) => {
	return (
		<Grid container sm={12}>  
			<LeftPane onEdit={onEdit} onDelete={onDelete} onSelect={onSelect} category={category} exercises={exercises} styles={styles} />
			<RightPane editMode={editMode} id={id} title={title} description={description}  exercises={exercises} styles={styles} />
		</Grid>
	);
}