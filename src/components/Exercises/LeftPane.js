import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, IconButton } from 'material-ui';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import { Delete, Edit } from 'material-ui-icons';

export default ({ styles, exercises, category, onSelect, onDelete, onEdit }) => {
    return (
        <Grid item sm={6}>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises], i) =>
                    !category || category === group
                    ? <Fragment key={i}>
                        <Typography variant="headline" style={{textTransform: 'capitalize'}}>
                            { group }
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ id, title }, index) =>
                            <ListItem button key={index} onClick={() => { onSelect(id)}}>

                                <ListItemText primary={ title }/>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <Edit onClick={()=>{onEdit(id)}} />
                                    </IconButton>
                                    <IconButton>
                                        <Delete onClick={()=>{onDelete(id)}} />
                                    </IconButton>

                                </ListItemSecondaryAction>



                            </ListItem>    
                            )}
                        </List>
                    </Fragment>
                    : null
                    
                )}
            </Paper>
        </Grid>
    );
}